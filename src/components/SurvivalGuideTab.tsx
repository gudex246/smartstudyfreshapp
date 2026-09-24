import React, { useState } from 'react';
import {
  Compass,
  Award,
  Briefcase,
  Home,
  CheckCircle,
  Lightbulb,
  ChevronDown,
  Clock,
  Sparkles,
  BookOpen
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const SurvivalGuideTab: React.FC = () => {
  const { guides } = useApp();
  const [expandedId, setExpandedId] = useState<string>(guides[0]?.id || 'g-transition');

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-blue-900 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-md">
        <div className="max-w-2xl space-y-2">
          <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold border border-blue-400/20">
            Freshman Orientation & Survival Hub
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            The Definitive Freshman University Survival Guide
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Essential strategies curated by senior university students covering academic grading curves, study syndicate dynamics, dormitory hacks, and departmental placement.
          </p>
        </div>
      </div>

      {/* Guide Cards Accordion */}
      <div className="space-y-4">
        {guides.map((guide) => {
          const isExpanded = expandedId === guide.id;

          return (
            <div
              key={guide.id}
              className={`bg-white rounded-2xl border transition-all overflow-hidden ${
                isExpanded
                  ? 'border-blue-300 shadow-sm ring-1 ring-blue-100'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              {/* Header Button */}
              <button
                onClick={() => setExpandedId(isExpanded ? '' : guide.id)}
                className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 transition"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
                        {guide.category}
                      </span>
                      <span className="text-xs text-slate-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {guide.readTime}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-1">
                      {guide.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">{guide.subtitle}</p>
                  </div>
                </div>

                <div
                  className={`p-2 rounded-xl text-slate-400 transition-transform duration-200 ${
                    isExpanded ? 'rotate-180 text-blue-600' : ''
                  }`}
                >
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>

              {/* Expanded Body */}
              {isExpanded && (
                <div className="px-5 pb-6 sm:px-6 space-y-5 border-t border-slate-100 pt-4 animate-in fade-in duration-150">
                  {/* Paragraphs */}
                  <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {guide.content.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>

                  {/* Golden Rules & Actionable Tips */}
                  <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 text-amber-950 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-900">
                      <Sparkles className="w-4 h-4 text-amber-600" />
                      <span>Actionable Freshman Rules:</span>
                    </div>
                    <ul className="space-y-1.5 text-xs text-amber-900/90 pl-1">
                      {guide.tips.map((tip, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
