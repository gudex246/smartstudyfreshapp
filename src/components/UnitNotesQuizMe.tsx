import React, { useState, useEffect, useMemo } from 'react';
import {
  Sparkles,
  CheckCircle2,
  XCircle,
  ArrowRight,
  RotateCcw,
  Lightbulb,
  Award,
  BookOpen,
  MessageSquare,
  HelpCircle,
  ChevronRight,
  BrainCircuit,
  Zap,
  Check,
  Languages
} from 'lucide-react';
import { Chapter, Course } from '../types';
import { useApp } from '../context/AppContext';
import {
  UnitQuizQuestion,
  getQuestionsForChapter,
  generateSmartStudyAIQuestionsFromNote,
  UNIT_QUIZ_BANK
} from '../data/unitQuizBank';
import { cleanSymbols } from '../utils/textUtils';

interface UnitNotesQuizMeProps {
  chapter: Chapter;
  course: Course;
  className?: string;
}

export const UnitNotesQuizMe: React.FC<UnitNotesQuizMeProps> = ({
  chapter,
  course,
  className = ''
}) => {
  const { setActiveTab } = useApp();

  // Load relevant questions for this unit
  const [activeQuizQuestions, setActiveQuizQuestions] = useState<UnitQuizQuestion[]>([]);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [quizState, setQuizState] = useState<'idle' | 'in_progress' | 'finished'>('idle');
  const [explanationLanguage, setExplanationLanguage] = useState<'en' | 'am' | 'om'>('en');
  const [userAnswersHistory, setUserAnswersHistory] = useState<{
    questionId: string;
    selected: number;
    correct: number;
    isCorrect: boolean;
  }[]>([]);
  const [aiGenerating, setAiGenerating] = useState(false);

  // Initialize questions whenever chapter changes
  useEffect(() => {
    setQuizState('idle');
    setCurrentQuestionIdx(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setShowHint(false);
    setUserAnswersHistory([]);
  }, [chapter.id]);

  const prepareQuestions = (count: number = 5) => {
    setAiGenerating(true);
    setTimeout(() => {
      let pool = getQuestionsForChapter(course.code || course.id, chapter.number);

      // If pool has fewer questions than requested, generate dynamic ones from notes
      if (pool.length < count) {
        const dynamicGenerated = generateSmartStudyAIQuestionsFromNote(chapter, course);
        pool = [...pool, ...dynamicGenerated];
      }

      // If still fewer, pull additional course-level questions
      if (pool.length === 0) {
        const fallback = generateSmartStudyAIQuestionsFromNote(chapter, course);
        pool = fallback;
      }

      // Shuffle and take requested count
      const shuffled = [...pool].sort(() => 0.5 - Math.random()).slice(0, count);
      setActiveQuizQuestions(shuffled);
      setCurrentQuestionIdx(0);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
      setScore(0);
      setShowHint(false);
      setUserAnswersHistory([]);
      setQuizState('in_progress');
      setAiGenerating(false);
    }, 350);
  };

  const currentQuestion = activeQuizQuestions[currentQuestionIdx];

  const handleSelectOption = (idx: number) => {
    if (isAnswerSubmitted) return;
    setSelectedOption(idx);
    setIsAnswerSubmitted(true);

    const isCorrect = idx === currentQuestion.correctAnswer;
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    setUserAnswersHistory((prev) => [
      ...prev,
      {
        questionId: currentQuestion.id,
        selected: idx,
        correct: currentQuestion.correctAnswer,
        isCorrect
      }
    ]);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIdx < activeQuizQuestions.length - 1) {
      setCurrentQuestionIdx((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
      setShowHint(false);
    } else {
      setQuizState('finished');
    }
  };

  const handleRetakeQuiz = () => {
    prepareQuestions(activeQuizQuestions.length || 5);
  };

  const handleDiscussInAITutor = () => {
    setActiveTab('ai-tutor');
  };

  // Get active explanation text based on language
  const getExplanationText = (q: UnitQuizQuestion) => {
    if (explanationLanguage === 'am' && q.explanationAmharic) {
      return q.explanationAmharic;
    }
    if (explanationLanguage === 'om' && q.explanationAfaanOromo) {
      return q.explanationAfaanOromo;
    }
    return q.explanation;
  };

  return (
    <div
      id={`unit-quiz-me-${chapter.id}`}
      className={`mt-10 rounded-2xl border border-indigo-500/30 bg-gradient-to-b from-[#0b1329] to-[#070c18] p-6 sm:p-8 shadow-2xl relative overflow-hidden ${className}`}
    >
      {/* Decorative ambient background accent */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Banner */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 to-violet-500 text-white flex items-center justify-center shadow-lg shadow-indigo-600/30">
            <BrainCircuit className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-black uppercase tracking-wider text-indigo-400 bg-indigo-500/10 border border-indigo-500/30 px-2 py-0.5 rounded-md">
                Smart Study AI Tutor
              </span>
              <span className="text-xs text-slate-400 font-medium hidden sm:inline">
                • Unit Knowledge Check
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mt-0.5">
              Quiz Me on This Unit: {chapter.title}
            </h3>
          </div>
        </div>

        {/* Trilingual Language Selector for AI Explanations */}
        <div className="flex items-center gap-1 bg-[#0a0f1d] border border-slate-800 p-1 rounded-xl">
          <span className="text-[11px] text-slate-400 font-semibold px-2 flex items-center gap-1">
            <Languages className="w-3.5 h-3.5 text-indigo-400" />
            AI Language:
          </span>
          <button
            onClick={() => setExplanationLanguage('en')}
            className={`px-2.5 py-1 rounded-lg text-xs font-bold transition ${
              explanationLanguage === 'en'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            English
          </button>
          <button
            onClick={() => setExplanationLanguage('am')}
            className={`px-2.5 py-1 rounded-lg text-xs font-bold transition ${
              explanationLanguage === 'am'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            አማርኛ
          </button>
          <button
            onClick={() => setExplanationLanguage('om')}
            className={`px-2.5 py-1 rounded-lg text-xs font-bold transition ${
              explanationLanguage === 'om'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Oromoo
          </button>
        </div>
      </div>

      {/* STATE 1: IDLE / READY TO START */}
      {quizState === 'idle' && (
        <div className="relative z-10 py-6 sm:py-8 space-y-6">
          <div className="max-w-2xl">
            <p className="text-sm text-slate-300 leading-relaxed">
              Cement your retention of{' '}
              <span className="text-indigo-300 font-bold">{chapter.title}</span>. Smart Study AI
              has analyzed this unit's principles, definitions, and formulas to ask you high-yield
              exam questions with step-by-step trilingual explanations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <button
              onClick={() => prepareQuestions(3)}
              disabled={aiGenerating}
              className="p-4 rounded-xl border border-indigo-500/30 bg-[#0c1429] hover:bg-indigo-950/40 hover:border-indigo-500 text-left transition group space-y-2 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-xs">
                  <Zap className="w-4 h-4" />
                </span>
                <span className="text-[11px] font-bold text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded">
                  ~2 Mins
                </span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-white group-hover:text-indigo-300 transition">
                  Quick 3-Question Drill
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Rapid recall of the most tested core definitions.
                </p>
              </div>
            </button>

            <button
              onClick={() => prepareQuestions(5)}
              disabled={aiGenerating}
              className="p-4 rounded-xl border border-indigo-500/50 bg-gradient-to-b from-indigo-950/50 to-[#0c1429] hover:border-indigo-400 text-left transition group space-y-2 shadow-md relative"
            >
              <div className="absolute -top-2.5 right-3 bg-indigo-500 text-[10px] font-black uppercase text-white px-2 py-0.5 rounded-full shadow-xs">
                Recommended
              </div>
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-lg bg-indigo-500 text-white flex items-center justify-center font-bold text-xs">
                  <Award className="w-4 h-4" />
                </span>
                <span className="text-[11px] font-bold text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded">
                  ~5 Mins
                </span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-white group-hover:text-indigo-300 transition">
                  Standard 5-Question Exam
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Covers key formulas, contrast pairs, and problem solving.
                </p>
              </div>
            </button>

            <button
              onClick={() => prepareQuestions(8)}
              disabled={aiGenerating}
              className="p-4 rounded-xl border border-slate-800 bg-[#0c1429] hover:bg-indigo-950/40 hover:border-indigo-500 text-left transition group space-y-2 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-lg bg-violet-500/20 text-violet-400 flex items-center justify-center font-bold text-xs">
                  <BrainCircuit className="w-4 h-4" />
                </span>
                <span className="text-[11px] font-bold text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded">
                  ~8 Mins
                </span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-white group-hover:text-violet-300 transition">
                  Unit Mastery Challenge
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Deep dive testing every section of this lecture note.
                </p>
              </div>
            </button>
          </div>
        </div>
      )}

      {/* STATE 2: ACTIVE QUIZ IN PROGRESS */}
      {quizState === 'in_progress' && currentQuestion && (
        <div className="relative z-10 py-6 space-y-6">
          {/* Progress Bar & Status */}
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="font-bold text-indigo-400">
              Question {currentQuestionIdx + 1} of {activeQuizQuestions.length}
            </span>
            <div className="flex items-center gap-3">
              {currentQuestion.topic && (
                <span className="hidden sm:inline bg-slate-800/90 text-slate-300 px-2 py-0.5 rounded font-mono text-[11px]">
                  Topic: {currentQuestion.topic}
                </span>
              )}
              <span className="font-bold text-white">
                Score: {score} / {currentQuestionIdx + (isAnswerSubmitted ? 1 : 0)}
              </span>
            </div>
          </div>

          {/* Progress Track */}
          <div className="w-full bg-slate-800/80 h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-indigo-500 h-full transition-all duration-300 rounded-full"
              style={{
                width: `${((currentQuestionIdx + 1) / activeQuizQuestions.length) * 100}%`
              }}
            />
          </div>

          {/* Question Prompt */}
          <div className="space-y-3">
            <div className="flex items-start justify-between gap-4">
              <h4 className="text-base sm:text-lg font-semibold text-white leading-relaxed">
                {cleanSymbols(currentQuestion.question)}
              </h4>
              {currentQuestion.hint && !showHint && !isAnswerSubmitted && (
                <button
                  onClick={() => setShowHint(true)}
                  className="shrink-0 flex items-center gap-1 text-xs text-amber-400 hover:text-amber-300 bg-amber-500/10 border border-amber-500/30 px-2.5 py-1 rounded-lg transition"
                >
                  <Lightbulb className="w-3.5 h-3.5" />
                  <span>AI Hint</span>
                </button>
              )}
            </div>

            {/* Smart Study AI Hint Box */}
            {showHint && currentQuestion.hint && (
              <div className="p-3.5 rounded-xl bg-amber-950/30 border border-amber-500/40 text-xs text-amber-200 flex items-start gap-2.5">
                <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-amber-300">Smart Study AI Hint: </span>
                  {currentQuestion.hint}
                </div>
              </div>
            )}
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-1 gap-2.5">
            {currentQuestion.options.map((option, idx) => {
              const isSelected = selectedOption === idx;
              const isCorrectAnswer = idx === currentQuestion.correctAnswer;

              let optionStyle =
                'bg-[#0a0f1d] border-slate-800 text-slate-300 hover:border-indigo-500/60 hover:bg-[#0c1429]';

              if (isAnswerSubmitted) {
                if (isCorrectAnswer) {
                  optionStyle =
                    'bg-emerald-950/50 border-emerald-500 text-emerald-100 shadow-sm shadow-emerald-500/20';
                } else if (isSelected && !isCorrectAnswer) {
                  optionStyle = 'bg-rose-950/50 border-rose-500 text-rose-100';
                } else {
                  optionStyle = 'bg-[#0a0f1d]/60 border-slate-800 text-slate-500 opacity-60';
                }
              } else if (isSelected) {
                optionStyle = 'bg-indigo-950/40 border-indigo-500 text-white';
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={isAnswerSubmitted}
                  className={`w-full p-3.5 sm:p-4 rounded-xl border text-left text-xs sm:text-sm font-medium transition flex items-center justify-between gap-3 ${optionStyle}`}
                >
                  <span className="leading-snug">{cleanSymbols(option)}</span>
                  {isAnswerSubmitted && (
                    <div className="shrink-0">
                      {isCorrectAnswer && <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
                      {isSelected && !isCorrectAnswer && (
                        <XCircle className="w-5 h-5 text-rose-400" />
                      )}
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Detailed Smart Study AI Explanation Box */}
          {isAnswerSubmitted && (
            <div className="p-4 sm:p-5 rounded-xl bg-[#0c152d] border border-indigo-500/40 space-y-3 animate-in fade-in duration-300">
              <div className="flex items-center justify-between border-b border-indigo-900/50 pb-2.5">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-indigo-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-300">
                    Smart Study AI Explanation
                  </span>
                  <span className="text-[10px] text-indigo-400/80 bg-indigo-500/20 px-2 py-0.5 rounded">
                    {explanationLanguage === 'en'
                      ? 'English'
                      : explanationLanguage === 'am'
                      ? 'አማርኛ'
                      : 'Afaan Oromoo'}
                  </span>
                </div>
                {selectedOption === currentQuestion.correctAnswer ? (
                  <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> Correct! +1 Point
                  </span>
                ) : (
                  <span className="text-xs font-bold text-rose-400">Review Concept</span>
                )}
              </div>

              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed whitespace-pre-line">
                {cleanSymbols(getExplanationText(currentQuestion))}
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-[11px] text-indigo-300">
                  <BookOpen className="w-3.5 h-3.5" />
                  Directly derived from {course.code} Unit {chapter.number} Notes
                </span>

                <button
                  onClick={handleNextQuestion}
                  className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs sm:text-sm flex items-center gap-1.5 shadow-md transition ml-auto"
                >
                  <span>
                    {currentQuestionIdx < activeQuizQuestions.length - 1
                      ? 'Next Question'
                      : 'Complete Quiz & View Score'}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* STATE 3: COMPLETED RESULTS & MASTERY REPORT */}
      {quizState === 'finished' && (
        <div className="relative z-10 py-6 sm:py-8 space-y-6 text-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-indigo-500 to-violet-500 text-white mx-auto flex items-center justify-center shadow-lg shadow-indigo-600/30">
            <Award className="w-8 h-8" />
          </div>

          <div className="space-y-1.5">
            <h4 className="text-xl sm:text-2xl font-black text-white">
              Unit {chapter.number} Quiz Completed!
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              You scored <span className="font-bold text-indigo-300">{score}</span> out of{' '}
              <span className="font-bold text-white">{activeQuizQuestions.length}</span> (
              {Math.round((score / activeQuizQuestions.length) * 100)}%)
            </p>
          </div>

          {/* AI Assessment & Feedback Badge */}
          <div className="max-w-lg mx-auto p-4 rounded-xl bg-[#0a0f1d] border border-slate-800 text-left space-y-2 text-xs">
            <div className="font-bold text-indigo-300 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Smart Study AI Academic Assessment:</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              {score === activeQuizQuestions.length
                ? `Outstanding! You demonstrated 100% mastery on ${chapter.title}. You have firm command over the definitions, formulas, and distinctions needed for university midterm and final exams.`
                : score >= activeQuizQuestions.length * 0.7
                ? `Well done! Solid understanding of ${chapter.title}. Review the missed concepts above in your lecture notes to secure full marks on exam day.`
                : `Good effort! You encountered some tricky questions on ${chapter.title}. We recommend re-reading the lecture notes above and trying another quiz.`}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={handleRetakeQuiz}
              className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md transition"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retake with Fresh AI Questions</span>
            </button>

            <button
              onClick={handleDiscussInAITutor}
              className="px-5 py-2.5 rounded-xl bg-[#0a0f1d] hover:bg-[#131b2e] border border-indigo-500/30 text-indigo-300 font-bold text-xs sm:text-sm flex items-center gap-2 transition"
            >
              <MessageSquare className="w-4 h-4 text-indigo-400" />
              <span>Ask AI Tutor About This Unit</span>
            </button>

            <button
              onClick={() => {
                const notesContainer = document.getElementById(`chapter-notes-top-${chapter.id}`);
                if (notesContainer) {
                  notesContainer.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="px-4 py-2.5 rounded-xl border border-slate-800 text-slate-400 hover:text-white text-xs font-semibold transition"
            >
              Back to Notes ↑
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
