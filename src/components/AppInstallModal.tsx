import React from 'react';
import { Smartphone, Download, Check, X, Sparkles, WifiOff, Share2, PlusSquare } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { useApp } from '../context/AppContext';

interface AppInstallModalProps {
  isOpen: boolean;
  onClose: () => void;
  studentName?: string;
}

export const AppInstallModal: React.FC<AppInstallModalProps> = ({
  isOpen,
  onClose,
  studentName
}) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const { studentProfile } = useApp();

  if (!isOpen) return null;

  const displayName = studentName || studentProfile.name || 'Freshman Student';

  const handleInstallClick = async () => {
    if (isInstallable) {
      const outcome = await install();
      if (outcome) {
        onClose();
      }
    }
  };

  return (
    <div
      id="app-install-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="app-install-modal"
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md bg-[#0e1628] border border-[#23314f] rounded-3xl p-6 shadow-2xl text-slate-200 relative overflow-hidden"
      >
        {/* Glow accent */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-600/30 rounded-full blur-3xl pointer-events-none" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1.5 rounded-full hover:bg-slate-800 transition"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-600/40 shrink-0">
            <Smartphone className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="bg-amber-400 text-slate-950 font-black text-[9px] px-2 py-0.5 rounded-full uppercase tracking-wider">
                Mobile PWA App
              </span>
              <span className="text-emerald-400 text-xs font-bold flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Offline Ready
              </span>
            </div>
            <h3 className="text-lg font-extrabold text-white mt-0.5">
              Install Smart Study App
            </h3>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-[#121c33] border border-[#1e2e50] rounded-2xl p-4 space-y-2">
            <p className="text-xs text-slate-300">
              Welcome <strong className="text-white">{displayName}</strong>! Install Smart Study to your phone's home screen for the fastest mobile experience:
            </p>

            <ul className="text-xs text-slate-300 space-y-1.5 pt-1">
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Practice 1,000+ CBT Exam Questions 100% offline</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Instant access without opening your browser every time</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Save mobile data when reviewing downloaded lecture notes</span>
              </li>
            </ul>
          </div>

          {/* Installation Instructions based on platform */}
          {isInstalled ? (
            <div className="p-3.5 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2.5">
              <Check className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>Smart Study is already installed on this device! You are ready for offline learning.</span>
            </div>
          ) : isIOS ? (
            <div className="p-4 rounded-2xl bg-indigo-950/60 border border-indigo-500/30 text-xs space-y-2 text-indigo-200">
              <div className="font-bold text-white flex items-center gap-1.5">
                <Share2 className="w-4 h-4 text-sky-400" />
                <span>How to Install on iPhone / iPad (Safari):</span>
              </div>
              <ol className="list-decimal list-inside space-y-1 text-slate-300 text-[11px] leading-relaxed">
                <li>Tap the <strong className="text-white">Share</strong> icon (<span className="text-sky-300">⎋</span>) at the bottom of Safari.</li>
                <li>Scroll down and select <strong className="text-white">"Add to Home Screen"</strong> (<span className="text-sky-300 font-mono">⊞</span>).</li>
                <li>Tap <strong className="text-white">"Add"</strong> in the top-right corner.</li>
              </ol>
            </div>
          ) : (
            <div className="space-y-2">
              {isInstallable ? (
                <button
                  id="modal-install-now-btn"
                  onClick={handleInstallClick}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-sm shadow-xl shadow-indigo-600/40 active:scale-98 transition"
                >
                  <Download className="w-4 h-4" />
                  <span>Install App to Home Screen</span>
                </button>
              ) : (
                <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-xs text-slate-300 space-y-1">
                  <div className="font-bold text-white flex items-center gap-1.5">
                    <Smartphone className="w-4 h-4 text-indigo-400" />
                    <span>Android Chrome / Mobile Browser:</span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Tap the browser menu (<strong>⋮</strong> in top right) and tap <strong>"Install app"</strong> or <strong>"Add to Home screen"</strong>.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Action buttons */}
          <div className="pt-2 flex items-center justify-between gap-3 border-t border-slate-800">
            <button
              type="button"
              onClick={onClose}
              className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-slate-400 hover:text-white hover:bg-slate-800/80 transition text-center"
            >
              Continue to Study Portal &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
