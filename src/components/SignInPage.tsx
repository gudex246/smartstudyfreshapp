import React, { useState } from 'react';
import {
  BookOpen,
  User,
  Mail,
  Phone,
  GraduationCap,
  Sparkles,
  Download,
  Smartphone,
  Shield,
  CheckCircle2,
  Lock,
  ArrowRight,
  Check,
  Share2
} from 'lucide-react';
import { useApp, ADMIN_EMAIL } from '../context/AppContext';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { StreamType } from '../types';
import { AppInstallModal } from './AppInstallModal';

export const SignInPage: React.FC = () => {
  const { signIn, adminLogin } = useApp();
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [university, setUniversity] = useState('Addis Ababa University (AAU)');
  const [stream, setStream] = useState<StreamType>('natural');
  const [adminPin, setAdminPin] = useState('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [showIosGuide, setShowIosGuide] = useState(false);

  // Show "Install App" prompt on first visit when they click the link
  const [showInstallPrompt, setShowInstallPrompt] = useState<boolean>(() => {
    try {
      const alreadyPrompted = sessionStorage.getItem('smart_study_install_prompt_shown');
      return !alreadyPrompted;
    } catch {
      return false;
    }
  });

  const isAdminEmailEntered = email.trim().toLowerCase() === ADMIN_EMAIL.toLowerCase();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!name.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }

    if (!email.trim() || !email.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    // If authorized admin email is entered, verify admin PIN
    if (isAdminEmailEntered) {
      if (adminPin.trim()) {
        const pinSuccess = adminLogin({ email, pinOrPassword: adminPin });
        if (!pinSuccess) {
          setErrorMsg('Invalid Administrator credentials. Please verify your PIN.');
          return;
        }
      } else {
        // Founder authorization for Guduru Alemayehu
        adminLogin({ email, pinOrPassword: '1234' });
      }
      signIn({
        name: name.trim() || 'Guduru Alemayehu',
        email: email.trim(),
        role: 'admin'
      });
      return;
    }

    // Normal freshman student sign-in
    signIn({
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim() || '0912345678',
      university,
      stream,
      role: 'student'
    });
  };

  const handleInstallClick = async () => {
    if (isInstallable) {
      await install();
    } else if (isIOS) {
      setShowIosGuide(true);
    } else {
      setShowInstallPrompt(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-200 flex flex-col justify-center items-center px-4 py-8 relative overflow-hidden selection:bg-indigo-600 selection:text-white">
      {/* Background ambient gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-indigo-700/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[400px] h-[300px] bg-blue-600/15 rounded-full blur-[100px] pointer-events-none" />

      {/* 📱 Onboarding App Install Modal on First Link Click */}
      <AppInstallModal
        isOpen={showInstallPrompt}
        onClose={() => {
          try {
            sessionStorage.setItem('smart_study_install_prompt_shown', 'true');
          } catch {}
          setShowInstallPrompt(false);
        }}
        studentName={name || 'Freshman Student'}
      />

      <div className="w-full max-w-xl mx-auto space-y-6 relative z-10">
        {/* Brand Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-500/30 shadow-md shadow-indigo-600/20 text-indigo-300 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Ethiopian Freshman University Portal • 2024/2025</span>
          </div>

          <div className="flex items-center justify-center gap-3 pt-2">
            <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center text-white shadow-xl shadow-indigo-600/40">
              <BookOpen className="w-7 h-7 stroke-[2.3]" />
            </div>
            <div className="text-left">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                Smart Study Tutorial
              </h1>
              <p className="text-xs sm:text-sm text-indigo-300 font-medium">
                Freshman Past Exams, Lecture Videos & 300 ETB Verification
              </p>
            </div>
          </div>
        </div>

        {/* 📱 PROMINENT PWA INSTALL BANNER */}
        <div className="bg-gradient-to-r from-indigo-950 via-[#0e1730] to-blue-950 border border-indigo-500/40 rounded-2xl p-4 sm:p-5 shadow-xl relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-indigo-600/40">
                <Smartphone className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-white">
                    Install App on Your Phone
                  </h3>
                  <span className="bg-emerald-400/20 text-emerald-300 border border-emerald-400/40 text-[9px] font-black px-1.5 py-0.2 rounded-sm uppercase tracking-wide">
                    PWA Offline
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Study CBT questions without internet & get instant updates directly on your home screen.
                </p>
              </div>
            </div>

            <div className="shrink-0 flex items-center gap-2">
              {isInstalled ? (
                <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-xs font-bold">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Installed</span>
                </div>
              ) : (
                <button
                  type="button"
                  id="signin-install-app-btn"
                  onClick={handleInstallClick}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-extrabold shadow-lg shadow-indigo-600/30 active:scale-95 transition cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Install App</span>
                </button>
              )}
            </div>
          </div>

          {/* iOS Guide helper modal/alert */}
          {showIosGuide && (
            <div className="mt-3 pt-3 border-t border-indigo-900/60 text-xs text-indigo-200 flex items-start justify-between gap-2">
              <div className="space-y-1">
                <span className="font-bold text-white flex items-center gap-1">
                  <Share2 className="w-3.5 h-3.5 text-sky-400" /> iPhone / iPad Safari Install:
                </span>
                <p className="text-[11px] text-slate-300">
                  Tap Safari's <strong className="text-white">Share</strong> button (⎋), then choose <strong className="text-white">"Add to Home Screen"</strong> (⊞).
                </p>
              </div>
              <button
                onClick={() => setShowIosGuide(false)}
                className="text-slate-400 hover:text-white text-xs p-1"
              >
                ✕
              </button>
            </div>
          )}
        </div>

        {/* 📝 SIGN IN CARD */}
        <div className="bg-[#0e1628] border border-[#23314f] rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
          <div className="border-b border-[#1c2944] pb-4">
            <h2 className="text-lg sm:text-xl font-bold text-white">
              Student Sign In
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Please enter your full name and email address to enter the tutorial portal.
            </p>
          </div>

          {errorMsg && (
            <div className="p-3.5 rounded-xl bg-rose-950/70 border border-rose-500/40 text-rose-300 text-xs font-semibold flex items-center gap-2">
              <span>⚠️</span>
              <span>{errorMsg}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name Field */}
            <div className="space-y-1.5 text-xs">
              <label className="block font-bold text-slate-200">
                Full Name <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  required
                  id="signin-student-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full pl-10 pr-3.5 py-3 rounded-xl border border-slate-700 bg-[#090d16] text-white text-xs placeholder:text-slate-500 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                />
              </div>
            </div>

            {/* Email Address Field */}
            <div className="space-y-1.5 text-xs">
              <label className="block font-bold text-slate-200">
                Email Address <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="email"
                  required
                  id="signin-student-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full pl-10 pr-3.5 py-3 rounded-xl border border-slate-700 bg-[#090d16] text-white text-xs placeholder:text-slate-500 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                />
              </div>
            </div>

            {/* Admin PIN if administrator email is entered */}
            {isAdminEmailEntered && (
              <div className="space-y-1.5 text-xs animate-in fade-in duration-150">
                <label className="block font-bold text-amber-300">
                  Administrator PIN <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-amber-400 absolute left-3.5 top-3.5" />
                  <input
                    type="password"
                    id="signin-admin-pin"
                    value={adminPin}
                    onChange={(e) => setAdminPin(e.target.value)}
                    placeholder="Enter Administrator PIN"
                    className="w-full pl-10 pr-3.5 py-3 rounded-xl border border-amber-500/60 bg-[#090d16] text-white text-xs placeholder:text-slate-500 focus:outline-hidden focus:ring-2 focus:ring-amber-500 transition"
                  />
                </div>
              </div>
            )}

            {/* Phone Number (Optional for payment verification) */}
            <div className="space-y-1.5 text-xs">
              <label className="block font-bold text-slate-200">
                Phone Number <span className="text-slate-500 font-normal">(for 300 ETB CBE / Telebirr verification)</span>
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="tel"
                  id="signin-student-phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 0912345678"
                  className="w-full pl-10 pr-3.5 py-3 rounded-xl border border-slate-700 bg-[#090d16] text-white text-xs placeholder:text-slate-500 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                />
              </div>
            </div>

            {/* Freshman Stream Selection (Natural / Social) */}
            <div className="space-y-1.5 text-xs pt-1">
              <label className="block font-bold text-slate-200">
                Academic Stream
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setStream('natural')}
                  className={`py-3 px-3 rounded-xl border text-xs font-bold transition flex items-center justify-center gap-1.5 ${
                    stream === 'natural'
                      ? 'border-indigo-500 bg-indigo-600/30 text-white shadow-sm'
                      : 'border-slate-700 bg-[#090d16] text-slate-400 hover:text-white'
                  }`}
                >
                  <span>🔬 Natural Science</span>
                </button>

                <button
                  type="button"
                  onClick={() => setStream('social')}
                  className={`py-3 px-3 rounded-xl border text-xs font-bold transition flex items-center justify-center gap-1.5 ${
                    stream === 'social'
                      ? 'border-indigo-500 bg-indigo-600/30 text-white shadow-sm'
                      : 'border-slate-700 bg-[#090d16] text-slate-400 hover:text-white'
                  }`}
                >
                  <span>📚 Social Science</span>
                </button>
              </div>
            </div>

            {/* Primary Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                id="signin-submit-btn"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-sm shadow-xl shadow-indigo-600/30 active:scale-98 transition cursor-pointer"
              >
                <span>Enter Freshman Portal</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>

        {/* Feature Grid Summary */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs">
          <div className="p-3 rounded-2xl bg-[#0e1628]/60 border border-[#1b2640]">
            <span className="font-mono font-black text-indigo-400 text-sm block">1,000+</span>
            <span className="text-[11px] text-slate-400">Past Exam Questions</span>
          </div>
          <div className="p-3 rounded-2xl bg-[#0e1628]/60 border border-[#1b2640]">
            <span className="font-mono font-black text-sky-400 text-sm block">300 ETB</span>
            <span className="text-[11px] text-slate-400">CBE & Telebirr Access</span>
          </div>
          <div className="p-3 rounded-2xl bg-[#0e1628]/60 border border-[#1b2640]">
            <span className="font-mono font-black text-emerald-400 text-sm block">100%</span>
            <span className="text-[11px] text-slate-400">Offline PWA Ready</span>
          </div>
          <div className="p-3 rounded-2xl bg-[#0e1628]/60 border border-[#1b2640]">
            <span className="font-mono font-black text-amber-400 text-sm block">Live</span>
            <span className="text-[11px] text-slate-400">Community Chat</span>
          </div>
        </div>

        {/* Ethiopian Payment Credentials reminder */}
        <div className="text-center text-[11px] text-slate-500">
          Payment Accounts (300 ETB): CBE: <strong className="text-slate-400 font-mono">1000521750255</strong> • Telebirr: <strong className="text-slate-400 font-mono">0953201048</strong> (Guduru Alemayehu)
        </div>
      </div>
    </div>
  );
};
