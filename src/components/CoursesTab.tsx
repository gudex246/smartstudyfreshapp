import React, { useState } from 'react';
import {
  BookOpen,
  ChevronRight,
  Clock,
  Bookmark,
  BookmarkCheck,
  GraduationCap,
  PlayCircle,
  FileText,
  Search,
  CheckCircle,
  Layers,
  Sparkles,
  Lock,
  Unlock,
  Video
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Course, Chapter } from '../types';
import { UnitNotesQuizMe } from './UnitNotesQuizMe';

export const CoursesTab: React.FC = () => {
  const {
    courses,
    streamFilter,
    bookmarks,
    toggleBookmark,
    isBookmarked,
    setActiveTab,
    isUnlocked,
    videos
  } = useApp();

  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);
  const [selectedChapterId, setSelectedChapterId] = useState<string | null>(null);
  const [semesterFilter, setSemesterFilter] = useState<'all' | '1' | '2'>('all');
  const [localSearch, setLocalSearch] = useState('');

  // Filter courses by Stream & Semester & Search
  const filteredCourses = courses.filter((course) => {
    const matchesStream =
      streamFilter === 'both' || course.stream === 'both' || course.stream === streamFilter;
    const matchesSemester =
      semesterFilter === 'all' || course.semester.toString() === semesterFilter;
    const matchesQuery =
      localSearch.trim() === '' ||
      course.name.toLowerCase().includes(localSearch.toLowerCase()) ||
      course.code.toLowerCase().includes(localSearch.toLowerCase()) ||
      course.description.toLowerCase().includes(localSearch.toLowerCase());
    return matchesStream && matchesSemester && matchesQuery;
  });

  const activeCourse = courses.find((c) => c.id === selectedCourseId) || null;
  const activeChapter =
    activeCourse?.chapters.find((ch) => ch.id === selectedChapterId) ||
    activeCourse?.chapters[0] ||
    null;

  const handleOpenCourse = (course: Course) => {
    setSelectedCourseId(course.id);
    if (course.chapters.length > 0) {
      setSelectedChapterId(course.chapters[0].id);
    } else {
      setSelectedChapterId(null);
    }
  };

  const handleNextChapter = () => {
    if (!activeCourse || !activeChapter) return;
    const currentIndex = activeCourse.chapters.findIndex((c) => c.id === activeChapter.id);
    if (currentIndex < activeCourse.chapters.length - 1) {
      setSelectedChapterId(activeCourse.chapters[currentIndex + 1].id);
    }
  };

  const handlePrevChapter = () => {
    if (!activeCourse || !activeChapter) return;
    const currentIndex = activeCourse.chapters.findIndex((c) => c.id === activeChapter.id);
    if (currentIndex > 0) {
      setSelectedChapterId(activeCourse.chapters[currentIndex - 1].id);
    }
  };

  return (
    <div className="space-y-6">
      {/* Course Reader View Modal / Screen */}
      {activeCourse ? (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden animate-in fade-in duration-200">
          {/* Header of Course Reader */}
          <div className="p-4 sm:p-6 bg-slate-900 text-white flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs text-blue-300 font-medium mb-1">
                <button
                  onClick={() => setSelectedCourseId(null)}
                  className="hover:underline flex items-center gap-1 text-slate-300 hover:text-white"
                >
                  Courses
                </button>
                <span>/</span>
                <span className="text-white font-semibold">{activeCourse.code}</span>
                <span>•</span>
                <span className="capitalize">{activeCourse.stream} Stream</span>
                <span>•</span>
                <span>{activeCourse.creditHours} Credit Hours</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                {activeCourse.name}
              </h2>
            </div>

            <div className="flex items-center gap-2 self-start md:self-auto">
              <button
                onClick={() => toggleBookmark(activeCourse.id)}
                className={`p-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition ${
                  isBookmarked(activeCourse.id)
                    ? 'bg-amber-400 text-slate-900'
                    : 'bg-slate-800 text-slate-200 hover:bg-slate-700'
                }`}
                title="Bookmark course for offline study"
              >
                {isBookmarked(activeCourse.id) ? (
                  <BookmarkCheck className="w-4 h-4" />
                ) : (
                  <Bookmark className="w-4 h-4" />
                )}
                <span>{isBookmarked(activeCourse.id) ? 'Saved' : 'Bookmark'}</span>
              </button>

              <button
                onClick={() => setActiveTab('quiz')}
                className="px-3 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm transition"
              >
                <PlayCircle className="w-4 h-4" />
                <span>Practice CBT Exam</span>
              </button>

              <button
                onClick={() => setSelectedCourseId(null)}
                className="px-3 py-2 rounded-xl border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 text-xs font-medium transition"
              >
                Back to Catalog
              </button>
            </div>
          </div>

          {/* Body: Chapter selector sidebar + Reader content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
            {/* Sidebar with chapters */}
            <div className="lg:col-span-4 border-r border-slate-200 bg-slate-50/50 p-4 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Chapters & Modules ({activeCourse.chapters.length})
                </h3>
              </div>

              <div className="space-y-2">
                {activeCourse.chapters.map((ch, idx) => {
                  const isSelected = activeChapter?.id === ch.id;
                  return (
                    <button
                      key={ch.id}
                      onClick={() => setSelectedChapterId(ch.id)}
                      className={`w-full text-left p-3 rounded-xl border text-xs transition-all flex items-start justify-between gap-2 ${
                        isSelected
                          ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-blue-200 hover:bg-slate-50'
                      }`}
                    >
                      <div>
                        <span
                          className={`font-mono text-[10px] font-bold block ${
                            isSelected ? 'text-blue-200' : 'text-slate-400'
                          }`}
                        >
                          CHAPTER {ch.number}
                        </span>
                        <span className="font-semibold block text-sm mt-0.5 leading-snug">
                          {ch.title}
                        </span>
                        <div
                          className={`flex items-center gap-2 mt-1.5 text-[11px] ${
                            isSelected ? 'text-blue-100' : 'text-slate-500'
                          }`}
                        >
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {ch.readTimeMinutes} min
                          </span>
                          {ch.keyFormulas && ch.keyFormulas.length > 0 && (
                            <span>• {ch.keyFormulas.length} formulas</span>
                          )}
                          {ch.isPremium && !isUnlocked && (
                            <span className="text-amber-500 font-bold flex items-center gap-0.5">
                              <Lock className="w-2.5 h-2.5" /> 300 ETB
                            </span>
                          )}
                        </div>
                      </div>
                      <ChevronRight
                        className={`w-4 h-4 shrink-0 mt-1 ${
                          isSelected ? 'text-white' : 'text-slate-400'
                        }`}
                      />
                    </button>
                  );
                })}

                {activeCourse.chapters.length === 0 && (
                  <div className="p-6 text-center text-slate-400 text-xs">
                    No chapters added yet for this course.
                  </div>
                )}
              </div>
            </div>

            {/* Main Chapter Content Area */}
            <div className="lg:col-span-8 p-6 sm:p-8 space-y-6">
              {activeChapter ? (
                <>
                  <div className="border-b border-slate-100 pb-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                        Chapter {activeChapter.number}
                      </span>
                      {activeChapter.isPremium && !isUnlocked ? (
                        <span className="text-[10px] font-bold bg-amber-100 text-amber-900 border border-amber-300 px-2 py-0.5 rounded-full flex items-center gap-1">
                          <Lock className="w-3 h-3 text-amber-700" /> Premium Content
                        </span>
                      ) : (
                        <span className="text-[10px] font-bold bg-emerald-100 text-emerald-900 px-2 py-0.5 rounded-full">
                          Full Access
                        </span>
                      )}
                    </div>
                    <h1 className="text-2xl font-bold text-slate-900 mt-1">
                      {activeChapter.title}
                    </h1>
                    <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                      {activeChapter.summary}
                    </p>
                  </div>

                  {/* Related Tutorial Video Banner if any */}
                  {videos.some((v) => v.courseId === activeCourse.id) && (
                    <div className="p-3.5 bg-indigo-50/70 border border-indigo-100 rounded-2xl flex items-center justify-between gap-3 text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center">
                          <Video className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="font-bold text-indigo-950 block">Masterclass Video Available</span>
                          <span className="text-[11px] text-indigo-700">Watch the instructor breakdown this topic step-by-step.</span>
                        </div>
                      </div>
                      <button
                        onClick={() => setActiveTab('videos')}
                        className="px-3 py-1.5 rounded-xl bg-indigo-600 text-white font-bold text-xs hover:bg-indigo-700 transition shrink-0"
                      >
                        Watch Video
                      </button>
                    </div>
                  )}

                  {/* Key Formulas Cheat-sheet Box if available */}
                  {activeChapter.keyFormulas && activeChapter.keyFormulas.length > 0 && (
                    <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100 text-blue-950 space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-800">
                        <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                        <span>High-Yield Formulas & Exam Keys</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1">
                        {activeChapter.keyFormulas.map((formula, i) => (
                          <div
                            key={i}
                            className="bg-white/80 p-2.5 rounded-lg border border-blue-100 font-mono text-xs text-slate-800 shadow-2xs"
                          >
                            {formula}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Core Content or Locked Content Gating */}
                  {activeChapter.isPremium && !isUnlocked ? (
                    <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-slate-50 to-amber-50/40 border border-amber-200 text-center space-y-4 my-4">
                      <div className="w-12 h-12 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center mx-auto shadow-sm">
                        <Lock className="w-6 h-6" />
                      </div>
                      <div className="max-w-md mx-auto space-y-1">
                        <h3 className="text-base font-bold text-slate-900">
                          This Chapter is Part of Smart Study Tutorial Package
                        </h3>
                        <p className="text-xs text-slate-600">
                          Complete lecture notes, worked examples, and exam step-by-step proofs require verified 300 ETB access.
                        </p>
                      </div>

                      <div className="p-3 bg-white rounded-2xl border border-amber-200/80 max-w-sm mx-auto text-xs space-y-1">
                        <div className="font-mono text-[11px] text-slate-700">
                          CBE: <strong>1000521750255</strong>
                        </div>
                        <div className="font-mono text-[11px] text-slate-700">
                          Telebirr: <strong>0953201048</strong>
                        </div>
                        <div className="text-[10px] text-slate-500">
                          Account Name: Guduru Alemayehu (300 ETB)
                        </div>
                      </div>

                      <button
                        onClick={() => setActiveTab('unlock')}
                        className="px-6 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs inline-flex items-center gap-2 shadow-sm transition"
                      >
                        <Sparkles className="w-4 h-4" />
                        <span>Upload Payment Screenshot to Unlock</span>
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className="prose prose-slate max-w-none text-sm leading-relaxed text-slate-700 whitespace-pre-line">
                        {activeChapter.content}
                      </div>

                      {/* Smart Study AI Quiz Me on This Unit */}
                      <UnitNotesQuizMe chapter={activeChapter} course={activeCourse} />
                    </>
                  )}

                  {/* Chapter Navigation Buttons */}
                  <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
                    <button
                      onClick={handlePrevChapter}
                      disabled={activeCourse.chapters[0]?.id === activeChapter.id}
                      className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-100 disabled:opacity-30 disabled:pointer-events-none transition"
                    >
                      ← Previous Chapter
                    </button>

                    <button
                      onClick={() => toggleBookmark(activeChapter.id)}
                      className={`px-3 py-2 rounded-xl text-xs font-medium flex items-center gap-1.5 transition ${
                        isBookmarked(activeChapter.id)
                          ? 'bg-amber-100 text-amber-900'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      <Bookmark className="w-3.5 h-3.5" />
                      <span>
                        {isBookmarked(activeChapter.id)
                          ? 'Chapter Saved'
                          : 'Save Chapter'}
                      </span>
                    </button>

                    <button
                      onClick={handleNextChapter}
                      disabled={
                        activeCourse.chapters[activeCourse.chapters.length - 1]?.id ===
                        activeChapter.id
                      }
                      className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold disabled:opacity-30 disabled:pointer-events-none shadow-xs transition"
                    >
                      Next Chapter →
                    </button>
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center py-16 text-slate-400 text-center max-w-md mx-auto space-y-2">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-1">
                    <FileText className="w-7 h-7 stroke-[1.5]" />
                  </div>
                  <h4 className="text-base font-bold text-slate-800">
                    No Notes Currently Loaded
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    All previous notes have been removed. Ready to prepare unit-by-unit short notes once the course module is provided!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        /* Course Catalog Grid */
        <>
          {/* Controls Bar: Search + Semester Filter */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs">
            {/* Search */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                id="course-search-input"
                type="text"
                value={localSearch}
                onChange={(e) => setLocalSearch(e.target.value)}
                placeholder="Search courses, e.g. Math, Physics, Logic..."
                className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-slate-50/50"
              />
            </div>

            {/* Semester Filter Tabs */}
            <div className="flex items-center gap-1 self-start sm:self-auto bg-slate-100 p-1 rounded-xl">
              <span className="text-[11px] font-semibold text-slate-500 px-2">Semester:</span>
              {(['all', '1', '2'] as const).map((sem) => (
                <button
                  key={sem}
                  onClick={() => setSemesterFilter(sem)}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold capitalize transition ${
                    semesterFilter === sem
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {sem === 'all' ? 'Both' : `Semester ${sem}`}
                </button>
              ))}
            </div>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredCourses.map((course) => {
              const totalReadTime = course.chapters.reduce(
                (acc, curr) => acc + (curr.readTimeMinutes || 10),
                0
              );
              const isSaved = isBookmarked(course.id);

              return (
                <div
                  key={course.id}
                  id={`course-card-${course.id}`}
                  className="bg-white rounded-2xl border border-slate-200 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between overflow-hidden group"
                >
                  <div className="p-5">
                    {/* Top Tag Row */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 text-[11px] font-mono font-bold tracking-wide">
                        {course.code}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider bg-slate-100 px-2 py-0.5 rounded-md">
                          Sem {course.semester} • {course.creditHours} Cr
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleBookmark(course.id);
                          }}
                          className="text-slate-400 hover:text-amber-500 transition"
                          title={isSaved ? 'Remove bookmark' : 'Bookmark course'}
                        >
                          {isSaved ? (
                            <BookmarkCheck className="w-4 h-4 text-amber-500 fill-amber-500" />
                          ) : (
                            <Bookmark className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Course Title & Description */}
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {course.name}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                      {course.description}
                    </p>

                    {/* Chapters count & read time */}
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                      <span className="flex items-center gap-1.5 font-medium">
                        <Layers className="w-3.5 h-3.5 text-blue-600" />
                        {course.chapters.length} Modules / Chapters
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        ~{totalReadTime} min
                      </span>
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="bg-slate-50/80 px-5 py-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-slate-500 capitalize">
                      {course.stream === 'both' ? 'Common Course' : `${course.stream} Stream`}
                    </span>
                    <button
                      onClick={() => handleOpenCourse(course)}
                      className="flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800 transition"
                    >
                      <span>Study Notes</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredCourses.length === 0 && (
            <div className="p-12 text-center bg-white rounded-2xl border border-slate-200">
              <BookOpen className="w-12 h-12 mx-auto text-slate-300 stroke-1" />
              <h3 className="mt-3 text-sm font-bold text-slate-900">No courses match your filter</h3>
              <p className="mt-1 text-xs text-slate-500">
                Try clearing your search query or switching your stream filter.
              </p>
              <button
                onClick={() => {
                  setLocalSearch('');
                  setSemesterFilter('all');
                }}
                className="mt-4 px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold"
              >
                Reset Filters
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};
