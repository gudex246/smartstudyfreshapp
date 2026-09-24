import React, { useEffect, useState } from 'react';
import { WifiOff, CheckCircle2, ChevronUp, ChevronDown, BookOpen, FileText, Award, Calculator, Info } from 'lucide-react';
import { useOnlineStatus } from '../hooks/useOnlineStatus';

export const OfflineIndicator: React.FC = () => {
  const isOnline = useOnlineStatus();
  const [showReconnected, setShowReconnected] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [wasOffline, setWasOffline] = useState(false);

  useEffect(() => {
    if (!isOnline) {
      setWasOffline(true);
      setShowReconnected(false);
    } else if (wasOffline) {
      setShowReconnected(true);
      const timer = setTimeout(() => {
        setShowReconnected(false);
        setWasOffline(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isOnline, wasOffline]);

  if (isOnline && !showReconnected) return null;

  if (showReconnected) {
    return (
      <div className="fixed bottom-4 left-4 right-4 sm:right-auto sm:max-w-md z-50 flex items-center gap-2.5 rounded-xl bg-emerald-950/95 border border-emerald-700/80 text-emerald-200 px-4 py-2.5 text-xs font-medium shadow-2xl backdrop-blur-md animate-in slide-in-from-bottom-2 duration-200">
        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
        <div className="flex-1 leading-tight">
          <span className="font-bold text-white">Back Online!</span>
          <p className="text-[11px] text-emerald-300">Your connection is restored. All offline updates are saved.</p>
        </div>
      </div>
    );
  }

  // Offline State Banner
  return (
    <div className="fixed bottom-4 left-4 right-4 sm:right-auto sm:max-w-md z-50 rounded-2xl bg-[#141006]/95 border border-amber-500/60 text-amber-200 shadow-2xl backdrop-blur-md animate-in slide-in-from-bottom-2 duration-200 overflow-hidden">
      <div className="p-3.5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
            <WifiOff className="w-4 h-4 animate-pulse" />
          </div>
          <div className="leading-tight">
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-white text-xs">Offline Mode Active</span>
              <span className="bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[9px] font-bold px-1.5 py-0.2 rounded-full uppercase">
                Cached
              </span>
            </div>
            <p className="text-[11px] text-amber-300/90 mt-0.5">
              Courses, notes, quizzes & exams are 100% available offline
            </p>
          </div>
        </div>

        <button
          onClick={() => setShowDetails(!showDetails)}
          className="p-1 rounded-lg text-amber-400 hover:text-white hover:bg-amber-500/20 transition shrink-0"
          title={showDetails ? 'Hide offline details' : 'Show offline available content'}
        >
          {showDetails ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
        </button>
      </div>

      {showDetails && (
        <div className="px-3.5 pb-3.5 pt-1 border-t border-amber-500/20 text-[11px] space-y-2 bg-black/30">
          <p className="text-slate-300 text-[11px] font-medium">
            Everything you need for study is stored locally on this device:
          </p>
          <div className="grid grid-cols-2 gap-1.5 text-slate-300">
            <div className="flex items-center gap-1.5 bg-[#1b170c] p-1.5 rounded-lg border border-amber-500/20">
              <BookOpen className="w-3.5 h-3.5 text-amber-400" />
              <span>7 University Courses</span>
            </div>
            <div className="flex items-center gap-1.5 bg-[#1b170c] p-1.5 rounded-lg border border-amber-500/20">
              <FileText className="w-3.5 h-3.5 text-amber-400" />
              <span>40+ Unit Notes</span>
            </div>
            <div className="flex items-center gap-1.5 bg-[#1b170c] p-1.5 rounded-lg border border-amber-500/20">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>1,000+ CBT Questions</span>
            </div>
            <div className="flex items-center gap-1.5 bg-[#1b170c] p-1.5 rounded-lg border border-amber-500/20">
              <Calculator className="w-3.5 h-3.5 text-amber-400" />
              <span>GPA & Study Planner</span>
            </div>
          </div>
          <p className="text-[10px] text-amber-400/80 italic">
            * Note: Video streaming requires an active internet connection, but all lecture notes and quizzes work offline.
          </p>
        </div>
      )}
    </div>
  );
};
