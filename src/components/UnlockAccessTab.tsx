import React, { useState } from 'react';
import {
  Sparkles,
  CheckCircle2,
  Lock,
  Unlock,
  Copy,
  Upload,
  Clock,
  ShieldCheck,
  AlertCircle,
  HelpCircle,
  FileText,
  Phone,
  CreditCard,
  Send,
  X,
  Eye,
  RefreshCw,
  ExternalLink,
  MessageCircle,
  Share2,
  Check
} from 'lucide-react';
import { useApp, ADMIN_EMAIL } from '../context/AppContext';
import { PaymentSubmission } from '../types';
import {
  createTelegramDispatchUrl,
  createGmailWebDispatchUrl,
  createMailtoDispatchUrl,
  createSmsDispatchUrl,
  createPhoneCallUrl,
  uploadReceiptToCloud
} from '../utils/cloudSync';

export const UnlockAccessTab: React.FC = () => {
  const {
    isUnlocked,
    studentProfile,
    paymentSubmissions,
    addPaymentSubmission,
    toggleStudentUnlock,
    setActiveTab,
    adminEmail
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
  const [copiedDetails, setCopiedDetails] = useState(false);
  const [copiedReceiptLink, setCopiedReceiptLink] = useState(false);
  const [compressionInfo, setCompressionInfo] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);

  // Find active student submission
  const mySubmission = paymentSubmissions.find(
    (s) =>
      s.id === studentProfile.submissionId ||
      (studentProfile.email && s.studentEmail.toLowerCase() === studentProfile.email.toLowerCase()) ||
      (studentProfile.phone && s.studentPhone === studentProfile.phone)
  ) || paymentSubmissions[0];

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 25 * 1024 * 1024) {
      setFormError('Screenshot file is too large. Please select an image under 25MB.');
      return;
    }
    setFormError(null);
    setCompressionInfo('Compressing screenshot for instant delivery...');

    const reader = new FileReader();
    reader.onload = (event) => {
      const rawDataUrl = event.target?.result as string;
      if (!rawDataUrl) return;

      // Automatically compress and resize to max 800px width/height and JPEG 0.65 for ultra-fast instant sending (<35KB)
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
            const compressed = canvas.toDataURL('image/jpeg', 0.65);
            setScreenshotPreview(compressed);
            const sizeKB = Math.round((compressed.length * 3) / 4 / 1024);
            setCompressionInfo(`✓ Compressed to ${sizeKB} KB. Uploading to cloud...`);

            // Immediately pre-upload to cloud CDN in background
            const tempId = 'rec-' + Date.now();
            uploadReceiptToCloud(compressed, tempId)
              .then((cloudUrl) => {
                if (cloudUrl) {
                  setScreenshotPreview(cloudUrl);
                  setCompressionInfo(`✓ Screenshot securely synced to cloud CDN (${sizeKB} KB)`);
                }
              })
              .catch(() => {});
          } else {
            setScreenshotPreview(rawDataUrl);
            setCompressionInfo(null);
          }
        } catch {
          setScreenshotPreview(rawDataUrl);
          setCompressionInfo(null);
        }
      };
      img.onerror = () => {
        setScreenshotPreview(rawDataUrl);
        setCompressionInfo(null);
      };
      img.src = rawDataUrl;
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);
    if (!studentName.trim() || !studentPhone.trim() || !transactionRef.trim()) {
      setFormError('Please fill out all required fields (Name, Phone, and Transaction Reference).');
      return;
    }

    if (!screenshotPreview) {
      setFormError('Please select and attach your payment receipt screenshot before submitting.');
      return;
    }

    setIsSubmitting(true);
    let finalScreenshot = screenshotPreview;

    // If still in data: base64, ensure cloud upload completes
    if (finalScreenshot && finalScreenshot.startsWith('data:')) {
      setCompressionInfo('Uploading receipt to cloud relay...');
      try {
        const cloudUrl = await uploadReceiptToCloud(finalScreenshot, 'sub-' + Date.now());
        if (cloudUrl) {
          finalScreenshot = cloudUrl;
          setScreenshotPreview(cloudUrl);
        }
      } catch (e) {
        console.warn('Pre-upload during submit failed, fallback to local buffer', e);
      }
    }

    try {
      const created = await addPaymentSubmission({
        studentName,
        studentEmail: studentEmail || 'student@university.edu.et',
        studentPhone,
        paymentMethod,
        accountOrPhoneUsed: paymentMethod === 'CBE' ? '1000521750255' : '0953201048',
        transactionRef,
        screenshotUrl: finalScreenshot
      });

      setLastSubmitted(created);
      setIsSubmitting(false);
      setSubmitSuccess(true);
    } catch (err) {
      setIsSubmitting(false);
      setFormError('Error submitting payment verification. Please try again.');
    }
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header Banner */}
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

          {/* Quick status bar */}
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

      {/* If Already Unlocked: Celebratory Active State Card */}
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
                Your payment of 300 ETB has been verified by the administrator ({adminEmail}).
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <button
              onClick={() => setActiveTab('videos')}
              className="p-3 bg-white rounded-xl border border-emerald-200 text-left hover:border-emerald-400 transition"
            >
              <span className="text-xs font-bold text-slate-900 block">Video Tutorials</span>
              <span className="text-[11px] text-slate-500">All masterclasses unlocked</span>
            </button>
            <button
              onClick={() => setActiveTab('notes')}
              className="p-3 bg-white rounded-xl border border-emerald-200 text-left hover:border-emerald-400 transition"
            >
              <span className="text-xs font-bold text-slate-900 block">Lecture Notes</span>
              <span className="text-[11px] text-slate-500">Full chapters & formulas</span>
            </button>
            <button
              onClick={() => setActiveTab('questions')}
              className="p-3 bg-white rounded-xl border border-emerald-200 text-left hover:border-emerald-400 transition"
            >
              <span className="text-xs font-bold text-slate-900 block">CBT Question Bank</span>
              <span className="text-[11px] text-slate-500">All questions & solutions</span>
            </button>
          </div>

          <div className="pt-2 flex items-center justify-between text-xs text-emerald-800">
            <span>Student: <strong>{studentProfile.name}</strong> ({studentProfile.email})</span>
            <span className="text-[11px] font-semibold text-emerald-700 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> 300 ETB Verified & Unlocked
            </span>
          </div>
        </div>
      )}

      {/* Verification Status Tracking Box (If student has a pending/verified submission) */}
      {mySubmission && !isUnlocked && (
        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-2xs space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-amber-500" />
              <h2 className="text-sm font-bold text-slate-900">
                Payment Verification Status
              </h2>
            </div>
            {mySubmission.status === 'pending' && (
              <span className="bg-amber-100 text-amber-800 text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 animate-spin" />
                Under Review
              </span>
            )}
            {mySubmission.status === 'verified' && (
              <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Verified
              </span>
            )}
            {mySubmission.status === 'rejected' && (
              <span className="bg-red-100 text-red-800 text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                Needs Resubmission
              </span>
            )}
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-2">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Student</span>
                <span className="font-bold text-slate-800">{mySubmission.studentName}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Method</span>
                <span className="font-bold text-slate-800">{mySubmission.paymentMethod} (300 ETB)</span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Ref / Trans ID</span>
                <span className="font-mono font-bold text-blue-700">{mySubmission.transactionRef}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Submitted</span>
                <span className="text-slate-600">{new Date(mySubmission.submittedAt).toLocaleDateString()}</span>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-200/80 text-[11px] text-slate-500 flex flex-wrap items-center justify-between gap-1">
              <span>Admin Reviewer: <strong className="text-slate-800">{ADMIN_EMAIL}</strong></span>
              <span className="text-emerald-700 font-medium flex items-center gap-1">
                <RefreshCw className="w-3 h-3 animate-spin text-emerald-600" />
                Auto-Unlock Sync Active (Unlocks automatically upon approval)
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 pt-2 text-xs">
            <p className="text-slate-500 text-[11px]">
              Need faster approval? Send your payment confirmation screenshot directly to admin email:
            </p>
            <div className="flex items-center gap-2">
              <a
                href={createGmailWebDispatchUrl(mySubmission)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-white font-semibold transition flex items-center gap-1.5 text-xs shadow-xs"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Email {ADMIN_EMAIL}</span>
              </a>
              <a
                href={createMailtoDispatchUrl(mySubmission)}
                className="px-3 py-1.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 font-semibold transition text-xs"
              >
                Default Mail App
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Step 1: Official Payment Information Boxes */}
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
                className="px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold flex items-center gap-1 transition"
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
                className="px-3 py-1.5 rounded-lg bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold flex items-center gap-1 transition"
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

      {/* Step 2: Upload Screenshot & Submit Form */}
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
              After completing the 300 ETB transfer, submit your details and transaction screenshot below.
            </p>
          </div>
        </div>

        {submitSuccess && lastSubmitted && (
          <div className="p-5 rounded-3xl bg-gradient-to-br from-emerald-950 via-slate-900 to-indigo-950 border border-emerald-500/40 text-slate-100 shadow-xl space-y-4">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-500 text-slate-950 flex items-center justify-center shrink-0 font-black shadow-lg">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm sm:text-base font-extrabold text-white">
                      Payment Screenshot Submitted to Admin
                    </h3>
                    <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      Cloud Sync Active
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Your 300 ETB submission is queued for verification by Admin <strong>{adminEmail}</strong>.
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSubmitSuccess(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg"
                title="Dismiss"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Sync Reference & Verification Code */}
            <div className="bg-[#0b1324] border border-[#1e2e4f] rounded-2xl p-3 sm:p-4 grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
              <div>
                <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">Sync Code</span>
                <span className="text-xs sm:text-sm font-mono font-black text-amber-400">
                  {lastSubmitted.syncCode || 'SS-394821'}
                </span>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">Student</span>
                <span className="text-xs font-bold text-slate-200 truncate block">
                  {lastSubmitted.studentName}
                </span>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">Method</span>
                <span className="text-xs font-bold text-sky-400">
                  {lastSubmitted.paymentMethod} (300 ETB)
                </span>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">Txn Reference</span>
                <span className="text-xs font-mono font-bold text-emerald-400 truncate block">
                  {lastSubmitted.transactionRef}
                </span>
              </div>
            </div>

            {/* PRIMARY: Send Payment Details & Screenshot directly to Admin Guduru Alemayehu */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-red-950/60 to-indigo-950/70 border border-red-500/40 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-red-600 text-white flex items-center justify-center font-bold shrink-0 shadow-sm">
                    <Send className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">
                      Send Receipt & Screenshot to Admin Email
                    </span>
                    <span className="text-[11px] text-red-200">
                      Destination: <strong className="text-white underline">{ADMIN_EMAIL}</strong>
                    </span>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-amber-400 text-slate-950 text-[10px] font-black uppercase">
                  Direct Dispatch
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <a
                  href={createGmailWebDispatchUrl(lastSubmitted)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs shadow-md shadow-red-600/30 transition text-center"
                >
                  <Send className="w-4 h-4" />
                  <span>🚀 Send via Gmail to {ADMIN_EMAIL}</span>
                </a>

                <a
                  href={createMailtoDispatchUrl(lastSubmitted)}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#090d16] hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold text-xs transition text-center"
                >
                  <span>✉️ Open Default Mail App (mailto)</span>
                </a>
              </div>

              {lastSubmitted.screenshotUrl && (
                <div className="space-y-2 pt-2 border-t border-red-500/20">
                  <div className="flex items-center gap-3">
                    <img
                      src={lastSubmitted.screenshotUrl}
                      alt="Receipt Thumbnail"
                      className="w-16 h-16 rounded-xl object-cover border border-white/20 bg-black/40"
                    />
                    <div className="text-xs space-y-1">
                      <span className="text-white font-bold block">✓ Screenshot Attached & Ready</span>
                      <span className="text-[11px] text-slate-300 block">
                        Compressed & uploaded for Admin Guduru Alemayehu to review immediately.
                      </span>
                    </div>
                  </div>

                  {lastSubmitted.screenshotUrl.startsWith('/') && typeof window !== 'undefined' && (
                    <div className="p-2.5 rounded-xl bg-black/40 border border-white/10 flex items-center justify-between gap-2 text-xs">
                      <span className="text-[11px] text-slate-300 truncate">
                        Link: <strong className="text-emerald-400">{window.location.origin}{lastSubmitted.screenshotUrl}</strong>
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          navigator.clipboard.writeText(`${window.location.origin}${lastSubmitted.screenshotUrl}`);
                          setCopiedReceiptLink(true);
                          setTimeout(() => setCopiedReceiptLink(false), 2500);
                        }}
                        className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold text-[10px] shrink-0"
                      >
                        {copiedReceiptLink ? 'Copied!' : 'Copy Link'}
                      </button>
                    </div>
                  )}

                  {lastSubmitted.screenshotUrl.startsWith('data:') && (
                    <a
                      href={lastSubmitted.screenshotUrl}
                      download={`Payment_Screenshot_${lastSubmitted.studentName.replace(/\s+/g, '_')}.png`}
                      className="text-amber-400 hover:text-amber-300 font-bold underline text-xs block"
                    >
                      Download Screenshot File
                    </a>
                  )}
                </div>
              )}
            </div>

            {/* Multi-Device Dispatch Actions */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>Also notify Admin via Mobile / Telegram (0953201048):</span>
                </span>
                <span className="text-[10px] text-slate-400">Backup channels</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {/* 1. Direct Mobile SMS to 0953201048 */}
                <a
                  href={createSmsDispatchUrl(lastSubmitted)}
                  className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs shadow-md shadow-amber-500/20 transition text-center"
                >
                  <MessageCircle className="w-4 h-4 fill-slate-950" />
                  <span>SMS Admin Mobile</span>
                </a>

                {/* 2. Direct Phone Call to Admin (0953201048) */}
                <a
                  href={createPhoneCallUrl()}
                  className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md shadow-emerald-600/30 transition text-center"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Admin (0953201048)</span>
                </a>

                {/* 3. Telegram Dispatch */}
                <a
                  href={createTelegramDispatchUrl(lastSubmitted)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs shadow-md shadow-sky-600/30 transition text-center"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Telegram Admin</span>
                </a>
              </div>
            </div>

            {/* Copy & Chat buttons */}
            <div className="pt-2 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs">
              <button
                type="button"
                onClick={() => {
                  const details = `Smart Study 300 ETB Verification\nStudent: ${lastSubmitted.studentName}\nPhone: ${lastSubmitted.studentPhone}\nMethod: ${lastSubmitted.paymentMethod}\nTxn: ${lastSubmitted.transactionRef}\nSync Code: ${lastSubmitted.syncCode || 'N/A'}`;
                  navigator.clipboard.writeText(details);
                  setCopiedDetails(true);
                  setTimeout(() => setCopiedDetails(false), 2000);
                }}
                className="flex items-center gap-1.5 text-slate-400 hover:text-white transition"
              >
                {copiedDetails ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedDetails ? 'Receipt Details Copied!' : 'Copy Receipt Details'}</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('chat')}
                className="flex items-center gap-1 text-indigo-400 hover:text-indigo-300 font-semibold"
              >
                <span>Go to Freshman Community Chat &rarr;</span>
              </button>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
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
                Student Email
              </label>
              <input
                type="email"
                value={studentEmail}
                onChange={(e) => setStudentEmail(e.target.value)}
                placeholder="e.g. student@gmail.com"
                className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">
                Payment Channel Used <span className="text-red-500">*</span>
              </label>
              <select
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value as 'CBE' | 'Telebirr')}
                className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 font-semibold"
              >
                <option value="CBE">CBE Account (1000521750255)</option>
                <option value="Telebirr">Telebirr (0953201048)</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label className="block font-bold text-slate-700 mb-1">
                Transaction Reference / Reason / Transfer ID <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={transactionRef}
                onChange={(e) => setTransactionRef(e.target.value)}
                placeholder="e.g. FT2409... or Telebirr SMS transaction code"
                className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 font-mono"
              />
            </div>
          </div>

          {/* Screenshot Upload Box */}
          <div>
            <label className="block font-bold text-slate-700 mb-1.5 text-xs">
              Payment Confirmation Screenshot <span className="text-red-500">*</span>
            </label>

            {screenshotPreview && screenshotPreview.trim() !== '' ? (
              <div className="relative rounded-2xl border-2 border-dashed border-emerald-300 p-4 bg-emerald-50/40 flex flex-col items-center justify-center space-y-3">
                <img
                  src={screenshotPreview}
                  alt="Payment Receipt Preview"
                  className="max-h-60 rounded-xl object-contain shadow-xs border border-slate-200 bg-white"
                />
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-emerald-800 flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Screenshot Attached
                  </span>
                  <button
                    type="button"
                    onClick={() => setScreenshotPreview(null)}
                    className="px-2.5 py-1 rounded-lg bg-red-100 hover:bg-red-200 text-red-700 text-xs font-semibold"
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
                  Required: Select receipt image from gallery or take photo
                </span>
                <span className="text-[10px] text-slate-400 mt-0.5">
                  Automatically compressed for instant admin review
                </span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="absolute inset-0 opacity-0 w-full h-full cursor-pointer z-10"
                />
              </label>
            )}

            {compressionInfo && (
              <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{compressionInfo}</span>
              </div>
            )}
          </div>

          {formError && (
            <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-300 text-rose-800 text-xs font-semibold flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
              <span>{formError}</span>
            </div>
          )}

          <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="text-[11px] text-slate-500">
              Admin: <strong>{adminEmail}</strong> will verify your payment receipt.
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              <span>{isSubmitting ? 'Submitting...' : 'Submit Screenshot for Verification'}</span>
            </button>
          </div>
        </form>
      </div>

      {/* Frequently Asked Questions */}
      <div className="bg-slate-100/70 rounded-3xl p-6 border border-slate-200/80 text-xs space-y-3">
        <h3 className="font-bold text-slate-900 flex items-center gap-1.5">
          <HelpCircle className="w-4 h-4 text-blue-600" />
          <span>Payment & Access Help</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-600">
          <div>
            <strong className="text-slate-800 block">How long does verification take?</strong>
            The administrator typically reviews submitted screenshots within 10 to 30 minutes. You will see your badge switch to "Full Access Unlocked" automatically.
          </div>
          <div>
            <strong className="text-slate-800 block">Is the 300 ETB payment recurring?</strong>
            No, the 300 ETB fee is a single, one-time payment that unlocks all freshman semester course videos, CBT question banks, and notes permanently.
          </div>
        </div>
      </div>
    </div>
  );
};
