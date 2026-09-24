import React, { useState } from 'react';
import { Download, Smartphone, Laptop, X, Check, WifiOff, Sparkles } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

interface PWAInstallButtonProps {
  className?: string;
  variant?: 'compact' | 'full';
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({ className = '', variant = 'compact' }) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showGuide, setShowGuide] = useState(false);

  // If already running as an installed PWA, render an "Offline Ready" indicator badge
  if (isInstalled) {
    return (
      <div className={`flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-950/70 border border-emerald-700/60 text-emerald-400 text-[11px] font-semibold select-none ${className}`}>
        <Check className="w-3 h-3 text-emerald-400" />
        <span>Installed • Offline Ready</span>
      </div>
    );
  }

  // Chromium / Android / Desktop flow when prompt event is caught
  if (isInstallable) {
    if (variant === 'full') {
      return (
        <button
          id="pwa-install-btn-full"
          onClick={install}
          className={`flex items-center justify-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-4 py-2.5 text-xs sm:text-sm shadow-lg shadow-indigo-600/30 transition-all active:scale-95 ${className}`}
        >
          <Download className="w-4 h-4" />
          <span>Install App for Offline Use</span>
        </button>
      );
    }

    return (
      <button
        id="pwa-install-btn"
        onClick={install}
        className={`flex items-center gap-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white px-2.5 sm:px-3 py-1.5 text-xs font-semibold shadow-sm transition-all active:scale-95 ${className}`}
        title="Install Smart Study Portal to your device for 100% offline study"
      >
        <Download className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Install Offline App</span>
        <span className="sm:hidden">Install</span>
      </button>
    );
  }

  // Fallback for iOS or desktop/mobile browsers that need guided install
  return (
    <>
      {variant === 'full' ? (
        <button
          id="pwa-install-guide-btn-full"
          onClick={() => setShowGuide(true)}
          className={`flex items-center justify-center gap-2 rounded-xl bg-indigo-600/90 hover:bg-indigo-600 text-white font-bold px-4 py-2.5 text-xs sm:text-sm shadow-md transition active:scale-95 ${className}`}
        >
          <Download className="w-4 h-4" />
          <span>Install App for Offline Use</span>
        </button>
      ) : (
        <button
          id="pwa-install-guide-btn"
          onClick={() => setShowGuide(true)}
          className={`flex items-center gap-1.5 rounded-lg border border-indigo-500/40 bg-indigo-950/40 hover:bg-indigo-900/60 text-indigo-200 px-2.5 sm:px-3 py-1.5 text-xs font-medium transition active:scale-95 ${className}`}
          title="Install app to your home screen / desktop for offline access"
        >
          {isIOS ? (
            <Smartphone className="w-3.5 h-3.5 text-indigo-400" />
          ) : (
            <Download className="w-3.5 h-3.5 text-indigo-400" />
          )}
          <span className="hidden sm:inline">Install Offline App</span>
          <span className="sm:hidden">Install</span>
        </button>
      )}

      {/* Guided In-App Install Modal (No window.alert) */}
      {showGuide && (
        <div
          id="pwa-install-modal-backdrop"
          onClick={() => setShowGuide(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xs p-4 animate-in fade-in duration-200"
        >
          <div
            id="pwa-install-modal-content"
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md rounded-2xl bg-[#0e1628] border border-[#23314f] p-5 sm:p-6 shadow-2xl text-slate-200"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[#1c2944]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <Download className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Install Smart Study Portal</h3>
                  <p className="text-[11px] text-indigo-300">Study anywhere with zero internet connection</p>
                </div>
              </div>
              <button
                id="close-pwa-guide-btn"
                onClick={() => setShowGuide(false)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-[#18233c] transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Offline Benefits Highlights */}
            <div className="my-4 p-3 rounded-xl bg-indigo-950/40 border border-indigo-900/50 space-y-1.5 text-xs text-slate-300">
              <div className="flex items-center gap-2 text-indigo-300 font-semibold text-xs">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Why Install the Offline App?</span>
              </div>
              <ul className="space-y-1 text-[11px] text-slate-300 pl-5 list-disc marker:text-indigo-400">
                <li>Read all 7 course modules & lecture notes without WiFi or mobile data</li>
                <li>Practice 1,000+ past exam CBT questions with offline timer & scoring</li>
                <li>Works in airplane mode, dormitories, and remote library zones</li>
                <li>Quick 1-tap launcher on your home screen or desktop</li>
              </ul>
            </div>

            {/* Steps based on platform */}
            {isIOS ? (
              <div className="space-y-2.5 text-xs">
                <div className="flex items-center gap-2 text-white font-semibold text-xs pb-1">
                  <Smartphone className="w-4 h-4 text-indigo-400" />
                  <span>How to Install on iPhone / iPad (Safari)</span>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#141f36] border border-[#1f2d4d]">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-[11px] font-bold text-white">1</span>
                  <p className="text-slate-300">
                    Tap the <strong className="text-white">Share</strong> icon at the bottom of Safari (the square box with an arrow pointing up).
                  </p>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#141f36] border border-[#1f2d4d]">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-[11px] font-bold text-white">2</span>
                  <p className="text-slate-300">
                    Scroll down the action sheet and select <strong className="text-white">"Add to Home Screen"</strong>.
                  </p>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#141f36] border border-[#1f2d4d]">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-[11px] font-bold text-white">3</span>
                  <p className="text-slate-300">
                    Tap <strong className="text-white">"Add"</strong> in the top-right corner. The app icon will appear on your home screen!
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-2.5 text-xs">
                <div className="flex items-center gap-2 text-white font-semibold text-xs pb-1">
                  <Laptop className="w-4 h-4 text-indigo-400" />
                  <span>How to Install on Android / Chrome / Edge / Laptop</span>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#141f36] border border-[#1f2d4d]">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-[11px] font-bold text-white">1</span>
                  <p className="text-slate-300">
                    Click the <strong className="text-white">three dots menu (⋮)</strong> in the top-right corner of Chrome or Edge.
                  </p>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#141f36] border border-[#1f2d4d]">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-[11px] font-bold text-white">2</span>
                  <p className="text-slate-300">
                    Select <strong className="text-white">"Install Smart Study"</strong> or <strong className="text-white">"Add to Home screen"</strong>.
                  </p>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#141f36] border border-[#1f2d4d]">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-[11px] font-bold text-white">3</span>
                  <p className="text-slate-300">
                    Confirm by clicking <strong className="text-white">"Install"</strong>. You can now launch and study with zero internet!
                  </p>
                </div>
              </div>
            )}

            <button
              id="pwa-guide-confirm-btn"
              onClick={() => setShowGuide(false)}
              className="mt-5 w-full rounded-xl bg-indigo-600 py-2.5 text-xs font-bold text-white hover:bg-indigo-500 transition shadow-lg shadow-indigo-600/30"
            >
              Ready to Study Offline
            </button>
          </div>
        </div>
      )}
    </>
  );
};
