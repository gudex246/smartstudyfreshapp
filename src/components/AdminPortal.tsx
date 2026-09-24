import React, { useState } from 'react';
import {
  Shield,
  Lock,
  Unlock,
  KeyRound,
  Plus,
  Edit2,
  Trash2,
  Download,
  Upload,
  RotateCcw,
  BookOpen,
  FileQuestion,
  Bell,
  Layers,
  CheckCircle2,
  X,
  Database,
  Eye,
  AlertTriangle,
  Video,
  CreditCard,
  UserCheck,
  Check,
  Clock,
  ExternalLink,
  DollarSign,
  Sparkles,
  FileText,
  RefreshCw
} from 'lucide-react';
import { useApp, ADMIN_EMAIL } from '../context/AppContext';
import { Course, Chapter, ExamQuestion, VideoTutorial, PaymentSubmission, Announcement } from '../types';
import { cleanQuestionText } from '../utils/textUtils';
import { formatVideoEmbedUrl, isDirectVideoFile } from '../utils/videoUtils';
import { saveVideoBlob } from '../utils/videoStorage';

export const AdminPortal: React.FC = () => {
  const {
    isAdmin,
    adminEmail,
    adminLogin,
    adminLogout,
    setAdminPin,
    courses,
    addCourse,
    updateCourse,
    deleteCourse,
    addChapter,
    updateChapter,
    deleteChapter,
    questions,
    addQuestion,
    bulkAddQuestions,
    updateQuestion,
    deleteQuestion,
    videos,
    addVideo,
    updateVideo,
    deleteVideo,
    paymentSubmissions,
    verifyPaymentSubmission,
    rejectPaymentSubmission,
    deletePaymentSubmission,
    syncRemoteSubmissions,
    isSyncingSubmissions,
    announcements,
    addAnnouncement,
    updateAnnouncement,
    deleteAnnouncement,
    exportDataJSON,
    importDataJSON,
    resetAllToDefault,
    setActiveTab,
    accounts,
    currentAccount,
    switchAccount,
    sampleStudentPaywallStatus,
    setSampleStudentPaywallStatus,
    sampleStudentTutorialStep
  } = useApp();

  // Login form state
  const [emailInput, setEmailInput] = useState(ADMIN_EMAIL);
  const [pinInput, setPinInput] = useState('');
  const [loginError, setLoginError] = useState(false);
  const [newPinModal, setNewPinModal] = useState(false);
  const [newPinValue, setNewPinValue] = useState('');

  // Admin section navigation
  const [adminTab, setAdminTab] = useState<'verifications' | 'videos' | 'questions' | 'notes' | 'announcements' | 'backup'>('verifications');

  // Modal states for CRUD
  const [editingCourse, setEditingCourse] = useState<Partial<Course> | null>(null);
  const [editingChapter, setEditingChapter] = useState<{ courseId: string; chapter: Partial<Chapter> } | null>(null);
  const [editingQuestion, setEditingQuestion] = useState<Partial<ExamQuestion> | null>(null);
  const [editingVideo, setEditingVideo] = useState<Partial<VideoTutorial> | null>(null);
  const [editingAnnouncement, setEditingAnnouncement] = useState<Partial<Announcement> | null>(null);
  const [viewingScreenshot, setViewingScreenshot] = useState<string | null>(null);

  // Filter for questions and videos management
  const [filterCourseId, setFilterCourseId] = useState<string>('all');
  const [paymentStatusFilter, setPaymentStatusFilter] = useState<'all' | 'pending' | 'verified' | 'rejected'>('all');
  const [submissionSearch, setSubmissionSearch] = useState<string>('');
  const [syncFeedback, setSyncFeedback] = useState<string | null>(null);

  const handleSyncRemote = async () => {
    try {
      const count = await syncRemoteSubmissions();
      setSyncFeedback(count > 0 ? `Synced! ${count} new mobile submission(s) loaded.` : 'Up to date. No new submissions pending.');
    } catch {
      setSyncFeedback('Sync check completed.');
    }
    setTimeout(() => setSyncFeedback(null), 4000);
  };

  // Bulk Question Upload states
  const [bulkUploadModal, setBulkUploadModal] = useState<boolean>(false);
  const [bulkCourseId, setBulkCourseId] = useState<string>(courses[0]?.id || 'psyc-1011');
  const [bulkYear, setBulkYear] = useState<string>('2024 Exam');
  const [bulkExamType, setBulkExamType] = useState<'midterm' | 'final' | 'model'>('midterm');
  const [bulkDifficulty, setBulkDifficulty] = useState<'easy' | 'medium' | 'hard'>('medium');
  const [bulkRawText, setBulkRawText] = useState<string>('');
  const [bulkParsedQuestions, setBulkParsedQuestions] = useState<ExamQuestion[]>([]);
  const [bulkSuccessMsg, setBulkSuccessMsg] = useState<string>('');

  const parseBulkQuestions = (text: string, courseId: string, year: string, examType: 'midterm' | 'final' | 'model', difficulty: 'easy' | 'medium' | 'hard') => {
    if (!text.trim()) {
      setBulkParsedQuestions([]);
      return;
    }

    const targetCourse = courses.find((c) => c.id === courseId);
    const courseCode = targetCourse ? targetCourse.code : 'Course';

    // 1. Try parsing as JSON array
    try {
      const trimmed = text.trim();
      if (trimmed.startsWith('[') && trimmed.endsWith(']')) {
        const json = JSON.parse(trimmed);
        if (Array.isArray(json)) {
          const results: ExamQuestion[] = json.map((item, idx) => {
            const rawQ = item.question || item.title || item.text || '';
            return {
              id: 'q-bulk-' + Date.now() + '-' + (idx + 1),
              courseId,
              courseCode,
              year: item.year || year,
              examType: item.examType || examType,
              question: cleanQuestionText(rawQ),
              options: Array.isArray(item.options) ? item.options.map((o: any) => String(o)) : ['TRUE', 'FALSE'],
              correctAnswer: typeof item.correctAnswer === 'number' ? item.correctAnswer : 0,
              explanation: item.explanation || 'Verified academic solution.',
              explanationAmharic: item.explanationAmharic || '',
              explanationAfaanOromo: item.explanationAfaanOromo || '',
              hint: item.hint || '',
              topic: item.topic || courseCode,
              difficulty: item.difficulty || difficulty
            };
          });
          setBulkParsedQuestions(results);
          return;
        }
      }
    } catch {
      // Not JSON, continue to text parsing
    }

    // 2. Parse text blocks
    const lines = text.split('\n');
    const rawBlocks: string[] = [];
    let currentBlock: string[] = [];

    for (const line of lines) {
      const trimmed = line.trim();
      const isNewQuestion = /^(?:Question\s*\d+|\d+[\.\)]|\d+\.\d+[\.\)]?|Q\d+[\.\:]|Item\s*\d+[\.\:])/i.test(trimmed);
      if (isNewQuestion && currentBlock.length > 0) {
        rawBlocks.push(currentBlock.join('\n'));
        currentBlock = [line];
      } else if (trimmed.length > 0 || currentBlock.length > 0) {
        currentBlock.push(line);
      }
    }
    if (currentBlock.length > 0) {
      rawBlocks.push(currentBlock.join('\n'));
    }

    const parsed: ExamQuestion[] = [];
    for (let i = 0; i < rawBlocks.length; i++) {
      const block = rawBlocks[i];
      const bLines = block.split('\n').map((l) => l.trim()).filter(Boolean);
      if (bLines.length === 0) continue;

      const qLines: string[] = [];
      const options: string[] = [];
      let answerLetter = 'A';
      let explanation = '';
      let explanationAm = '';
      let explanationOm = '';
      let hint = '';

      for (const bl of bLines) {
        if (/^[A-D][\.\)]\s*/i.test(bl)) {
          options.push(bl.replace(/^[A-D][\.\)]\s*/i, ''));
        } else if (/^(?:Answer|Key|Correct Answer)[\:\s]+([A-D]|True|False)/i.test(bl)) {
          const m = bl.match(/^(?:Answer|Key|Correct Answer)[\:\s]+([A-D]|True|False)/i);
          if (m) answerLetter = m[1].toUpperCase();
        } else if (/^(?:Explanation|Ibsa|ማብራሪያ)[\:\s]+/i.test(bl)) {
          explanation = bl.replace(/^(?:Explanation|Ibsa|ማብራሪያ)[\:\s]+/i, '');
        } else if (/^(?:Amharic|አማርኛ)[\:\s]+/i.test(bl)) {
          explanationAm = bl.replace(/^(?:Amharic|አማርኛ)[\:\s]+/i, '');
        } else if (/^(?:Afan Oromo|Afaan Oromoo)[\:\s]+/i.test(bl)) {
          explanationOm = bl.replace(/^(?:Afan Oromo|Afaan Oromoo)[\:\s]+/i, '');
        } else if (/^Hint[\:\s]+/i.test(bl)) {
          hint = bl.replace(/^Hint[\:\s]+/i, '');
        } else if (options.length === 0) {
          qLines.push(bl);
        }
      }

      const cleanQ = cleanQuestionText(qLines.join(' '));
      if (!cleanQ) continue;

      let correctIdx = 0;
      if (answerLetter === 'B') correctIdx = 1;
      else if (answerLetter === 'C') correctIdx = 2;
      else if (answerLetter === 'D') correctIdx = 3;
      else if (answerLetter === 'FALSE') correctIdx = 1;

      parsed.push({
        id: 'q-bulk-' + Date.now() + '-' + (i + 1),
        courseId,
        courseCode,
        year,
        examType,
        question: cleanQ,
        options: options.length >= 2 ? options : ['TRUE', 'FALSE'],
        correctAnswer: correctIdx,
        explanation: explanation || 'Verified academic solution based on freshman curriculum.',
        explanationAmharic: explanationAm,
        explanationAfaanOromo: explanationOm,
        hint,
        difficulty,
        topic: courseCode
      });
    }

    setBulkParsedQuestions(parsed);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim() || !pinInput.trim()) {
      setLoginError(true);
      return;
    }
    if (adminLogin({ email: emailInput, pinOrPassword: pinInput })) {
      setLoginError(false);
      setPinInput('');
    } else {
      setLoginError(true);
    }
  };

  const handleChangePin = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPinValue.length >= 4) {
      setAdminPin(newPinValue);
      setNewPinModal(false);
      setNewPinValue('');
      alert('Admin PIN updated successfully!');
    } else {
      alert('PIN must be at least 4 digits.');
    }
  };

  // Export JSON file
  const handleExportFile = () => {
    const json = exportDataJSON();
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `smart_study_backup_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Import JSON file
  const handleImportFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      const res = importDataJSON(content);
      if (res.success) {
        alert(res.message);
      } else {
        alert('Error: ' + res.message);
      }
    };
    reader.readAsText(file);
  };

  const pendingPaymentsCount = paymentSubmissions.filter((p) => p.status === 'pending').length;
  const totalChapters = courses.reduce((acc, c) => acc + c.chapters.length, 0);

  // IF NOT AUTHENTICATED: SHOW SECURE ADMIN LOGIN
  if (!isAdmin) {
    return (
      <div className="max-w-md mx-auto my-10 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-md text-center space-y-6">
        <div className="w-14 h-14 mx-auto rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center">
          <Shield className="w-7 h-7" />
        </div>

        <div>
          <span className="bg-blue-100 text-blue-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
            Admin Authentication
          </span>
          <h2 className="text-xl font-bold text-slate-900 mt-2">
            Smart Study Admin Portal
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Please enter your administrator email and security PIN to access the management portal.
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4 text-left">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Admin Email
            </label>
            <input
              type="email"
              required
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              placeholder="Enter admin email address"
              className="w-full text-xs font-medium p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Security PIN
            </label>
            <input
              id="admin-pin-input"
              type="password"
              required
              value={pinInput}
              onChange={(e) => {
                setPinInput(e.target.value);
                setLoginError(false);
              }}
              placeholder="Enter security PIN"
              className="w-full text-center tracking-widest text-lg font-mono p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500"
              autoFocus
            />
            {loginError && (
              <p className="text-xs text-red-600 font-semibold mt-1">
                Incorrect email or PIN. Please try again.
              </p>
            )}
          </div>

          <button
            id="admin-login-submit"
            type="submit"
            className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-sm transition active:scale-95"
          >
            Sign In to Admin Portal
          </button>
        </form>

        <div className="pt-2 text-center text-[11px] text-slate-400">
          Freshman Course & Question Management • 300 ETB Verification System
        </div>
      </div>
    );
  }

  // AUTHENTICATED ADMIN DASHBOARD
  return (
    <div className="space-y-6">
      {/* Top Admin Status Banner */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shrink-0">
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold">Smart Study Tutorial Admin Portal</h1>
              <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-500/30">
                ACTIVE
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Logged in as: <strong className="text-sky-300 font-mono">{ADMIN_EMAIL}</strong> (Super Admin Guduru Alemayehu)
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Quick Switch to Sample Student Experience */}
          <button
            id="admin-switch-sample-student-btn"
            onClick={() => {
              switchAccount('sample-student');
              setActiveTab('videos');
            }}
            className="px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm transition"
            title="Experience the 300 ETB paywall and learner flow as student Blen Tadesse"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Switch to Sample Student (Paywall Flow)</span>
          </button>

          <button
            onClick={() => setActiveTab('unlock')}
            className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>View Student Payment Page</span>
          </button>

          <button
            onClick={() => setNewPinModal(true)}
            className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition"
          >
            <KeyRound className="w-3.5 h-3.5" />
            <span>Change PIN</span>
          </button>

          <button
            onClick={adminLogout}
            className="px-3 py-2 rounded-xl bg-red-900/80 hover:bg-red-800 text-red-100 text-xs font-semibold flex items-center gap-1.5 transition"
          >
            <Lock className="w-3.5 h-3.5" />
            <span>Log Out</span>
          </button>
        </div>
      </div>

      {/* Quick Statistics Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div
          onClick={() => setAdminTab('verifications')}
          className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs cursor-pointer hover:border-blue-400 transition"
        >
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
              Payment Queue
            </span>
            {pendingPaymentsCount > 0 && (
              <span className="px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-bold">
                {pendingPaymentsCount} pending
              </span>
            )}
          </div>
          <span className="text-2xl font-black text-slate-900 mt-1 block">
            {paymentSubmissions.length}
          </span>
          <span className="text-[11px] text-slate-400">300 ETB submissions</span>
        </div>

        <div
          onClick={() => setAdminTab('videos')}
          className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs cursor-pointer hover:border-blue-400 transition"
        >
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
            Video Tutorials
          </span>
          <span className="text-2xl font-black text-slate-900 mt-1 block">{videos.length}</span>
          <span className="text-[11px] text-slate-400">Lectures & masterclasses</span>
        </div>

        <div
          onClick={() => setAdminTab('questions')}
          className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs cursor-pointer hover:border-blue-400 transition"
        >
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
            CBT Questions
          </span>
          <span className="text-2xl font-black text-slate-900 mt-1 block">{questions.length}</span>
          <span className="text-[11px] text-slate-400">Past exams & models</span>
        </div>

        <div
          onClick={() => setAdminTab('notes')}
          className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs cursor-pointer hover:border-blue-400 transition"
        >
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
            Courses & Notes
          </span>
          <span className="text-2xl font-black text-slate-900 mt-1 block">{totalChapters}</span>
          <span className="text-[11px] text-slate-400">Chapters across {courses.length} courses</span>
        </div>
      </div>

      {/* Admin Navigation Subtabs Bar */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-2 overflow-x-auto scrollbar-none">
        <button
          onClick={() => setAdminTab('verifications')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap ${
            adminTab === 'verifications'
              ? 'bg-blue-600 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <CreditCard className="w-4 h-4" />
          <span>Payment Verifications</span>
          {pendingPaymentsCount > 0 && (
            <span className="px-1.5 py-0.2 rounded-full bg-amber-400 text-slate-950 text-[10px] font-black">
              {pendingPaymentsCount}
            </span>
          )}
        </button>

        <button
          onClick={() => setAdminTab('videos')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap ${
            adminTab === 'videos'
              ? 'bg-blue-600 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <Video className="w-4 h-4" />
          <span>Manage Videos ({videos.length})</span>
        </button>

        <button
          onClick={() => setAdminTab('questions')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap ${
            adminTab === 'questions'
              ? 'bg-blue-600 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <FileQuestion className="w-4 h-4" />
          <span>Manage Questions ({questions.length})</span>
        </button>

        <button
          onClick={() => setAdminTab('notes')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap ${
            adminTab === 'notes'
              ? 'bg-blue-600 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Manage Notes & Courses ({courses.length})</span>
        </button>

        <button
          onClick={() => setAdminTab('announcements')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap ${
            adminTab === 'announcements'
              ? 'bg-blue-600 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <Bell className="w-4 h-4" />
          <span>Announcements ({announcements.length})</span>
        </button>

        <button
          onClick={() => setAdminTab('backup')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap ${
            adminTab === 'backup'
              ? 'bg-blue-600 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <Database className="w-4 h-4" />
          <span>Backup & Reset</span>
        </button>
      </div>

      {/* SUBTAB 1: PAYMENT VERIFICATION QUEUE */}
      {adminTab === 'verifications' && (
        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-2xs space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base font-extrabold text-slate-900">
                  Student Payment Verification Queue (300 ETB)
                </h2>
                <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  Live Sync
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Submissions from all student mobile phones are automatically synced here via cloud relay.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={handleSyncRemote}
                disabled={isSyncingSubmissions}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-bold border border-indigo-200 transition"
                title="Fetch latest mobile submissions from cloud"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isSyncingSubmissions ? 'animate-spin' : ''}`} />
                <span>{isSyncingSubmissions ? 'Checking Cloud...' : 'Sync Mobile Submissions'}</span>
              </button>

              <select
                value={paymentStatusFilter}
                onChange={(e) => setPaymentStatusFilter(e.target.value as any)}
                className="text-xs p-2 rounded-xl border border-slate-200 bg-slate-50 font-semibold"
              >
                <option value="all">All Statuses ({paymentSubmissions.length})</option>
                <option value="pending">Pending Only ({pendingPaymentsCount})</option>
                <option value="verified">Verified</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
          </div>

          {/* Sync status toast feedback */}
          {syncFeedback && (
            <div className="p-3 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-900 text-xs font-semibold flex items-center gap-2">
              <Check className="w-4 h-4 text-indigo-600" />
              <span>{syncFeedback}</span>
            </div>
          )}

          {/* Search bar for submissions */}
          <div className="relative">
            <input
              type="text"
              value={submissionSearch}
              onChange={(e) => setSubmissionSearch(e.target.value)}
              placeholder="Search by student name, phone number, transaction ref, or Sync Code (e.g. SS-3948)..."
              className="w-full pl-3.5 pr-10 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-500"
            />
            {submissionSearch && (
              <button
                onClick={() => setSubmissionSearch('')}
                className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600 text-xs"
              >
                Clear
              </button>
            )}
          </div>

          <div className="space-y-4">
            {paymentSubmissions
              .filter((sub) => {
                if (paymentStatusFilter !== 'all' && sub.status !== paymentStatusFilter) return false;
                if (!submissionSearch.trim()) return true;
                const q = submissionSearch.toLowerCase();
                return (
                  sub.studentName.toLowerCase().includes(q) ||
                  sub.studentPhone.includes(q) ||
                  sub.transactionRef.toLowerCase().includes(q) ||
                  (sub.syncCode && sub.syncCode.toLowerCase().includes(q))
                );
              })
              .map((sub) => (
                <div
                  key={sub.id}
                  className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="flex items-start gap-4">
                    {/* Screenshot thumbnail */}
                    <div
                      onClick={() => sub.screenshotUrl && sub.screenshotUrl.trim() !== '' && setViewingScreenshot(sub.screenshotUrl)}
                      className="w-20 h-20 rounded-xl bg-slate-200 border border-slate-300 overflow-hidden shrink-0 cursor-pointer relative group flex items-center justify-center"
                    >
                      {sub.screenshotUrl && sub.screenshotUrl.trim() !== '' ? (
                        <img
                          src={sub.screenshotUrl}
                          alt="Payment Receipt"
                          className="w-full h-full object-cover group-hover:scale-105 transition"
                        />
                      ) : (
                        <FileText className="w-6 h-6 text-slate-400" />
                      )}
                      {sub.screenshotUrl && sub.screenshotUrl.trim() !== '' && (
                        <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-[10px] font-bold transition">
                          <Eye className="w-4 h-4" />
                        </div>
                      )}
                    </div>

                    <div className="space-y-1 text-xs">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-bold text-slate-900 text-sm">{sub.studentName}</span>
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                            sub.status === 'verified'
                              ? 'bg-emerald-100 text-emerald-800'
                              : sub.status === 'pending'
                              ? 'bg-amber-100 text-amber-800 animate-pulse'
                              : 'bg-red-100 text-red-800'
                          }`}
                        >
                          {sub.status.toUpperCase()}
                        </span>

                        {sub.syncCode && (
                          <span className="bg-indigo-100 text-indigo-800 font-mono font-bold text-[10px] px-2 py-0.5 rounded-md border border-indigo-200">
                            Sync Code: {sub.syncCode}
                          </span>
                        )}

                        <span className="text-slate-400 text-[11px]">
                          • {new Date(sub.submittedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-4 gap-y-1 text-slate-600 text-[11px]">
                        <div>
                          Phone: <strong className="font-mono text-slate-800">{sub.studentPhone}</strong>
                        </div>
                        <div>
                          Method: <strong>{sub.paymentMethod} ({sub.amount} ETB)</strong>
                        </div>
                        <div>
                          Ref: <strong className="font-mono text-blue-700">{sub.transactionRef}</strong>
                        </div>
                      </div>

                      <div className="text-[11px] text-slate-500 pt-1">
                        Notes: {sub.adminNotes || 'No notes added.'}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-2 self-end md:self-auto shrink-0">
                    {sub.studentPhone && (
                      <a
                        href={`https://wa.me/251${sub.studentPhone.replace(/^0/, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center gap-1"
                        title="Chat with student on WhatsApp"
                      >
                        <span>WhatsApp</span>
                      </a>
                    )}

                    {sub.screenshotUrl && sub.screenshotUrl.trim() !== '' && (
                      <button
                        onClick={() => setViewingScreenshot(sub.screenshotUrl)}
                        className="px-3 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center gap-1"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Receipt</span>
                      </button>
                    )}

                    {sub.status !== 'verified' && (
                      <button
                        onClick={() => {
                          verifyPaymentSubmission(sub.id);
                          alert(`Verified payment for ${sub.studentName}! Student now has full access unlocked.`);
                        }}
                        className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1 shadow-xs transition"
                      >
                        <Check className="w-3.5 h-3.5" />
                        <span>Verify & Unlock</span>
                      </button>
                    )}

                    {sub.status === 'verified' && (
                      <span className="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Access Unlocked</span>
                      </span>
                    )}

                    {sub.status === 'pending' && (
                      <button
                        onClick={() => {
                          const reason = prompt('Reason for rejection (e.g. invalid transaction code or wrong amount):');
                          if (reason) {
                            rejectPaymentSubmission(sub.id, reason);
                          }
                        }}
                        className="px-2.5 py-1.5 rounded-lg border border-red-200 bg-white hover:bg-red-50 text-red-600 text-xs font-semibold"
                      >
                        Reject
                      </button>
                    )}

                    <button
                      onClick={() => {
                        if (confirm(`Delete record for ${sub.studentName}?`)) {
                          deletePaymentSubmission(sub.id);
                        }
                      }}
                      className="p-1.5 rounded-lg border border-slate-200 bg-white hover:bg-red-50 text-slate-400 hover:text-red-600"
                      title="Delete Record"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}

            {paymentSubmissions.length === 0 && (
              <div className="text-center py-12 text-slate-400 text-xs">
                No payment submissions yet. Students will appear here after uploading their 300 ETB CBE or Telebirr payment screenshots.
              </div>
            )}
          </div>
        </div>
      )}

      {/* SUBTAB 2: MANAGE VIDEO TUTORIALS */}
      {adminTab === 'videos' && (
        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-2xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-sm font-bold text-slate-900">
                Freshman Video Tutorials Manager ({videos.length})
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Add YouTube lecture embeds or video links, set duration, and toggle 300 ETB Premium lock.
              </p>
            </div>

            <button
              onClick={() =>
                setEditingVideo({
                  id: 'vid-' + Date.now(),
                  courseId: courses[0]?.id || 'math-1011',
                  courseCode: courses[0]?.code || 'Math 1011',
                  title: '',
                  description: '',
                  videoUrl: 'https://www.youtube.com/embed/',
                  duration: '25:00',
                  topic: 'General Topic',
                  instructor: 'Guduru Alemayehu (Smart Study Tutorial)',
                  isPremium: true
                })
              }
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-xs transition"
            >
              <Plus className="w-4 h-4" />
              <span>Add New Video Tutorial</span>
            </button>
          </div>

          <div className="space-y-3">
            {videos.map((vid) => (
              <div
                key={vid.id}
                className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-blue-700">{vid.courseCode}</span>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider bg-white px-2 py-0.5 rounded border border-slate-200">
                      {vid.topic}
                    </span>
                    <span className="text-slate-400">• {vid.duration}</span>
                    {vid.isPremium ? (
                      <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-0.5">
                        <Lock className="w-2.5 h-2.5" /> Premium (300 ETB)
                      </span>
                    ) : (
                      <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded">
                        Free Preview
                      </span>
                    )}
                  </div>

                  <h3 className="font-bold text-slate-900 text-sm">{vid.title}</h3>
                  <p className="text-slate-500 line-clamp-1">{vid.description}</p>
                  <p className="text-[11px] text-slate-400">Instructor: {vid.instructor} | URL: {vid.videoUrl}</p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => setEditingVideo(vid)}
                    className="p-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-600"
                    title="Edit Video"
                  >
                    <Edit2 className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => {
                      if (confirm(`Delete video "${vid.title}"?`)) {
                        deleteVideo(vid.id);
                      }
                    }}
                    className="p-1.5 rounded-lg border border-red-200 bg-white hover:bg-red-50 text-red-600"
                    title="Delete Video"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUBTAB 3: MANAGE QUESTIONS */}
      {adminTab === 'questions' && (
        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-2xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-sm font-bold text-slate-900">
                Exam Question Bank ({questions.length})
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Questions are automatically available in CBT simulator and instant practice tests.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <select
                value={filterCourseId}
                onChange={(e) => setFilterCourseId(e.target.value)}
                className="text-xs p-2 rounded-xl border border-slate-200 bg-slate-50 font-semibold"
              >
                <option value="all">All Courses</option>
                {courses.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.code}
                  </option>
                ))}
              </select>

              <button
                onClick={() => {
                  setBulkRawText('');
                  setBulkParsedQuestions([]);
                  setBulkSuccessMsg('');
                  setBulkCourseId(filterCourseId !== 'all' ? filterCourseId : (courses[0]?.id || 'psyc-1011'));
                  setBulkUploadModal(true);
                }}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold shadow-xs transition"
                title="Upload or bulk import questions with automatic number sanitization"
              >
                <Upload className="w-4 h-4" />
                <span>Upload / Bulk Import</span>
              </button>

              <button
                onClick={() =>
                  setEditingQuestion({
                    id: 'q-' + Date.now(),
                    courseId: courses[0]?.id || 'math-1011',
                    courseCode: courses[0]?.code || 'Math 1011',
                    year: '2024 Exam',
                    examType: 'midterm',
                    question: '',
                    options: ['', '', '', ''],
                    correctAnswer: 0,
                    explanation: '',
                    difficulty: 'medium'
                  })
                }
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-xs transition"
              >
                <Plus className="w-4 h-4" />
                <span>Add Question</span>
              </button>
            </div>
          </div>

          <div className="space-y-3">
            {questions
              .filter((q) => filterCourseId === 'all' || q.courseId === filterCourseId)
              .map((q) => (
                <div
                  key={q.id}
                  className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-2 text-xs"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-blue-700">{q.courseCode}</span>
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider bg-white px-1.5 py-0.5 rounded border border-slate-200">
                          {q.examType}
                        </span>
                        <span className="text-slate-400 text-[11px]">• {q.year}</span>
                      </div>
                      <h4 className="font-bold text-slate-900 text-sm mt-1">{cleanQuestionText(q.question)}</h4>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => setEditingQuestion(q)}
                        className="p-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-600"
                        title="Edit Question"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => {
                          if (confirm('Delete this exam question?')) {
                            deleteQuestion(q.id);
                          }
                        }}
                        className="p-1.5 rounded-lg border border-red-200 bg-white hover:bg-red-50 text-red-600"
                        title="Delete Question"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1">
                    {q.options.map((opt, oIdx) => (
                      <div
                        key={oIdx}
                        className={`p-2 rounded-lg border ${
                          oIdx === q.correctAnswer
                            ? 'bg-emerald-50 border-emerald-300 font-bold text-emerald-900'
                            : 'bg-white border-slate-200 text-slate-600'
                        }`}
                      >
                        {String.fromCharCode(65 + oIdx)}. {opt}
                        {oIdx === q.correctAnswer && ' (Correct)'}
                      </div>
                    ))}
                  </div>

                  <div className="text-[11px] text-slate-500 bg-white p-2 rounded-lg border border-slate-200">
                    <strong>Explanation:</strong> {q.explanation}
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* SUBTAB 4: MANAGE NOTES & COURSES */}
      {adminTab === 'notes' && (
        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-2xs space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-sm font-bold text-slate-900">Courses & Lecture Notes Directory</h2>
              <p className="text-xs text-slate-500">Manage syllabus, chapter notes, formulas, and course metadata.</p>
            </div>
            <button
              onClick={() =>
                setEditingCourse({
                  id: 'course-' + Date.now(),
                  code: 'New 101',
                  name: '',
                  stream: 'both',
                  creditHours: 3,
                  semester: 1,
                  description: '',
                  color: '#2563eb',
                  iconName: 'BookOpen',
                  chapters: []
                })
              }
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-xs transition"
            >
              <Plus className="w-4 h-4" />
              <span>Add New Course</span>
            </button>
          </div>

          <div className="space-y-4">
            {courses.map((course) => (
              <div
                key={course.id}
                className="p-4 sm:p-5 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-blue-700 text-xs">{course.code}</span>
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider bg-white px-2 py-0.5 rounded border border-slate-200">
                        {course.stream} Stream • Sem {course.semester} • {course.creditHours} Cr
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 mt-1">{course.name}</h3>
                    <p className="text-xs text-slate-500 mt-0.5 line-clamp-2">{course.description}</p>
                  </div>

                  <div className="flex items-center gap-2 self-start sm:self-auto">
                    <button
                      onClick={() =>
                        setEditingChapter({
                          courseId: course.id,
                          chapter: {
                            id: 'ch-' + Date.now(),
                            courseId: course.id,
                            number: course.chapters.length + 1,
                            title: '',
                            summary: '',
                            content: '',
                            readTimeMinutes: 10,
                            keyFormulas: []
                          }
                        })
                      }
                      className="px-2.5 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center gap-1 transition"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add Chapter</span>
                    </button>

                    <button
                      onClick={() => setEditingCourse(course)}
                      className="p-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 transition"
                      title="Edit Course"
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => {
                        if (confirm(`Delete course ${course.code} and all attached chapters?`)) {
                          deleteCourse(course.id);
                        }
                      }}
                      className="p-1.5 rounded-lg border border-red-200 bg-white hover:bg-red-50 text-red-600 transition"
                      title="Delete Course"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {course.chapters.length > 0 && (
                  <div className="pt-2 border-t border-slate-200/60">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                      Chapters ({course.chapters.length}):
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {course.chapters.map((ch) => (
                        <div
                          key={ch.id}
                          className="bg-white p-2.5 rounded-xl border border-slate-200 flex items-center justify-between text-xs"
                        >
                          <span className="truncate pr-2">
                            <strong className="font-mono text-slate-500">Ch {ch.number}:</strong> {ch.title}
                          </span>
                          <div className="flex items-center gap-1 shrink-0">
                            <button
                              onClick={() => setEditingChapter({ courseId: course.id, chapter: ch })}
                              className="p-1 text-slate-400 hover:text-slate-700"
                              title="Edit Chapter"
                            >
                              <Edit2 className="w-3 h-3" />
                            </button>
                            <button
                              onClick={() => {
                                if (confirm(`Delete Chapter ${ch.number}: ${ch.title}?`)) {
                                  deleteChapter(course.id, ch.id);
                                }
                              }}
                              className="p-1 text-slate-400 hover:text-red-600"
                              title="Delete Chapter"
                            >
                              <Trash2 className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUBTAB 5: MANAGE ANNOUNCEMENTS */}
      {adminTab === 'announcements' && (
        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-2xs space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-slate-900">Campus Bulletin Manager</h2>
            <button
              onClick={() =>
                setEditingAnnouncement({
                  id: 'ann-' + Date.now(),
                  title: '',
                  date: new Date().toISOString().slice(0, 10),
                  category: 'academic',
                  priority: 'normal',
                  content: ''
                })
              }
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-xs transition"
            >
              <Plus className="w-4 h-4" />
              <span>Post Announcement</span>
            </button>
          </div>

          <div className="space-y-3">
            {announcements.map((ann) => (
              <div
                key={ann.id}
                className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 flex items-start justify-between gap-4 text-xs"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded text-[10px]">
                      {ann.category}
                    </span>
                    <span className="text-[10px] font-bold capitalize text-amber-700">
                      • {ann.priority}
                    </span>
                    <span className="text-slate-400 text-[11px]">• {ann.date}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm">{ann.title}</h3>
                  <p className="text-slate-600 line-clamp-2">{ann.content}</p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => setEditingAnnouncement(ann)}
                    className="p-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-600"
                  >
                    <Edit2 className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => {
                      if (confirm('Delete this announcement?')) {
                        deleteAnnouncement(ann.id);
                      }
                    }}
                    className="p-1.5 rounded-lg border border-red-200 bg-white hover:bg-red-50 text-red-600"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUBTAB 6: DATA BACKUP & RESTORE */}
      {adminTab === 'backup' && (
        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-2xs space-y-6">
          <div>
            <h2 className="text-sm font-bold text-slate-900">
              Smart Study Tutorial Data Backup & Reset
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Export all videos, payment verification records, courses, and exam questions as a JSON backup.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                <Download className="w-5 h-5" />
              </div>
              <h3 className="text-xs font-bold text-slate-900">Export All Data</h3>
              <p className="text-[11px] text-slate-500">
                Download all curriculum, video links, questions, and payment submissions as a JSON file.
              </p>
              <button
                onClick={handleExportFile}
                className="w-full py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition"
              >
                Export JSON Backup
              </button>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <Upload className="w-5 h-5" />
              </div>
              <h3 className="text-xs font-bold text-slate-900">Import JSON Backup</h3>
              <p className="text-[11px] text-slate-500">
                Restore courses, videos, and questions from a previously saved JSON backup.
              </p>
              <label className="w-full block py-2 text-center rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition cursor-pointer">
                Upload Backup File
                <input
                  type="file"
                  accept=".json"
                  onChange={handleImportFile}
                  className="hidden"
                />
              </label>
            </div>

            <div className="p-5 rounded-2xl border border-red-200 bg-red-50/50 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-100 text-red-700 flex items-center justify-center">
                <RotateCcw className="w-5 h-5" />
              </div>
              <h3 className="text-xs font-bold text-red-900">Factory Reset</h3>
              <p className="text-[11px] text-red-800/80">
                Revert all course modules, videos, and CBT questions to standard tutorial defaults.
              </p>
              <button
                onClick={() => {
                  if (confirm('Are you sure you want to reset all data back to the default tutorial state?')) {
                    resetAllToDefault();
                    alert('All data restored to Smart Study Tutorial defaults.');
                  }
                }}
                className="w-full py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition"
              >
                Restore Factory Defaults
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SCREENSHOT LIGHTBOX MODAL */}
      {viewingScreenshot && viewingScreenshot.trim() !== '' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-xs p-4">
          <div className="max-w-2xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 space-y-4 p-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-sm font-bold text-slate-900">
                Student Payment Confirmation Screenshot (300 ETB)
              </h3>
              <button
                onClick={() => setViewingScreenshot(null)}
                className="p-1 text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="max-h-[70vh] overflow-y-auto flex items-center justify-center bg-slate-100 rounded-2xl p-2">
              <img
                src={viewingScreenshot}
                alt="Student Receipt"
                className="max-h-[65vh] object-contain rounded-xl"
              />
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setViewingScreenshot(null)}
                className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold"
              >
                Close Receipt
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: EDIT / ADD VIDEO */}
      {editingVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 overflow-y-auto">
          <div className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="text-sm font-bold text-slate-900">
                {videos.some((v) => v.id === editingVideo.id) ? 'Edit Video Tutorial' : 'Add Video Tutorial'}
              </h3>
              <button
                onClick={() => setEditingVideo(null)}
                className="p-1 text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="col-span-2">
                <label className="block font-bold text-slate-700 mb-1">Video Title</label>
                <input
                  type="text"
                  value={editingVideo.title || ''}
                  onChange={(e) => setEditingVideo({ ...editingVideo, title: e.target.value })}
                  placeholder="e.g. Calculus I: Limits at Infinity & Squeeze Theorem"
                  className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Course</label>
                <select
                  value={editingVideo.courseId}
                  onChange={(e) => {
                    const match = courses.find((c) => c.id === e.target.value);
                    setEditingVideo({
                      ...editingVideo,
                      courseId: e.target.value,
                      courseCode: match?.code || ''
                    });
                  }}
                  className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 font-semibold"
                >
                  {courses.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.code} - {c.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Topic Tag</label>
                <input
                  type="text"
                  value={editingVideo.topic || ''}
                  onChange={(e) => setEditingVideo({ ...editingVideo, topic: e.target.value })}
                  placeholder="e.g. Limits & Continuity"
                  className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50"
                />
              </div>

              <div className="col-span-2 space-y-2">
                <div className="flex items-center justify-between">
                  <label className="block font-bold text-slate-700">
                    Video URL or File
                  </label>
                  <label className="cursor-pointer text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 bg-indigo-50 px-2.5 py-1 rounded-lg border border-indigo-200 transition">
                    <Upload className="w-3.5 h-3.5" />
                    <span>Upload MP4 / WebM File</span>
                    <input
                      type="file"
                      accept="video/mp4,video/webm,video/ogg"
                      className="hidden"
                      onChange={async (e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          const videoId = editingVideo.id || `vid_${Date.now()}`;
                          try {
                            const idbUri = await saveVideoBlob(videoId, file);
                            setEditingVideo({
                              ...editingVideo,
                              id: videoId,
                              videoUrl: idbUri,
                              title: editingVideo.title || file.name.replace(/\.[^/.]+$/, '')
                            });
                          } catch (err) {
                            console.error('Failed to save in IndexedDB, falling back:', err);
                            const fileUrl = URL.createObjectURL(file);
                            setEditingVideo({
                              ...editingVideo,
                              id: videoId,
                              videoUrl: fileUrl,
                              title: editingVideo.title || file.name.replace(/\.[^/.]+$/, '')
                            });
                          }
                        }
                      }}
                    />
                  </label>
                </div>
                <input
                  type="text"
                  value={editingVideo.videoUrl || ''}
                  onChange={(e) => {
                    const raw = e.target.value;
                    const converted = formatVideoEmbedUrl(raw);
                    setEditingVideo({ ...editingVideo, videoUrl: converted });
                  }}
                  placeholder="Paste YouTube watch or embed link (e.g., https://www.youtube.com/watch?v=...)"
                  className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 font-mono text-xs"
                />

                {editingVideo.videoUrl && isDirectVideoFile(editingVideo.videoUrl) ? (
                  <div className="flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-lg font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Direct video file loaded (will stream via HTML5 native player)</span>
                  </div>
                ) : editingVideo.videoUrl?.includes('youtube.com/embed') ? (
                  <div className="flex items-center gap-1.5 text-xs text-indigo-700 bg-indigo-50 border border-indigo-200 px-3 py-1.5 rounded-lg font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                    <span>Safe YouTube embed format active (avoids "Refused to connect" error)</span>
                  </div>
                ) : null}

                <div className="p-2.5 rounded-xl bg-amber-50/80 border border-amber-200/80 text-[11px] text-amber-900 space-y-1">
                  <div className="font-bold flex items-center gap-1 text-amber-800">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>Why does YouTube say "Refused to connect"?</span>
                  </div>
                  <p className="leading-tight text-amber-800">
                    Normal YouTube links (<code className="bg-amber-100/70 px-1 py-0.5 rounded font-mono">youtube.com/watch?v=...</code>) are blocked by browser security (<em>X-Frame-Options</em>) from playing inside websites. We automatically convert your link to embed format (<code className="bg-amber-100/70 px-1 py-0.5 rounded font-mono">youtube.com/embed/...</code>) so it connects seamlessly!
                  </p>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Duration</label>
                <input
                  type="text"
                  value={editingVideo.duration || ''}
                  onChange={(e) => setEditingVideo({ ...editingVideo, duration: e.target.value })}
                  placeholder="e.g. 28:45"
                  className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 font-mono"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Access Level</label>
                <select
                  value={editingVideo.isPremium ? 'premium' : 'free'}
                  onChange={(e) =>
                    setEditingVideo({ ...editingVideo, isPremium: e.target.value === 'premium' })
                  }
                  className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 font-semibold"
                >
                  <option value="premium">Premium Locked (300 ETB)</option>
                  <option value="free">Free Preview</option>
                </select>
              </div>

              <div className="col-span-2">
                <label className="block font-bold text-slate-700 mb-1">Instructor</label>
                <input
                  type="text"
                  value={editingVideo.instructor || ''}
                  onChange={(e) => setEditingVideo({ ...editingVideo, instructor: e.target.value })}
                  placeholder="e.g. Guduru Alemayehu (Smart Study Tutorial)"
                  className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50"
                />
              </div>

              <div className="col-span-2">
                <label className="block font-bold text-slate-700 mb-1">Description</label>
                <textarea
                  rows={3}
                  value={editingVideo.description || ''}
                  onChange={(e) => setEditingVideo({ ...editingVideo, description: e.target.value })}
                  placeholder="Summary of concepts and practice problems covered in this video..."
                  className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50"
                />
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-2">
              <button
                onClick={() => setEditingVideo(null)}
                className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  if (!editingVideo.title || !editingVideo.videoUrl) {
                    alert('Please enter video title and URL');
                    return;
                  }
                  const exists = videos.some((v) => v.id === editingVideo.id);
                  if (exists) {
                    updateVideo(editingVideo as VideoTutorial);
                  } else {
                    addVideo({
                      ...editingVideo,
                      isPremium: editingVideo.isPremium ?? true,
                      views: 0,
                      addedAt: new Date().toISOString().slice(0, 10)
                    } as VideoTutorial);
                  }
                  setEditingVideo(null);
                }}
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold"
              >
                Save Video
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: EDIT / ADD QUESTION */}
      {editingQuestion && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 overflow-y-auto">
          <div className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="text-sm font-bold text-slate-900">Exam Question Editor</h3>
              <button
                onClick={() => setEditingQuestion(null)}
                className="p-1 text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Course</label>
                  <select
                    value={editingQuestion.courseId}
                    onChange={(e) => {
                      const match = courses.find((c) => c.id === e.target.value);
                      setEditingQuestion({
                        ...editingQuestion,
                        courseId: e.target.value,
                        courseCode: match?.code || ''
                      });
                    }}
                    className="w-full p-2 rounded-xl border border-slate-200 bg-slate-50 font-semibold"
                  >
                    {courses.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.code}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Exam Type</label>
                  <select
                    value={editingQuestion.examType || 'midterm'}
                    onChange={(e) =>
                      setEditingQuestion({
                        ...editingQuestion,
                        examType: e.target.value as any
                      })
                    }
                    className="w-full p-2 rounded-xl border border-slate-200 bg-slate-50 font-semibold"
                  >
                    <option value="midterm">Midterm Exam</option>
                    <option value="final">Final Exam</option>
                    <option value="model">Model Practice</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Question Statement</label>
                <textarea
                  rows={3}
                  value={editingQuestion.question || ''}
                  onChange={(e) =>
                    setEditingQuestion({ ...editingQuestion, question: e.target.value })
                  }
                  placeholder="Enter the complete question problem..."
                  className="w-full p-2 rounded-xl border border-slate-200 bg-slate-50 font-medium"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Answer Options (Select correct option index)
                </label>
                <div className="space-y-2">
                  {(editingQuestion.options || ['', '', '', '']).map((opt, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="correctAnswer"
                        checked={editingQuestion.correctAnswer === idx}
                        onChange={() =>
                          setEditingQuestion({ ...editingQuestion, correctAnswer: idx })
                        }
                        className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
                      />
                      <span className="font-bold w-4 text-center">{String.fromCharCode(65 + idx)}.</span>
                      <input
                        type="text"
                        value={opt}
                        onChange={(e) => {
                          const newOpts = [...(editingQuestion.options || ['', '', '', ''])];
                          newOpts[idx] = e.target.value;
                          setEditingQuestion({ ...editingQuestion, options: newOpts });
                        }}
                        placeholder={`Option ${String.fromCharCode(65 + idx)}`}
                        className="flex-1 p-2 rounded-xl border border-slate-200 bg-slate-50"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Detailed Explanation & Solution</label>
                <textarea
                  rows={3}
                  value={editingQuestion.explanation || ''}
                  onChange={(e) =>
                    setEditingQuestion({ ...editingQuestion, explanation: e.target.value })
                  }
                  placeholder="Step-by-step reasoning or mathematical proof shown to student after testing..."
                  className="w-full p-2 rounded-xl border border-slate-200 bg-slate-50"
                />
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-2">
              <button
                onClick={() => setEditingQuestion(null)}
                className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  const cleanQ = cleanQuestionText(editingQuestion.question || '');
                  if (!cleanQ) {
                    alert('Please enter question text');
                    return;
                  }
                  const exists = questions.some((q) => q.id === editingQuestion.id);
                  if (exists) {
                    updateQuestion({ ...editingQuestion, question: cleanQ } as ExamQuestion);
                  } else {
                    addQuestion({
                      ...editingQuestion,
                      question: cleanQ,
                      options: editingQuestion.options || ['', '', '', ''],
                      correctAnswer: editingQuestion.correctAnswer || 0,
                      difficulty: editingQuestion.difficulty || 'medium'
                    } as ExamQuestion);
                  }
                  setEditingQuestion(null);
                }}
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold"
              >
                Save Question
              </button>
            </div>
          </div>
        </div>
      )}

      {/* BULK QUESTION UPLOAD & IMPORT MODAL */}
      {bulkUploadModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 overflow-y-auto">
          <div className="w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl bg-white shadow-2xl border border-slate-200 overflow-hidden my-auto">
            {/* Header */}
            <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-indigo-600/10 text-indigo-600 flex items-center justify-center font-bold">
                  <Upload className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">Upload & Bulk Import Exam Questions</h3>
                  <p className="text-xs text-slate-500">
                    Auto-cleans secondary numbering (e.g. 1.1, 1.2, 1. 1.) and assigns strictly increasing numbers (1, 2, 3...).
                  </p>
                </div>
              </div>
              <button
                onClick={() => setBulkUploadModal(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6 flex-1 text-xs">
              {/* Target Course & Meta Config */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Target Course</label>
                  <select
                    value={bulkCourseId}
                    onChange={(e) => {
                      setBulkCourseId(e.target.value);
                      parseBulkQuestions(bulkRawText, e.target.value, bulkYear, bulkExamType, bulkDifficulty);
                    }}
                    className="w-full p-2.5 rounded-xl border border-slate-200 bg-white font-semibold text-xs"
                  >
                    {courses.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.code} - {c.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Exam Label / Year</label>
                  <input
                    type="text"
                    value={bulkYear}
                    onChange={(e) => {
                      setBulkYear(e.target.value);
                      parseBulkQuestions(bulkRawText, bulkCourseId, e.target.value, bulkExamType, bulkDifficulty);
                    }}
                    placeholder="e.g. 2024 Exam"
                    className="w-full p-2.5 rounded-xl border border-slate-200 bg-white text-xs"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Exam Type</label>
                  <select
                    value={bulkExamType}
                    onChange={(e) => {
                      const val = e.target.value as 'midterm' | 'final' | 'model';
                      setBulkExamType(val);
                      parseBulkQuestions(bulkRawText, bulkCourseId, bulkYear, val, bulkDifficulty);
                    }}
                    className="w-full p-2.5 rounded-xl border border-slate-200 bg-white text-xs font-semibold"
                  >
                    <option value="midterm">Midterm Exam</option>
                    <option value="final">Final Exam</option>
                    <option value="model">Model Exam</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Default Difficulty</label>
                  <select
                    value={bulkDifficulty}
                    onChange={(e) => {
                      const val = e.target.value as 'easy' | 'medium' | 'hard';
                      setBulkDifficulty(val);
                      parseBulkQuestions(bulkRawText, bulkCourseId, bulkYear, bulkExamType, val);
                    }}
                    className="w-full p-2.5 rounded-xl border border-slate-200 bg-white text-xs font-semibold"
                  >
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                  </select>
                </div>
              </div>

              {/* Upload File or Paste Box */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="font-bold text-slate-800 flex items-center gap-1.5">
                    <span>Paste Exam Content or Upload File</span>
                    <span className="text-[10px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded font-mono font-semibold">
                      Auto-strips 1.1, 1.2, 1. 1.
                    </span>
                  </label>

                  <label className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 cursor-pointer text-slate-700 font-semibold text-xs transition">
                    <Upload className="w-3.5 h-3.5" />
                    <span>Upload .txt or .json</span>
                    <input
                      type="file"
                      accept=".txt,.json,.csv"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (!file) return;
                        const reader = new FileReader();
                        reader.onload = (event) => {
                          const content = event.target?.result as string;
                          if (content) {
                            setBulkRawText(content);
                            parseBulkQuestions(content, bulkCourseId, bulkYear, bulkExamType, bulkDifficulty);
                          }
                        };
                        reader.readAsText(file);
                      }}
                    />
                  </label>
                </div>

                <textarea
                  rows={8}
                  value={bulkRawText}
                  onChange={(e) => {
                    setBulkRawText(e.target.value);
                    parseBulkQuestions(e.target.value, bulkCourseId, bulkYear, bulkExamType, bulkDifficulty);
                  }}
                  placeholder={`Paste questions in text or JSON format. For example:

1.1 Which of the following is not a goal of psychology?
A) Description
B) Control
C) Speculation
D) Prediction
Answer: C
Explanation: Psychology relies on empirical scientific methods rather than unfounded speculation.
Amharic: የስነ-ልቦና ግብ ግምት አይደለም፤ ሳይንሳዊ ምርምር ነው።
Afan Oromo: Kaayyoon saayikoolojii tilmaama miti.

1.2 Negative punishment involves the removal of a pleasant stimulus.
A) TRUE
B) FALSE
Answer: A
Explanation: Removing pleasant stimulus to decrease behavior is negative punishment.`}
                  className="w-full p-3.5 rounded-2xl border border-slate-200 bg-slate-50 font-mono text-xs leading-relaxed focus:bg-white transition"
                />
              </div>

              {/* Live Preview of Sanitized Questions */}
              {bulkParsedQuestions.length > 0 && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-900 text-sm">
                        Sanitized Questions Preview ({bulkParsedQuestions.length})
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                        Increasing numbers 1 to {bulkParsedQuestions.length} only
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-500 font-medium">
                      Secondary numbers (1.1, 1.2) automatically stripped
                    </span>
                  </div>

                  <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
                    {bulkParsedQuestions.map((q, idx) => (
                      <div
                        key={q.id}
                        className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-2"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-start gap-2.5">
                            <span className="w-6 h-6 rounded-lg bg-blue-600 text-white font-mono font-bold text-xs flex items-center justify-center shrink-0">
                              {idx + 1}
                            </span>
                            <div>
                              <h5 className="font-bold text-slate-900 text-xs leading-snug">
                                {cleanQuestionText(q.question)}
                              </h5>
                              <span className="text-[10px] text-slate-400 font-mono">
                                {q.courseCode} • {q.year} • {q.examType}
                              </span>
                            </div>
                          </div>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">
                            Answer: {String.fromCharCode(65 + q.correctAnswer)}
                          </span>
                        </div>

                        {/* Options */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pl-8">
                          {q.options.map((opt, oIdx) => (
                            <div
                              key={oIdx}
                              className={`px-2.5 py-1.5 rounded-lg text-[11px] border flex items-center gap-2 ${
                                oIdx === q.correctAnswer
                                  ? 'bg-emerald-50 border-emerald-300 text-emerald-900 font-bold'
                                  : 'bg-white border-slate-200 text-slate-600'
                              }`}
                            >
                              <span className="w-4 h-4 rounded bg-slate-100 text-slate-700 text-[10px] font-bold flex items-center justify-center">
                                {String.fromCharCode(65 + oIdx)}
                              </span>
                              <span>{opt}</span>
                            </div>
                          ))}
                        </div>

                        {/* Multilingual Support indicators */}
                        {(q.explanation || q.explanationAmharic || q.explanationAfaanOromo) && (
                          <div className="pl-8 pt-1 flex items-center gap-2 text-[10px] text-slate-500">
                            {q.explanation && (
                              <span className="px-1.5 py-0.5 rounded bg-slate-200/60 font-semibold text-slate-700">
                                English Explanation
                              </span>
                            )}
                            {q.explanationAmharic && (
                              <span className="px-1.5 py-0.5 rounded bg-indigo-50 font-semibold text-indigo-700">
                                አማርኛ
                              </span>
                            )}
                            {q.explanationAfaanOromo && (
                              <span className="px-1.5 py-0.5 rounded bg-amber-50 font-semibold text-amber-700">
                                Afaan Oromoo
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {bulkSuccessMsg && (
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>{bulkSuccessMsg}</span>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500">
                {bulkParsedQuestions.length} valid questions ready for import
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setBulkUploadModal(false)}
                  className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition"
                >
                  Cancel
                </button>
                <button
                  disabled={bulkParsedQuestions.length === 0}
                  onClick={() => {
                    if (bulkParsedQuestions.length === 0) return;
                    bulkAddQuestions(bulkParsedQuestions);
                    setBulkSuccessMsg(`Successfully imported ${bulkParsedQuestions.length} questions in strictly increasing sequential order!`);
                    setTimeout(() => {
                      setBulkUploadModal(false);
                      setBulkRawText('');
                      setBulkParsedQuestions([]);
                      setBulkSuccessMsg('');
                    }, 1200);
                  }}
                  className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white text-xs font-bold flex items-center gap-2 shadow-xs transition"
                >
                  <Check className="w-4 h-4" />
                  <span>Import {bulkParsedQuestions.length} Questions</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CHANGE PIN MODAL */}
      {newPinModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4">
          <div className="w-full max-w-sm rounded-3xl bg-white p-6 shadow-2xl border border-slate-200 space-y-4">
            <h3 className="text-sm font-bold text-slate-900">Change Admin PIN</h3>
            <p className="text-xs text-slate-500">
              Set a new secure PIN for {ADMIN_EMAIL}.
            </p>
            <form onSubmit={handleChangePin} className="space-y-4">
              <input
                type="password"
                maxLength={8}
                value={newPinValue}
                onChange={(e) => setNewPinValue(e.target.value)}
                placeholder="Enter new 4-digit PIN"
                className="w-full p-2.5 rounded-xl border border-slate-200 text-center font-mono text-lg"
                autoFocus
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setNewPinModal(false)}
                  className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-xl bg-blue-600 text-white text-xs font-bold"
                >
                  Update PIN
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
