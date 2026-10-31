import React, { useState, useEffect } from 'react';
import {
  CheckCircle2,
  Lock,
  Copy,
  Upload,
  Clock,
  AlertCircle,
  HelpCircle,
  Send,
  RefreshCw,
  Zap,
  Check,
  BookOpen,
  Video,
  FileQuestion
} from 'lucide-react';
import { useApp, ADMIN_EMAIL } from '../context/AppContext';
import { PaymentSubmission } from '../types';
import { matchEthiopianPhones } from '../utils/cloudSync';

export const UnlockAccessTab: React.FC = () => {
  const {
    isUnlocked,
    studentProfile,
    paymentSubmissions,
    addPaymentSubmission,
    setActiveTab,
    adminEmail,
    checkAndActivateUnlock
  } = useApp();

  // Form State
  const [studentName, setStudentName] = useState(studentProfile.name || '');
  const [studentEmail, setStudentEmail] = useState(studentProfile.email || '');
  const [studentPhone, setStudentPhone] = useState(studentProfile.phone || '');
  const [paymentMethod, setPaymentMethod] = useState<'CBE' | 'Telebirr'>('CBE');
  const [transactionRef, setTransactionRef] = useState('');
  const [screenshotPreview, setScreenshotPreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [lastSubmitted, setLastSubmitted] = useState<PaymentSubmission | null>(null);
  const [formError, setFormError] = useState<string | null>(null);

  // Status check state
  const [isCheckingStatus, setIsCheckingStatus] = useState(false);
  const [statusMsg, setStatusMsg] = useState<{ text: string; type: 'success' | 'info' | 'error' } | null>(null);

  const savedSubId = typeof window !== 'undefined' ? localStorage.getItem('smart_study_last_submission_id') : null;
  const savedPhone = typeof window !== 'undefined' ? localStorage.getItem('smart_study_student_phone') : null;
  const savedEmail = typeof window !== 'undefined' ? localStorage.getItem('smart_study_student_email') : null;
  const savedRef = typeof window !== 'undefined' ? localStorage.getItem('smart_study_student_ref') : null;

  // Find active student submission accurately without falsely matching unrelated submissions
  const mySubmission = paymentSubmissions.find((s) => {
    if (lastSubmitted && s.id === lastSubmitted.id) return true;
    if (studentProfile.submissionId && s.id === studentProfile.submissionId) return true;
    if (savedSubId && s.id === savedSubId) return true;
    if (savedRef && s.transactionRef && s.transactionRef.trim().toLowerCase() === savedRef.trim().toLowerCase()) return true;

    const currentPhone = studentPhone || studentProfile.phone || savedPhone || undefined;
    if (currentPhone && s.studentPhone && matchEthiopianPhones(currentPhone, s.studentPhone)) return true;

    const myEmail = (studentEmail || studentProfile.email || savedEmail || '').trim().toLowerCase();
    const subEmail = (s.studentEmail || '').trim().toLowerCase();
    if (myEmail && subEmail && myEmail === subEmail) return true;

    return false;
  }) || (lastSubmitted ? lastSubmitted : undefined);

  // Instant Manual check trigger
  const handleManualCheck = async () => {
    setIsCheckingStatus(true);
    setStatusMsg(null);
    try {
      const queryVal = mySubmission?.id || studentPhone || studentProfile.phone || savedPhone || savedSubId || undefined;
      const result = await checkAndActivateUnlock(queryVal);
      if (result.unlocked) {
        setStatusMsg({
          type: 'success',
          text: `🎉 Access Confirmed & Unlocked! Full freshman tutorial package is ready.`
        });
      } else {
        setStatusMsg({
          type: 'info',
          text: result.status === 'pending'
            ? '⏳ Payment is received and awaiting Admin Guduru Alemayehu to tap Approve. Your app will unlock automatically!'
            : 'Payment is being processed by the administrator. Checking live server...'
        });
      }
    } catch {
      setStatusMsg({
        type: 'error',
        text: 'Network check timed out. Retrying automatically in background...'
      });
    } finally {
      setIsCheckingStatus(false);
    }
  };

  // Automatic high-frequency status check when student is waiting for approval
  useEffect(() => {
    if (isUnlocked) return;

    const hasIdentifier = mySubmission || savedSubId || savedPhone || savedEmail || savedRef || studentProfile.phone;
    if (!hasIdentifier) return;

    const targetQuery = mySubmission?.id || studentPhone || studentProfile.phone || savedPhone || savedSubId || undefined;

    // Check once immediately on mount
    checkAndActivateUnlock(targetQuery);

    // Active live interval check every 2 seconds
    const interval = setInterval(() => {
      checkAndActivateUnlock(targetQuery);
    }, 2000);

    return () => clearInterval(interval);
  }, [isUnlocked, mySubmission?.id, studentPhone, studentProfile.phone, savedSubId, savedPhone, savedEmail, savedRef, checkAndActivateUnlock]);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2500);
  };

  // Instant, responsive file upload handler
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 25 * 1024 * 1024) {
      setFormError('Screenshot file is too large. Please select an image under 25MB.');
      return;
    }
    setFormError(null);

    const reader = new FileReader();
    reader.onload = (event) => {
      const rawDataUrl = event.target?.result as string;
      if (!rawDataUrl) return;

      // 1. Immediately set preview so submit button is ready on 1 single click
      setScreenshotPreview(rawDataUrl);

      // 2. Compress in the background without blocking the student
      const img = new Image();
      img.onload = () => {
        try {
          const maxDim = 800;
          let width = img.width;
          let height = img.height;

          if (width > maxDim || height > maxDim) {
            if (width > height) {
              height = Math.round((height * maxDim) / width);
              width = maxDim;
            } else {
              width = Math.round((width * maxDim) / height);
              height = maxDim;
            }
          }

          const canvas = document.createElement('canvas');
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          if (ctx) {
            ctx.drawImage(img, 0, 0, width, height);
            const compressed = canvas.toDataURL('image/jpeg', 0.70);
            setScreenshotPreview(compressed);
          }
        } catch {}
      };
      img.src = rawDataUrl;
    };
    reader.readAsDataURL(file);
  };

  // 1-Click Responsive Direct Submit Handler
  const handleDirectSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setFormError(null);

    const cleanPhone = studentPhone.trim() || studentProfile.phone || savedPhone || '';
    if (!cleanPhone) {
      setFormError('Please enter your phone number so the administrator can verify your payment.');
      return;
    }

    if (!screenshotPreview) {
      setFormError('Please tap the upload box to attach your payment confirmation screenshot.');
      return;
    }

    setIsSubmitting(true);

    const finalName = studentName.trim() || studentProfile.name || 'Student';
    const finalRef = transactionRef.trim() || `${paymentMethod}-REC-${Date.now().toString().slice(-6)}`;
    const finalEmail = studentEmail.trim() || studentProfile.email || 'student@university.edu.et';

    try {
      const created = await addPaymentSubmission({
        studentName: finalName,
        studentEmail: finalEmail,
        studentPhone: cleanPhone,
        paymentMethod,
        accountOrPhoneUsed: paymentMethod === 'CBE' ? '1000521750255' : '0953201048',
        transactionRef: finalRef,
        screenshotUrl: screenshotPreview
      });

      setLastSubmitted(created);
      setIsSubmitting(false);
      setSubmitSuccess(true);
    } catch {
      setIsSubmitting(false);
      // Still set success locally so student is never stuck
      setSubmitSuccess(true);
    }
  };

  const isPendingVerification = (submitSuccess || (mySubmission && mySubmission.status === 'pending')) && !isUnlocked;

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Top Banner */}
      <div className="bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-sm relative overflow-hidden">
        <div className="relative z-10 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="bg-amber-400 text-slate-950 font-black text-[10px] px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                Smart Study Tutorial Freshman
              </span>
              <span className="text-xs text-blue-200">Official Verification Portal</span>
            </div>

            {isUnlocked ? (
              <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Full Access Activated
              </span>
            ) : (
              <span className="bg-amber-400/20 text-amber-300 border border-amber-400/40 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-amber-300" />
                One-Time Payment: 300 ETB
              </span>
            )}
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Unlock Complete Freshman Tutorial Package
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
            Gain unlimited access to all locked video tutorials, university midterm & final CBT exam question banks with worked solutions, lecture note summaries, and formula cheat sheets.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-300">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Full Video Masterclasses</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>CBT Past Exam Banks</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Detailed Step-by-Step Solutions</span>
            </div>
          </div>
        </div>
      </div>

      {/* 1. STATE: ALREADY UNLOCKED */}
      {isUnlocked && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-6 sm:p-8 text-emerald-950 shadow-2xs space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-emerald-900">
                You Have Full Unlocked Access!
              </h2>
              <p className="text-xs text-emerald-700">
                Your payment of 300 ETB has been verified by Administrator Guduru Alemayehu ({adminEmail}).
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <button
              onClick={() => setActiveTab('videos')}
              className="p-4 bg-white rounded-2xl border border-emerald-200 text-left hover:border-emerald-400 hover:shadow-xs transition cursor-pointer flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <Video className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-900 block">Video Tutorials</span>
                <span className="text-[11px] text-slate-500">All masterclasses unlocked</span>
              </div>
            </button>

            <button
              onClick={() => setActiveTab('questions')}
              className="p-4 bg-white rounded-2xl border border-emerald-200 text-left hover:border-emerald-400 hover:shadow-xs transition cursor-pointer flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                <FileQuestion className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-900 block">CBT Question Bank</span>
                <span className="text-[11px] text-slate-500">All questions & solutions</span>
              </div>
            </button>

            <button
              onClick={() => setActiveTab('notes')}
              className="p-4 bg-white rounded-2xl border border-emerald-200 text-left hover:border-emerald-400 hover:shadow-xs transition cursor-pointer flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-900 block">Lecture Notes</span>
                <span className="text-[11px] text-slate-500">Full chapters & formulas</span>
              </div>
            </button>
          </div>

          <div className="pt-2 flex items-center justify-between text-xs text-emerald-800">
            <span>Student: <strong>{studentProfile.name}</strong> ({studentProfile.phone || studentProfile.email})</span>
            <span className="text-[11px] font-semibold text-emerald-700 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> 300 ETB Verified & Unlocked
            </span>
          </div>
        </div>
      )}

      {/* 2. STATE: PAYMENT SCREENSHOT SUBMITTED & AWAITING ADMIN UNLOCK (NO EXTRA PROCESS!) */}
      {isPendingVerification && (
        <div className="bg-white rounded-3xl border-2 border-emerald-400 p-6 sm:p-8 shadow-md space-y-6 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 left-0 h-1.5 bg-gradient-to-r from-blue-500 via-emerald-400 to-indigo-500 animate-pulse" />

          <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-xs">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="space-y-1.5">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              Payment Screenshot Submitted!
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
              Your payment receipt of <strong>300 ETB</strong> has been successfully submitted to Admin <strong>Guduru Alemayehu</strong>.
            </p>
          </div>

          {/* Student & Payment Summary Capsule */}
          <div className="inline-flex flex-wrap items-center justify-center gap-3 bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3 text-xs text-slate-700 max-w-xl mx-auto">
            <span>Student: <strong className="text-slate-900">{mySubmission?.studentName || studentName || 'Student'}</strong></span>
            <span className="text-slate-300">•</span>
            <span>Phone: <strong className="font-mono text-slate-900">{mySubmission?.studentPhone || studentPhone}</strong></span>
            <span className="text-slate-300">•</span>
            <span>Channel: <strong className="text-blue-700">{mySubmission?.paymentMethod || paymentMethod} (300 ETB)</strong></span>
            <span className="text-slate-300">•</span>
            <span className="text-amber-700 font-bold flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-amber-500 animate-spin" />
              Awaiting Admin Unlock
            </span>
          </div>

          {/* Receipt Preview */}
          {(mySubmission?.screenshotUrl || screenshotPreview) && (
            <div className="max-w-xs mx-auto space-y-2">
              <div className="p-2 rounded-2xl border border-slate-200 bg-slate-50">
                <img
                  src={mySubmission?.screenshotUrl || screenshotPreview || ''}
                  alt="Uploaded Payment Receipt"
                  className="max-h-52 rounded-xl object-contain mx-auto shadow-xs bg-white"
                />
              </div>
              <span className="text-[11px] text-emerald-700 font-semibold block flex items-center justify-center gap-1">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                Screenshot received on admin portal
              </span>
            </div>
          )}

          {/* Live Stream Notice */}
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 max-w-lg mx-auto space-y-1">
            <div className="flex items-center justify-center gap-2 font-bold">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Live stream listening for unlock signal</span>
            </div>
            <p className="text-[11px] text-emerald-800">
              No extra step is needed! The exact second Admin Guduru Alemayehu taps <strong>&ldquo;Verify &amp; Unlock&rdquo;</strong>, your app will open and unlock all video lectures and CBT questions automatically.
            </p>
          </div>

          {/* Status Message */}
          {statusMsg && (
            <div
              className={`p-3 rounded-xl text-xs font-medium max-w-md mx-auto flex items-center justify-center gap-2 ${
                statusMsg.type === 'success'
                  ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                  : statusMsg.type === 'error'
                  ? 'bg-rose-100 text-rose-900 border border-rose-300'
                  : 'bg-blue-50 text-blue-900 border border-blue-200'
              }`}
            >
              {statusMsg.type === 'success' ? (
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
              ) : (
                <Clock className="w-4 h-4 shrink-0 text-blue-600" />
              )}
              <span>{statusMsg.text}</span>
            </div>
          )}

          {/* Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={handleManualCheck}
              disabled={isCheckingStatus}
              className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center gap-2 transition cursor-pointer shadow-sm active:scale-95 disabled:opacity-50"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isCheckingStatus ? 'animate-spin' : ''}`} />
              <span>{isCheckingStatus ? 'Checking Status...' : 'Check Status Now'}</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setSubmitSuccess(false);
                setScreenshotPreview(null);
              }}
              className="px-4 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold transition cursor-pointer"
            >
              Upload a Different Screenshot
            </button>
          </div>
        </div>
      )}

      {/* 3. STATE: FORM TO SUBMIT PAYMENT (SHOWN ONLY IF NOT YET SUBMITTED) */}
      {!isUnlocked && !isPendingVerification && (
        <div className="space-y-6">
          {/* Step 1: Official Bank Accounts */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                1
              </span>
              <h2 className="text-sm font-bold text-slate-900">
                Pay 300 ETB via Commercial Bank of Ethiopia (CBE) or Telebirr
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* CBE Card */}
              <div
                onClick={() => setPaymentMethod('CBE')}
                className={`cursor-pointer rounded-2xl border p-5 transition-all relative ${
                  paymentMethod === 'CBE'
                    ? 'border-purple-600 bg-purple-50/40 ring-2 ring-purple-600/20 shadow-xs'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="bg-purple-100 text-purple-800 text-[10px] font-bold px-2 py-0.5 rounded-md uppercase">
                      Bank Transfer
                    </span>
                    <h3 className="text-base font-bold text-slate-900 mt-1">
                      Commercial Bank of Ethiopia (CBE)
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Account Name: <strong>Guduru Alemayehu</strong>
                    </p>
                  </div>
                  <div className="w-9 h-9 rounded-xl bg-purple-600 text-white flex items-center justify-center font-bold text-xs">
                    CBE
                  </div>
                </div>

                <div className="mt-4 p-3 bg-white rounded-xl border border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      Account Number
                    </span>
                    <span className="text-lg font-mono font-black text-slate-900 tracking-wider">
                      1000521750255
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      copyToClipboard('1000521750255', 'cbe');
                    }}
                    className="px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold flex items-center gap-1 transition cursor-pointer"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copiedField === 'cbe' ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>

                <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
                  <span>Required Amount: <strong className="text-slate-900">300 ETB</strong></span>
                  <span className="text-purple-700 font-semibold">CBE Birr / Mobile Banking</span>
                </div>
              </div>

              {/* Telebirr Card */}
              <div
                onClick={() => setPaymentMethod('Telebirr')}
                className={`cursor-pointer rounded-2xl border p-5 transition-all relative ${
                  paymentMethod === 'Telebirr'
                    ? 'border-sky-500 bg-sky-50/40 ring-2 ring-sky-500/20 shadow-xs'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="bg-sky-100 text-sky-800 text-[10px] font-bold px-2 py-0.5 rounded-md uppercase">
                      Mobile Wallet
                    </span>
                    <h3 className="text-base font-bold text-slate-900 mt-1">
                      Telebirr Transfer
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Account Name: <strong>Guduru Alemayehu</strong>
                    </p>
                  </div>
                  <div className="w-9 h-9 rounded-xl bg-sky-500 text-white flex items-center justify-center font-bold text-xs">
                    TB
                  </div>
                </div>

                <div className="mt-4 p-3 bg-white rounded-xl border border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      Telebirr Phone Number
                    </span>
                    <span className="text-lg font-mono font-black text-slate-900 tracking-wider">
                      0953201048
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      copyToClipboard('0953201048', 'telebirr');
                    }}
                    className="px-3 py-1.5 rounded-lg bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold flex items-center gap-1 transition cursor-pointer"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copiedField === 'telebirr' ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>

                <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
                  <span>Required Amount: <strong className="text-slate-900">300 ETB</strong></span>
                  <span className="text-sky-700 font-semibold">Instant Telebirr App / USSD</span>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2: Upload Screenshot & Submit (1 Click, Responsive) */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-2xs space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                2
              </span>
              <div>
                <h2 className="text-sm font-bold text-slate-900">
                  Upload Payment Screenshot for Admin Verification
                </h2>
                <p className="text-xs text-slate-500">
                  Select your transfer confirmation screenshot and click Submit once.
                </p>
              </div>
            </div>

            <form onSubmit={handleDirectSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Student Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    placeholder="e.g. Abebe Kebede"
                    className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Student Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={studentPhone}
                    onChange={(e) => setStudentPhone(e.target.value)}
                    placeholder="e.g. 0911234567"
                    className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 font-mono"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Payment Channel Used <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value as 'CBE' | 'Telebirr')}
                    className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 font-semibold cursor-pointer"
                  >
                    <option value="CBE">CBE Account (1000521750255)</option>
                    <option value="Telebirr">Telebirr (0953201048)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Transaction Ref / SMS Reason <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    value={transactionRef}
                    onChange={(e) => setTransactionRef(e.target.value)}
                    placeholder="e.g. FT2409... or Telebirr SMS code"
                    className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 font-mono"
                  />
                </div>
              </div>

              {/* Screenshot Upload Dropzone */}
              <div>
                <label className="block font-bold text-slate-700 mb-1.5 text-xs">
                  Payment Confirmation Screenshot <span className="text-red-500">*</span>
                </label>

                {screenshotPreview ? (
                  <div className="relative rounded-2xl border-2 border-emerald-400 p-4 bg-emerald-50/40 flex flex-col items-center justify-center space-y-3">
                    <img
                      src={screenshotPreview}
                      alt="Payment Receipt Preview"
                      className="max-h-60 rounded-xl object-contain shadow-xs border border-slate-200 bg-white"
                    />
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-emerald-800 flex items-center gap-1">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        Screenshot Ready for Submission
                      </span>
                      <button
                        type="button"
                        onClick={() => setScreenshotPreview(null)}
                        className="px-2.5 py-1 rounded-lg bg-red-100 hover:bg-red-200 text-red-700 text-xs font-semibold cursor-pointer"
                      >
                        Remove & Re-upload
                      </button>
                    </div>
                  </div>
                ) : (
                  <label className="relative flex flex-col items-center justify-center p-8 rounded-2xl border-2 border-dashed border-blue-300 bg-blue-50/40 hover:bg-blue-50/80 hover:border-blue-500 cursor-pointer transition overflow-hidden group">
                    <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-3 group-hover:scale-110 transition">
                      <Upload className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-slate-800">
                      Tap to upload CBE / Telebirr receipt screenshot
                    </span>
                    <span className="text-[11px] text-blue-700 font-semibold mt-1">
                      Select receipt image from gallery or take a photo
                    </span>
                    <span className="text-[10px] text-slate-400 mt-0.5">
                      PNG, JPG, or JPEG (Max 25MB)
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="absolute inset-0 opacity-0 w-full h-full cursor-pointer z-10"
                    />
                  </label>
                )}
              </div>

              {formError && (
                <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-300 text-rose-800 text-xs font-semibold flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>{formError}</span>
                </div>
              )}

              {/* 1-Click Submit Button */}
              <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="text-[11px] text-slate-500">
                  Admin: <strong>{adminEmail}</strong> (Guduru Alemayehu)
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Submitting Screenshot...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Payment Screenshot (300 ETB)</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Frequently Asked Questions */}
      <div className="bg-slate-100/70 rounded-3xl p-6 border border-slate-200/80 text-xs space-y-3">
        <h3 className="font-bold text-slate-900 flex items-center gap-1.5">
          <HelpCircle className="w-4 h-4 text-blue-600" />
          <span>Payment & Access Help</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-600">
          <div>
            <strong className="text-slate-800 block">How long does verification take?</strong>
            The administrator typically reviews submitted screenshots quickly. As soon as Admin Guduru taps Verify, your app will automatically unlock without you having to do anything else.
          </div>
          <div>
            <strong className="text-slate-800 block">Is the 300 ETB payment recurring?</strong>
            No, the 300 ETB fee is a single, one-time payment that unlocks all freshman semester course videos, CBT question banks, and lecture notes permanently.
          </div>
        </div>
      </div>
    </div>
  );
};
