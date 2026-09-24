import React, { useState, useMemo } from 'react';
import {
  BookOpen,
  ChevronRight,
  Bookmark,
  Clock,
  Search,
  CheckCircle,
  Layers,
  Sparkles,
  Lock,
  Unlock,
  Video,
  FileText
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Course, Chapter } from '../types';
import { cleanSymbols } from '../utils/textUtils';
import { UnitNotesQuizMe } from './UnitNotesQuizMe';

export const NotesTab: React.FC = () => {
  const {
    courses,
    bookmarks,
    toggleBookmark,
    isBookmarked,
    setActiveTab,
    isUnlocked,
    videos
  } = useApp();

  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);
  const [selectedChapterId, setSelectedChapterId] = useState<string | null>(null);
  const [searchFilter, setSearchFilter] = useState('');

  // Default to first course if none selected
  const activeCourse: Course | undefined = useMemo(() => {
    if (selectedCourseId) {
      return courses.find((c) => c.id === selectedCourseId) || courses[0];
    }
    return courses[0];
  }, [courses, selectedCourseId]);

  const activeChapter: Chapter | undefined = useMemo(() => {
    if (!activeCourse) return undefined;
    if (selectedChapterId) {
      return activeCourse.chapters.find((ch) => ch.id === selectedChapterId) || activeCourse.chapters[0];
    }
    return activeCourse.chapters[0];
  }, [activeCourse, selectedChapterId]);

  const filteredCourses = useMemo(() => {
    if (!searchFilter.trim()) return courses;
    const q = searchFilter.toLowerCase();
    return courses.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.code.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.chapters.some((ch) => ch.title.toLowerCase().includes(q) || ch.summary.toLowerCase().includes(q))
    );
  }, [courses, searchFilter]);

  return (
    <div className="space-y-6 text-slate-200">
      {/* Search and Header */}
      <div className="bg-[#0f172a]/95 border border-[#1e293b] rounded-2xl p-6 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-md">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-xl font-bold text-white">Freshman Lecture Notes & Cheatsheets</h1>
              <span className="bg-emerald-950/80 text-emerald-300 border border-emerald-700/60 text-[10px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                <CheckCircle className="w-3 h-3 text-emerald-400" />
                Offline Cached
              </span>
              {!isUnlocked && (
                <span className="bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                  <Lock className="w-3 h-3 text-amber-400" />
                  Free Preview Mode
                </span>
              )}
            </div>
            <p className="text-xs sm:text-sm text-slate-400">
              High-yield chapter summaries, formula cards, and exam-focused notes.
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="relative min-w-[240px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            placeholder="Search notes, formulas..."
            className="w-full bg-[#0a0f1d] border border-[#1e293b] text-slate-200 placeholder-slate-500 text-xs sm:text-sm rounded-xl pl-10 pr-4 py-2.5 focus:outline-none focus:border-indigo-500"
          />
        </div>
      </div>

      {/* Freemium Banner */}
      {!isUnlocked && (
        <div className="bg-gradient-to-r from-amber-500/15 via-amber-500/10 to-indigo-950/40 border border-amber-500/30 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-lg">
          <div className="flex items-start sm:items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center shrink-0">
              <Lock className="w-5 h-5" />
            </div>
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <span className="text-white text-xs sm:text-sm font-bold">
                  Student Free Preview Mode Active
                </span>
                <span className="bg-amber-400 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider">
                  First 2 Chapters Free
                </span>
              </div>
              <p className="text-xs text-slate-300">
                Chapters 1 and 2 are open for reading. Chapters 3+ are part of the Smart Study Pro Curriculum.
              </p>
            </div>
          </div>

          <button
            onClick={() => setActiveTab('unlock')}
            className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold shrink-0 transition flex items-center justify-center gap-1.5 shadow-md shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Unlock Pro Curriculum (300 ETB)</span>
          </button>
        </div>
      )}

      {/* Courses Horizontal Strip */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {filteredCourses.map((c) => {
          const isSelected = activeCourse?.id === c.id;
          return (
            <button
              key={c.id}
              onClick={() => {
                setSelectedCourseId(c.id);
                setSelectedChapterId(c.chapters[0]?.id || null);
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all border ${
                isSelected
                  ? 'bg-indigo-600 border-indigo-500 text-white shadow-md'
                  : 'bg-[#0f172a] border-[#1e293b] text-slate-400 hover:text-white hover:border-[#2b3a58]'
              }`}
            >
              {c.code}
            </button>
          );
        })}
      </div>

      {/* Main Content Layout */}
      {activeCourse && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Chapter Sidebar */}
          <div className="lg:col-span-4 space-y-3">
            <div className="bg-[#0f172a]/95 border border-[#1e293b] rounded-2xl p-4 shadow-lg space-y-3">
              <div className="flex items-center justify-between border-b border-[#1e293b] pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {activeCourse.code} Chapters
                </span>
                <span className="text-xs font-mono text-indigo-400">
                  {activeCourse.chapters.length} Modules
                </span>
              </div>

              <div className="space-y-2">
                {activeCourse.chapters.map((ch, chIdx) => {
                  const isChActive = activeChapter?.id === ch.id;
                  const isLockedChapter = !isUnlocked && chIdx >= 2;
                  return (
                    <div
                      key={ch.id}
                      onClick={() => setSelectedChapterId(ch.id)}
                      className={`p-3 rounded-xl border text-left cursor-pointer transition flex items-center justify-between gap-2 ${
                        isChActive
                          ? 'bg-indigo-950/40 border-indigo-500 text-white shadow-sm'
                          : 'bg-[#0a0f1d] border-[#1e293b] text-slate-300 hover:border-[#2b3a58]'
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="text-xs font-bold flex items-center gap-1.5">
                          <span className="text-indigo-400 font-mono">Ch.{ch.number}</span>
                          <span>{ch.title}</span>
                          {isLockedChapter && (
                            <span className="bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[9px] font-extrabold px-1.5 py-0.5 rounded flex items-center gap-0.5 ml-1">
                              <Lock className="w-2.5 h-2.5 text-amber-400" /> Pro
                            </span>
                          )}
                        </div>
                        <div className="text-[11px] text-slate-400 flex items-center gap-2">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {ch.readTimeMinutes} min
                          </span>
                          {ch.keyFormulas && (
                            <span>• {ch.keyFormulas.length} formulas</span>
                          )}
                        </div>
                      </div>
                      <ChevronRight
                        className={`w-4 h-4 shrink-0 ${
                          isChActive ? 'text-indigo-400' : 'text-slate-600'
                        }`}
                      />
                    </div>
                  );
                })}

                {activeCourse.chapters.length === 0 && (
                  <div className="p-5 text-center text-slate-400 text-xs border border-dashed border-[#1e293b] rounded-xl space-y-1 bg-[#0a0f1d]/60">
                    <p className="font-semibold text-slate-300">No notes uploaded</p>
                    <p className="text-[11px] text-slate-500">Ready for module upload</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Chapter Reader View */}
          <div className="lg:col-span-8">
            {activeChapter ? (() => {
              const activeChapterIndex = activeCourse.chapters.findIndex((ch) => ch.id === activeChapter.id);
              const isCurrentChapterLocked = !isUnlocked && (activeChapterIndex >= 0 ? activeChapterIndex >= 2 : false);

              return (
              <div className="bg-[#0f172a]/95 border border-[#1e293b] rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
                {/* Chapter Title Bar */}
                <div className="border-b border-[#1e293b] pb-4 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                        {activeCourse.code} • Chapter {activeChapter.number}
                      </span>
                      {isCurrentChapterLocked ? (
                        <span className="bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                          <Lock className="w-3 h-3 text-amber-400" /> Pro Curriculum
                        </span>
                      ) : (
                        <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                          Free Preview
                        </span>
                      )}
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
                      {activeChapter.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1">
                      {activeChapter.summary}
                    </p>
                  </div>

                  <button
                    onClick={() => toggleBookmark(activeChapter.id)}
                    className={`p-2 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition ${
                      isBookmarked(activeChapter.id)
                        ? 'bg-amber-500/20 border-amber-500/40 text-amber-300'
                        : 'bg-[#0a0f1d] border-[#1e293b] text-slate-400 hover:text-white'
                    }`}
                  >
                    <Bookmark className="w-4 h-4" />
                    <span className="hidden sm:inline">Bookmark</span>
                  </button>
                </div>

                {isCurrentChapterLocked ? (
                  <div className="bg-[#0b1329]/95 border border-slate-800/90 rounded-2xl p-8 sm:p-10 text-center space-y-4 shadow-inner my-4">
                    <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 mx-auto flex items-center justify-center shadow-sm">
                      <Lock className="w-6 h-6 text-amber-400" />
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                        This lecture note is part of the Smart Study Pro Curriculum
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
                        Unlock complete question explanations, video lectures, and notes with a subscription fee.
                      </p>
                    </div>
                    <button
                      onClick={() => setActiveTab('unlock')}
                      className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm inline-flex items-center gap-2 shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                      Unlock Full Access
                    </button>
                  </div>
                ) : (
                  <>
                    {/* Key Formulas Cheat-sheet Box */}
                    {activeChapter.keyFormulas && activeChapter.keyFormulas.length > 0 && (
                      <div className="p-4 rounded-xl bg-[#0a0f1d] border border-indigo-500/30 space-y-2">
                        <div className="text-xs font-bold text-indigo-300 flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                          <span>Key Formulas & Core Principles</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {activeChapter.keyFormulas.map((f, i) => (
                            <div
                              key={i}
                              className="font-mono text-xs text-indigo-200 bg-[#111827] px-3 py-2 rounded-lg border border-[#1e293b]"
                            >
                              {cleanSymbols(f)}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Chapter Notes Content */}
                    <div id={`chapter-notes-top-${activeChapter.id}`} className="prose prose-invert max-w-none text-xs sm:text-sm leading-relaxed text-slate-300 whitespace-pre-line">
                      {cleanSymbols(activeChapter.content)}
                    </div>

                    {/* Smart Study AI Quiz Me on This Unit */}
                    <UnitNotesQuizMe chapter={activeChapter} course={activeCourse} />
                  </>
                )}
              </div>
              );
            })() : (
              <div className="bg-[#0f172a]/95 border border-[#1e293b] rounded-2xl p-10 text-center space-y-4 shadow-xl">
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 mx-auto flex items-center justify-center shadow-sm">
                  <FileText className="w-7 h-7" />
                </div>
                <div className="space-y-1.5 max-w-md mx-auto">
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    No Notes Currently for {activeCourse.name} ({activeCourse.code})
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    All previous notes have been removed. Please share your course module or syllabus, and concise unit-by-unit short notes with key formulas and summary cards will be prepared here!
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
