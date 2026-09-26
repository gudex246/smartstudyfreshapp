import React, { useState, useEffect } from 'react';
import {
  Search,
  BookOpen,
  FileQuestion,
  Compass,
  X,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { cleanQuestionText } from '../utils/textUtils';

interface QuickSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuickSearchModal: React.FC<QuickSearchModalProps> = ({ isOpen, onClose }) => {
  const { courses, questions, guides, setActiveTab } = useApp();
  const [query, setQuery] = useState('');

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        // toggle search
        isOpen ? onClose() : undefined;
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const cleanQuery = query.toLowerCase().trim();

  // Search Results
  const matchingCourses =
    cleanQuery === ''
      ? []
      : courses.filter(
          (c) =>
            c.name.toLowerCase().includes(cleanQuery) ||
            c.code.toLowerCase().includes(cleanQuery) ||
            c.description.toLowerCase().includes(cleanQuery)
        );

  const matchingChapters =
    cleanQuery === ''
      ? []
      : courses.flatMap((c) =>
          c.chapters
            .filter(
              (ch) =>
                ch.title.toLowerCase().includes(cleanQuery) ||
                ch.summary.toLowerCase().includes(cleanQuery) ||
                ch.content.toLowerCase().includes(cleanQuery) ||
                (ch.keyFormulas &&
                  ch.keyFormulas.some((f) => f.toLowerCase().includes(cleanQuery)))
            )
            .map((ch) => ({ course: c, chapter: ch }))
        );

  const matchingQuestions =
    cleanQuery === ''
      ? []
      : questions.filter(
          (q) =>
            q.question.toLowerCase().includes(cleanQuery) ||
            q.courseCode.toLowerCase().includes(cleanQuery) ||
            q.explanation.toLowerCase().includes(cleanQuery)
        );

  const matchingGuides =
    cleanQuery === ''
      ? []
      : guides.filter(
          (g) =>
            g.title.toLowerCase().includes(cleanQuery) ||
            g.subtitle.toLowerCase().includes(cleanQuery) ||
            g.content.some((text) => text.toLowerCase().includes(cleanQuery))
        );

  const hasResults =
    matchingCourses.length > 0 ||
    matchingChapters.length > 0 ||
    matchingQuestions.length > 0 ||
    matchingGuides.length > 0;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-slate-900/60 backdrop-blur-xs p-4 pt-16 sm:pt-24 animate-in fade-in duration-150">
      <div className="w-full max-w-2xl rounded-3xl bg-white shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-100 flex items-center gap-3">
          <Search className="w-5 h-5 text-blue-600 shrink-0" />
          <input
            id="global-modal-search-input"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search all freshman notes, calculus formulas, CBT exams, and orientation..."
            className="flex-1 text-sm bg-transparent border-none focus:outline-hidden text-slate-900 placeholder:text-slate-400"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-md text-slate-400 hover:text-slate-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="px-2 py-0.5 text-[10px] font-mono bg-slate-100 text-slate-500 rounded border border-slate-200">
            ESC
          </kbd>
        </div>

        {/* Results Body */}
        <div className="overflow-y-auto p-4 space-y-4 flex-1">
          {cleanQuery === '' ? (
            <div className="py-12 text-center text-slate-400 text-xs">
              <Sparkles className="w-8 h-8 mx-auto text-blue-400 mb-2 stroke-[1.5]" />
              <p className="font-semibold text-slate-700">Quick Curriculum Search</p>
              <p className="text-[11px] text-slate-400 mt-1">
                Type keywords like "Vectors", "Kinematics", "Fallacy", "SaaS", or "GPA"
              </p>
            </div>
          ) : !hasResults ? (
            <div className="py-12 text-center text-slate-400 text-xs">
              No results found matching "{query}".
            </div>
          ) : (
            <div className="space-y-4">
              {/* Courses Results */}
              {matchingCourses.length > 0 && (
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Courses ({matchingCourses.length})
                  </span>
                  <div className="space-y-1">
                    {matchingCourses.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => {
                          setActiveTab('notes');
                          onClose();
                        }}
                        className="w-full text-left p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 flex items-center justify-between text-xs transition"
                      >
                        <div className="flex items-center gap-3">
                          <BookOpen className="w-4 h-4 text-blue-600" />
                          <div>
                            <span className="font-bold text-slate-900">{c.name}</span>
                            <span className="text-slate-400 ml-2 font-mono">{c.code}</span>
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-300" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Chapters & Notes Results */}
              {matchingChapters.length > 0 && (
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Lecture Notes & Chapters ({matchingChapters.length})
                  </span>
                  <div className="space-y-1">
                    {matchingChapters.slice(0, 5).map(({ course, chapter }) => (
                      <button
                        key={chapter.id}
                        onClick={() => {
                          setActiveTab('notes');
                          onClose();
                        }}
                        className="w-full text-left p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 flex items-center justify-between text-xs transition"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-[10px] font-bold text-blue-600">
                              {course.code} • Chapter {chapter.number}
                            </span>
                          </div>
                          <span className="font-bold text-slate-900 block mt-0.5">
                            {chapter.title}
                          </span>
                          <span className="text-slate-500 text-[11px] line-clamp-1">
                            {chapter.summary}
                          </span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-300 shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Questions Results */}
              {matchingQuestions.length > 0 && (
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Past Exam Questions ({matchingQuestions.length})
                  </span>
                  <div className="space-y-1">
                    {matchingQuestions.slice(0, 4).map((q) => (
                      <button
                        key={q.id}
                        onClick={() => {
                          setActiveTab('questions');
                          onClose();
                        }}
                        className="w-full text-left p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 flex items-center justify-between text-xs transition"
                      >
                        <div className="flex items-start gap-2.5">
                          <FileQuestion className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-mono text-[10px] font-bold text-slate-500">
                              {q.courseCode} ({q.examType})
                            </span>
                            <p className="font-semibold text-slate-900 line-clamp-1">
                              {cleanQuestionText(q.question)}
                            </p>
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-300 shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
