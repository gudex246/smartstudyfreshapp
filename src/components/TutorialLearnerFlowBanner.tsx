import React, { useState } from 'react';
import {
  Lock,
  Unlock,
  CheckCircle2,
  Clock,
  ArrowRight,
  Sparkles,
  Smartphone,
  Building2,
  Copy,
  Check,
  ShieldCheck,
  PlayCircle,
  Eye,
  RefreshCw,
  UserCheck
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const TutorialLearnerFlowBanner: React.FC = () => {
  const {
    currentAccount,
    switchAccount,
    sampleStudentPaywallStatus,
    setSampleStudentPaywallStatus,
    sampleStudentTutorialStep,
    setSampleStudentTutorialStep,
    resetSampleStudentFlow,
    setActiveTab,
    isUnlocked
  } = useApp();

  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(true);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedAccount(label);
    setTimeout(() => setCopiedAccount(null), 2000);
  };

  const steps = [
    {
      step: 1,
      title: 'Free Preview Tutorials',
      shortDesc: 'Foundational video previews',
      detail: 'Explore free intro lessons in Calculus (Limits), Physics 1011 (Kinematics), and Logic & Critical Thinking (LoCT 1011).',
      icon: PlayCircle,
      actionLabel: 'Watch Free Previews',
      onAction: () => setActiveTab('videos')
    },
    {
      step: 2,
      title: 'Subscription Fee Paywall',
      shortDesc: 'Encounter 300 ETB lock',
      detail: 'When clicking complete midterm walkthroughs or full CBT question explanations, the student encounters the 300 ETB paywall.',
      icon: Lock,
      actionLabel: 'View Locked Masterclasses',
      onAction: () => {
        setSampleStudentPaywallStatus('locked');
        setActiveTab('videos');
      }
    },
    {
      step: 3,
      title: 'Mobile Banking Checkout',
      shortDesc: 'CBE or Telebirr (300 ETB)',
      detail: 'Student transfers 300 ETB to Guduru Alemayehu using Commercial Bank of Ethiopia (1000521750255) or Telebirr (0953201048).',
      icon: Smartphone,
      actionLabel: 'Go to Payment Details',
      onAction: () => setActiveTab('unlock')
    },
    {
      step: 4,
      title: 'Receipt Submission',
      shortDesc: 'Upload screenshot & ref code',
      detail: 'Student submits transaction code (e.g. TB7890123456) and receipt screenshot to await admin verification.',
      icon: Clock,
      actionLabel: 'Simulate Pending Review',
      onAction: () => {
        setSampleStudentPaywallStatus('pending');
        setActiveTab('unlock');
      }
    },
    {
      step: 5,
      title: 'Super Admin Verification',
      shortDesc: 'Full freshman access activated',
      detail: 'Super Admin Guduru Alemayehu verifies the 300 ETB transaction, automatically unlocking all 74+ Logic questions, math videos, and notes.',
      icon: CheckCircle2,
      actionLabel: 'Simulate Verified Access',
      onAction: () => {
        setSampleStudentPaywallStatus('verified');
        setActiveTab('questions');
      }
    }
  ];

  return (
    <div id="tutorial-learner-flow-card" className="bg-slate-900 text-white rounded-3xl border border-slate-800 shadow-xl overflow-hidden mb-8 transition-all">
      {/* Top Header Bar */}
      <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-indigo-950 p-5 sm:p-6 border-b border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1.5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-black bg-emerald-400 text-slate-950 uppercase tracking-wide">
              <Sparkles className="w-3.5 h-3.5" />
              Sample Student Mode
            </span>
            <span className="text-xs text-slate-400 font-medium">
              Hierarchy: Positioned below Super Admin & Admin Account
            </span>
          </div>
          <div className="flex flex-wrap items-baseline gap-2">
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              {currentAccount.name}
            </h2>
            <span className="text-xs text-emerald-300 font-mono">({currentAccount.email})</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
            Demonstrating the freshman learner journey: encountering the <strong>300 ETB subscription fee paywall</strong> on premium tutorial videos and CBT exams, submitting mobile banking payment receipts, and receiving Super Admin verification.
          </p>
        </div>

        {/* Current State & Action Pills */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
          {sampleStudentPaywallStatus === 'locked' && (
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold">
              <Lock className="w-4 h-4 text-amber-400 animate-pulse" />
              <span>Paywall Active (300 ETB Locked)</span>
            </div>
          )}
          {sampleStudentPaywallStatus === 'pending' && (
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-sky-500/20 border border-sky-500/40 text-sky-300 text-xs font-bold">
              <Clock className="w-4 h-4 text-sky-400 animate-spin" />
              <span>Payment Pending Super Admin Review</span>
            </div>
          )}
          {sampleStudentPaywallStatus === 'verified' && (
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Full Access Verified & Unlocked</span>
            </div>
          )}

          <button
            id="toggle-flow-details-btn"
            onClick={() => setIsExpanded(!isExpanded)}
            className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-300 transition-colors"
          >
            {isExpanded ? 'Collapse Flow Guide' : 'Expand Flow Guide'}
          </button>
        </div>
      </div>

      {isExpanded && (
        <div className="p-5 sm:p-6 space-y-6">
          {/* 5-Step Visual Stepper */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Freshman Tutorial Learner Journey (5 Phases)
              </span>
              <span className="text-xs text-emerald-400 font-medium">
                Current Step: {sampleStudentTutorialStep} of 5
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {steps.map((s) => {
                const StepIcon = s.icon;
                const isCurrent = sampleStudentTutorialStep === s.step;
                const isDone = sampleStudentTutorialStep > s.step || (sampleStudentPaywallStatus === 'verified' && s.step <= 5);

                return (
                  <div
                    key={s.step}
                    onClick={() => setSampleStudentTutorialStep(s.step)}
                    className={`cursor-pointer rounded-2xl p-3.5 border transition-all relative ${
                      isCurrent
                        ? 'bg-slate-800/90 border-emerald-400 shadow-md shadow-emerald-900/20 ring-1 ring-emerald-400/50'
                        : isDone
                        ? 'bg-slate-800/40 border-slate-700 hover:border-slate-600'
                        : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 opacity-70'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-black ${
                          isCurrent
                            ? 'bg-emerald-400 text-slate-950'
                            : isDone
                            ? 'bg-emerald-500/30 text-emerald-300'
                            : 'bg-slate-700 text-slate-400'
                        }`}
                      >
                        {s.step}
                      </span>
                      <StepIcon
                        className={`w-4 h-4 ${
                          isCurrent
                            ? 'text-emerald-300'
                            : isDone
                            ? 'text-emerald-400'
                            : 'text-slate-500'
                        }`}
                      />
                    </div>

                    <h4 className="text-xs font-bold text-white mb-1 line-clamp-1">{s.title}</h4>
                    <p className="text-[11px] text-slate-300 leading-snug line-clamp-2 mb-3">
                      {s.detail}
                    </p>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        s.onAction();
                      }}
                      className={`w-full py-1 px-2 rounded-lg text-[10px] font-bold transition-all flex items-center justify-center gap-1 ${
                        isCurrent
                          ? 'bg-emerald-400 hover:bg-emerald-300 text-slate-950'
                          : 'bg-slate-700 hover:bg-slate-600 text-slate-200'
                      }`}
                    >
                      <span>{s.actionLabel}</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Ethiopian Payment Credentials Preview Box */}
          <div className="bg-slate-800/60 rounded-2xl p-4 border border-slate-700/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-bold text-slate-200 uppercase tracking-wide">
                  Ethiopian Mobile Banking Subscription Credentials
                </span>
                <span className="text-[11px] bg-amber-400/20 text-amber-300 px-2 py-0.5 rounded-full font-mono font-bold">
                  Fee: 300 ETB
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Official accounts owned by Platform Founder & Instructor <strong>Guduru Alemayehu</strong>
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {/* CBE Button */}
              <button
                type="button"
                onClick={() => handleCopy('1000521750255', 'CBE')}
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-purple-950/60 border border-purple-800/80 hover:bg-purple-900/60 text-purple-200 text-xs font-mono transition-colors"
                title="Click to copy CBE Account"
              >
                <Building2 className="w-3.5 h-3.5 text-purple-400" />
                <span>CBE: 1000521750255</span>
                {copiedAccount === 'CBE' ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-purple-400" />
                )}
              </button>

              {/* Telebirr Button */}
              <button
                type="button"
                onClick={() => handleCopy('0953201048', 'Telebirr')}
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-sky-950/60 border border-sky-800/80 hover:bg-sky-900/60 text-sky-200 text-xs font-mono transition-colors"
                title="Click to copy Telebirr Phone"
              >
                <Smartphone className="w-3.5 h-3.5 text-sky-400" />
                <span>Telebirr: 0953201048</span>
                {copiedAccount === 'Telebirr' ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-sky-400" />
                )}
              </button>
            </div>
          </div>

          {/* Interactive Simulation & Role Switcher Toolbar */}
          <div className="bg-slate-950/70 rounded-2xl p-4 border border-slate-800 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                <RefreshCw className="w-3.5 h-3.5 text-emerald-400" />
                Instant Paywall State Simulator:
              </span>
              <p className="text-[11px] text-slate-400">
                Click below to instantly toggle Blen Tadesse between locked paywall, pending review, or verified state:
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
              <button
                type="button"
                id="sim-paywall-locked-btn"
                onClick={() => setSampleStudentPaywallStatus('locked')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                  sampleStudentPaywallStatus === 'locked'
                    ? 'bg-amber-400 text-slate-950 shadow-sm ring-2 ring-amber-300'
                    : 'bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-500/30'
                }`}
              >
                <Lock className="w-3.5 h-3.5" />
                <span>1. Paywall Locked (300 ETB)</span>
              </button>

              <button
                type="button"
                id="sim-payment-pending-btn"
                onClick={() => setSampleStudentPaywallStatus('pending')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                  sampleStudentPaywallStatus === 'pending'
                    ? 'bg-sky-400 text-slate-950 shadow-sm ring-2 ring-sky-300'
                    : 'bg-slate-800 hover:bg-slate-700 text-sky-300 border border-sky-500/30'
                }`}
              >
                <Clock className="w-3.5 h-3.5" />
                <span>2. Payment Pending (TB7890123456)</span>
              </button>

              <button
                type="button"
                id="sim-payment-verified-btn"
                onClick={() => setSampleStudentPaywallStatus('verified')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                  sampleStudentPaywallStatus === 'verified'
                    ? 'bg-emerald-400 text-slate-950 shadow-sm ring-2 ring-emerald-300'
                    : 'bg-slate-800 hover:bg-slate-700 text-emerald-300 border border-emerald-500/30'
                }`}
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>3. Verified & Unlocked</span>
              </button>

              <div className="h-5 w-px bg-slate-700 hidden sm:block mx-1" />

              {/* 1-Click Switch to Super Admin to Verify */}
              <button
                type="button"
                id="switch-to-super-admin-btn"
                onClick={() => {
                  switchAccount('super-admin');
                  setActiveTab('admin');
                }}
                className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 flex items-center gap-1.5 shadow-sm transition-all"
                title="Switch to Super Admin Guduru Alemayehu to review and verify Blen's submission"
              >
                <UserCheck className="w-3.5 h-3.5" />
                <span>Switch to Super Admin to Verify</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default TutorialLearnerFlowBanner;
