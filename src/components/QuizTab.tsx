import React, { useState, useEffect } from 'react';
import {
  FileCheck2,
  CheckCircle2,
  XCircle,
  Clock,
  RotateCcw,
  Flag,
  Award,
  BookOpen,
  Filter,
  Play,
  Check,
  HelpCircle,
  Sparkles,
  History,
  Lock
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ExamQuestion, QuizAttempt } from '../types';
import { cleanQuestionText } from '../utils/textUtils';

export const QuizTab: React.FC = () => {
  const { questions, courses, saveQuizAttempt, quizAttempts, streamFilter, isUnlocked, setActiveTab } = useApp();

  // Configuration state before starting
  const [selectedCourseId, setSelectedCourseId] = useState<string>('all');
  const [selectedExamType, setSelectedExamType] = useState<'all' | 'midterm' | 'final' | 'model'>('all');
  const [examMode, setExamMode] = useState<'timed' | 'practice'>('timed');
  const [questionCount, setQuestionCount] = useState<number>(10);

  // Active quiz state
  const [isTakingQuiz, setIsTakingQuiz] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState<ExamQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<string[]>([]);
  const [timeRemaining, setTimeRemaining] = useState(0); // seconds
  const [timeElapsed, setTimeElapsed] = useState(0);

  // Completed results state
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [lastAttempt, setLastAttempt] = useState<QuizAttempt | null>(null);

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTakingQuiz && !isSubmitted) {
      interval = setInterval(() => {
        setTimeElapsed((prev) => prev + 1);
        if (examMode === 'timed') {
          setTimeRemaining((prev) => {
            if (prev <= 1) {
              clearInterval(interval);
              handleSubmitQuiz();
              return 0;
            }
            return prev - 1;
          });
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTakingQuiz, isSubmitted, examMode]);

  // Start exam session
  const handleStartExam = () => {
    let pool = [...questions];

    if (selectedCourseId !== 'all') {
      pool = pool.filter((q) => q.courseId === selectedCourseId);
    } else if (streamFilter !== 'both') {
      const allowedCourseIds = courses
        .filter((c) => c.stream === 'both' || c.stream === streamFilter)
        .map((c) => c.id);
      pool = pool.filter((q) => allowedCourseIds.includes(q.courseId));
    }

    if (selectedExamType !== 'all') {
      pool = pool.filter((q) => q.examType === selectedExamType);
    }

    if (pool.length === 0) {
      alert('No questions match this filter. Please choose another course or exam type.');
      return;
    }

    // Shuffle and pick limit - first 4 preview questions if not unlocked
    const effectiveCount = !isUnlocked ? Math.min(questionCount, 4) : questionCount;
    const shuffled = pool.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, Math.min(effectiveCount, shuffled.length));

    setQuizQuestions(selected);
    setCurrentIndex(0);
    setSelectedAnswers({});
    setFlaggedQuestions([]);
    setIsSubmitted(false);
    setLastAttempt(null);
    setTimeElapsed(0);
    // Give 1.5 minutes per question in timed mode
    setTimeRemaining(selected.length * 90);
    setIsTakingQuiz(true);
  };

  // Option selection
  const handleSelectOption = (optionIndex: number) => {
    if (isSubmitted && examMode === 'timed') return;
    const currentQ = quizQuestions[currentIndex];
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQ.id]: optionIndex
    }));
  };

  // Flag question toggle
  const handleToggleFlag = (id: string) => {
    setFlaggedQuestions((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Submit and compute score
  const handleSubmitQuiz = () => {
    let score = 0;
    const userAnswers = quizQuestions.map((q) => {
      const selected = selectedAnswers[q.id] ?? -1;
      const isCorrect = selected === q.correctAnswer;
      if (isCorrect) score += 1;
      return {
        questionId: q.id,
        selectedOption: selected,
        isCorrect
      };
    });

    const percentage = Math.round((score / quizQuestions.length) * 100);
    const courseTitle =
      selectedCourseId === 'all'
        ? 'Freshman Comprehensive Exam'
        : courses.find((c) => c.id === selectedCourseId)?.name || 'Course Exam';

    const attempt: QuizAttempt = {
      id: 'att-' + Date.now(),
      courseId: selectedCourseId,
      courseName: courseTitle,
      date: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      }),
      score,
      totalQuestions: quizQuestions.length,
      percentage,
      timeSpentSeconds: timeElapsed,
      userAnswers
    };

    saveQuizAttempt(attempt);
    setLastAttempt(attempt);
    setIsSubmitted(true);
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const currentQ = quizQuestions[currentIndex];
  const totalQ = quizQuestions.length;
  const answeredCount = Object.keys(selectedAnswers).length;

  return (
    <div className="space-y-6">
      {/* 1. SETUP / LOBBY SCREEN (when not currently in quiz) */}
      {!isTakingQuiz && (
        <div className="space-y-6">
          {/* Hero Banner */}
          <div className="bg-gradient-to-br from-blue-900 via-indigo-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shadow-md">
            <div className="relative z-10 max-w-2xl">
              <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold border border-blue-400/20">
                Freshman CBT Engine
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight mt-2">
                University Past Exams & CBT Simulator
              </h1>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                Test your mastery with genuine midterm, final, and model questions. Detailed step-by-step solutions for every problem help you prepare for relative grading curves.
              </p>
            </div>
          </div>

          {/* Student Free Preview 4-Question Notice */}
          {!isUnlocked && (
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center shrink-0">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <span>Free Trial: First 4 Questions Accessible</span>
                    <span className="bg-amber-400 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded-full uppercase">
                      4 Questions
                    </span>
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Full 10, 15, 30, and 50-question mock exams are part of Smart Study Pro. To unlock complete mock tests and question banks, pay the 300 ETB subscription fee.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setActiveTab('unlock')}
                className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl shrink-0 transition flex items-center justify-center gap-1.5 shadow-sm"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Pay 300 ETB to Unlock</span>
              </button>
            </div>
          )}

          {/* Configuration Card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs space-y-6">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Filter className="w-4 h-4 text-blue-600" />
              <span>Customize Your Exam Session</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Course Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Select Course
                </label>
                <select
                  id="quiz-course-select"
                  value={selectedCourseId}
                  onChange={(e) => setSelectedCourseId(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
                >
                  <option value="all">All Available Courses</option>
                  {courses.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.code} — {c.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Exam Type Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Exam Type
                </label>
                <select
                  id="quiz-type-select"
                  value={selectedExamType}
                  onChange={(e) => setSelectedExamType(e.target.value as any)}
                  className="w-full text-xs p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
                >
                  <option value="all">All Types (Midterm + Final + Model)</option>
                  <option value="midterm">Midterm Exams Only</option>
                  <option value="final">Final Exams Only</option>
                  <option value="model">Model Practice Exams</option>
                </select>
              </div>

              {/* Exam Mode Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Session Mode
                </label>
                <select
                  id="quiz-mode-select"
                  value={examMode}
                  onChange={(e) => setExamMode(e.target.value as any)}
                  className="w-full text-xs p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
                >
                  <option value="timed">Timed CBT Simulation (90s / Q)</option>
                  <option value="practice">Practice Mode (Instant Feedback)</option>
                </select>
              </div>

              {/* Question Count */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Number of Questions
                </label>
                <select
                  id="quiz-count-select"
                  value={questionCount}
                  onChange={(e) => setQuestionCount(Number(e.target.value))}
                  className="w-full text-xs p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
                >
                  <option value={5}>5 Quick Questions</option>
                  <option value={10}>10 Standard Questions</option>
                  <option value={15}>15 Comprehensive Questions</option>
                  <option value={30}>Full Mock (Up to 30 Questions)</option>
                  <option value={50}>Complete 50-Question Model Exam</option>
                </select>
              </div>
            </div>

            {/* Start Button */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-500">
                Total available question bank:{' '}
                <strong className="text-slate-800">{questions.length} verified questions</strong>
              </span>
              <button
                id="start-exam-btn"
                onClick={handleStartExam}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition active:scale-95"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>Begin CBT Examination</span>
              </button>
            </div>
          </div>

          {/* Past Attempts History */}
          {quizAttempts.length > 0 && (
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <History className="w-4 h-4 text-blue-600" />
                  <span>Recent CBT Performance History ({quizAttempts.length})</span>
                </h3>
              </div>

              <div className="divide-y divide-slate-100">
                {quizAttempts.slice(0, 5).map((att) => (
                  <div key={att.id} className="py-3 flex items-center justify-between gap-4 text-xs">
                    <div>
                      <span className="font-semibold text-slate-900 block">{att.courseName}</span>
                      <span className="text-slate-400 text-[11px]">
                        {att.date} • Spent {formatTime(att.timeSpentSeconds)}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <span className="font-bold text-slate-800">
                          {att.score} / {att.totalQuestions}
                        </span>
                        <span className="text-[11px] block text-slate-500">
                          ({att.percentage}%)
                        </span>
                      </div>
                      <span
                        className={`px-2.5 py-1 rounded-lg text-xs font-bold ${
                          att.percentage >= 80
                            ? 'bg-emerald-100 text-emerald-800'
                            : att.percentage >= 60
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-amber-100 text-amber-800'
                        }`}
                      >
                        {att.percentage >= 90 ? 'A+' : att.percentage >= 80 ? 'A' : att.percentage >= 70 ? 'B' : att.percentage >= 50 ? 'C' : 'F'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* 2. ACTIVE TEST ENGINE SCREEN */}
      {isTakingQuiz && currentQ && !isSubmitted && (
        <div className="space-y-4 animate-in fade-in duration-150">
          {/* Top Status Bar: Question Progress, Flag, Timer */}
          <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-2xs flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-lg bg-blue-100 text-blue-800 font-mono text-xs font-bold">
                {currentQ.courseCode}
              </span>
              <span className="text-xs font-semibold text-slate-600">
                Question {currentIndex + 1} of {totalQ}
              </span>
              <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                • {currentQ.examType}
              </span>
            </div>

            <div className="flex items-center gap-3">
              {/* Timer badge */}
              {examMode === 'timed' && (
                <div
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-mono text-xs font-bold ${
                    timeRemaining < 60
                      ? 'bg-red-100 text-red-700 animate-pulse'
                      : 'bg-slate-100 text-slate-800'
                  }`}
                >
                  <Clock className="w-3.5 h-3.5" />
                  <span>{formatTime(timeRemaining)}</span>
                </div>
              )}

              {/* Flag button */}
              <button
                onClick={() => handleToggleFlag(currentQ.id)}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-semibold border transition ${
                  flaggedQuestions.includes(currentQ.id)
                    ? 'bg-amber-500 text-white border-amber-500'
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                }`}
              >
                <Flag className="w-3 h-3" />
                <span>{flaggedQuestions.includes(currentQ.id) ? 'Flagged' : 'Flag'}</span>
              </button>

              {/* Submit early button */}
              <button
                onClick={handleSubmitQuiz}
                className="px-4 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-xs transition"
              >
                Submit Exam
              </button>
            </div>
          </div>

          {/* Main Question Card & Question Navigator */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* Left/Center: Question & Options */}
            <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-2xs space-y-6">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                {currentIndex + 1}. {cleanQuestionText(currentQ.question)}
              </h2>

              {/* Options */}
              <div className="space-y-3">
                {currentQ.options.map((option, idx) => {
                  const isSelected = selectedAnswers[currentQ.id] === idx;
                  const letter = String.fromCharCode(65 + idx); // A, B, C, D
                  
                  // In practice mode: show instant feedback
                  const showFeedback = examMode === 'practice' && selectedAnswers[currentQ.id] !== undefined;
                  const isCorrect = idx === currentQ.correctAnswer;
                  const isWrong = isSelected && !isCorrect;

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      className={`w-full text-left p-4 rounded-xl border text-xs sm:text-sm font-medium transition-all flex items-center justify-between gap-3 ${
                        showFeedback
                          ? isCorrect
                            ? 'bg-emerald-50 border-emerald-500 text-emerald-950 font-semibold'
                            : isWrong
                            ? 'bg-red-50 border-red-400 text-red-950'
                            : 'bg-slate-50 border-slate-200 text-slate-600 opacity-60'
                          : isSelected
                          ? 'bg-blue-50 border-blue-600 text-blue-950 shadow-2xs ring-1 ring-blue-600'
                          : 'bg-white border-slate-200 text-slate-800 hover:bg-slate-50 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`w-6 h-6 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${
                            isSelected
                              ? 'bg-blue-600 text-white'
                              : 'bg-slate-100 text-slate-600'
                          }`}
                        >
                          {letter}
                        </span>
                        <span>{option}</span>
                      </div>

                      {showFeedback && isCorrect && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      )}
                      {showFeedback && isWrong && (
                        <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Instant Explanation in Practice Mode */}
              {examMode === 'practice' && selectedAnswers[currentQ.id] !== undefined && (
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5 animate-in fade-in">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700">
                    <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                    <span>Explanation & Derivation:</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {currentQ.explanation}
                  </p>
                </div>
              )}

              {/* Navigation arrows */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
                  disabled={currentIndex === 0}
                  className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-40"
                >
                  ← Previous
                </button>

                <span className="text-xs text-slate-400 font-medium">
                  {answeredCount} of {totalQ} Answered
                </span>

                <button
                  onClick={() => {
                    if (currentIndex < totalQ - 1) {
                      setCurrentIndex((prev) => prev + 1);
                    } else {
                      handleSubmitQuiz();
                    }
                  }}
                  className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-xs"
                >
                  {currentIndex === totalQ - 1 ? 'Finish & Grade' : 'Next Question →'}
                </button>
              </div>
            </div>

            {/* Right: Question Matrix Navigator */}
            <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200 p-5 shadow-2xs space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Question Navigator
              </h3>

              <div className="grid grid-cols-5 gap-2">
                {quizQuestions.map((q, idx) => {
                  const isCurrent = currentIndex === idx;
                  const isAnswered = selectedAnswers[q.id] !== undefined;
                  const isFlagged = flaggedQuestions.includes(q.id);

                  let btnBg = 'bg-slate-100 text-slate-700 hover:bg-slate-200';
                  if (isCurrent) btnBg = 'ring-2 ring-blue-600 bg-blue-50 text-blue-900 font-bold';
                  else if (isFlagged) btnBg = 'bg-amber-400 text-slate-900 font-bold';
                  else if (isAnswered) btnBg = 'bg-blue-600 text-white font-semibold';

                  return (
                    <button
                      key={q.id}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-9 rounded-xl text-xs flex items-center justify-center transition ${btnBg}`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>

              {/* Legend */}
              <div className="pt-3 border-t border-slate-100 space-y-2 text-[11px] text-slate-500">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-md bg-blue-600" />
                  <span>Answered</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-md bg-amber-400" />
                  <span>Flagged for review</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-md bg-slate-100 border border-slate-200" />
                  <span>Unanswered</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. EXAM SCORE & DETAILED SOLUTION REVIEW SCREEN */}
      {isSubmitted && lastAttempt && (
        <div className="space-y-6 animate-in fade-in duration-200">
          {/* Score Header Card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center sm:text-left">
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                  Test Completed
                </span>
                <h2 className="text-2xl font-bold text-slate-900 mt-2">
                  Exam Result & Performance Analysis
                </h2>
                <p className="text-xs text-slate-500">
                  {lastAttempt.courseName} • Completed in {formatTime(lastAttempt.timeSpentSeconds)}
                </p>
              </div>

              <div className="flex items-center gap-6">
                <div className="text-center">
                  <span className="text-3xl font-extrabold text-blue-600">
                    {lastAttempt.score} / {lastAttempt.totalQuestions}
                  </span>
                  <span className="block text-xs font-semibold text-slate-500">
                    Correct Answers
                  </span>
                </div>

                <div className="h-12 w-px bg-slate-200" />

                <div className="text-center">
                  <span className="text-3xl font-extrabold text-slate-900">
                    {lastAttempt.percentage}%
                  </span>
                  <span className="block text-xs font-semibold text-slate-500">
                    Accuracy
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => {
                  setIsTakingQuiz(false);
                  setIsSubmitted(false);
                }}
                className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition"
              >
                Back to Exam Lobby
              </button>

              <button
                onClick={handleStartExam}
                className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs transition"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Retake Examination</span>
              </button>
            </div>
          </div>

          {/* Detailed Question Review List */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs space-y-4">
            <h3 className="text-sm font-bold text-slate-900">
              Detailed Question Review & Explanations ({quizQuestions.length})
            </h3>

            <div className="space-y-4">
              {quizQuestions.map((q, idx) => {
                const userSelected = selectedAnswers[q.id];
                const isCorrect = userSelected === q.correctAnswer;

                return (
                  <div
                    key={q.id}
                    className={`p-5 rounded-xl border text-xs sm:text-sm space-y-3 ${
                      isCorrect
                        ? 'bg-emerald-50/40 border-emerald-200'
                        : 'bg-red-50/40 border-red-200'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1">
                        <span className="text-[11px] font-mono font-bold text-slate-500">
                          Question {idx + 1} • {q.courseCode} ({q.year || 'Exam'})
                        </span>
                        <h4 className="font-bold text-slate-900">{idx + 1}. {cleanQuestionText(q.question)}</h4>
                      </div>

                      <span
                        className={`px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1 shrink-0 ${
                          isCorrect
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {isCorrect ? (
                          <>
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>Correct</span>
                          </>
                        ) : (
                          <>
                            <XCircle className="w-3.5 h-3.5" />
                            <span>Incorrect</span>
                          </>
                        )}
                      </span>
                    </div>

                    {/* Options list */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {q.options.map((opt, oIdx) => {
                        const isThisCorrect = oIdx === q.correctAnswer;
                        const isThisUser = oIdx === userSelected;
                        let style = 'bg-white border-slate-200 text-slate-600';

                        if (isThisCorrect) {
                          style = 'bg-emerald-100 border-emerald-500 text-emerald-950 font-bold';
                        } else if (isThisUser && !isThisCorrect) {
                          style = 'bg-red-100 border-red-400 text-red-950 line-through';
                        }

                        return (
                          <div
                            key={oIdx}
                            className={`p-2.5 rounded-lg border flex items-center justify-between gap-2 ${style}`}
                          >
                            <span>
                              {String.fromCharCode(65 + oIdx)}. {opt}
                            </span>
                            {isThisCorrect && (
                              <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {/* Explanation */}
                    <div className="p-3 bg-white/80 rounded-lg border border-slate-200 text-xs text-slate-700 leading-relaxed">
                      <strong className="text-slate-900 block mb-0.5">Solution Derivation:</strong>
                      {q.explanation}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
