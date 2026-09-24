import React from 'react';
import {
  Calendar,
  Flag,
  Check,
  XCircle,
  HelpCircle,
  CheckCircle2,
  Sparkles,
  Lock
} from 'lucide-react';
import { ExamQuestion } from '../types';
import { cleanSymbols, cleanQuestionText, cleanOptionText } from '../utils/textUtils';

interface QuestionCardProps {
  question: ExamQuestion;
  index: number;
  examMode: 'practice' | 'timed';
  selectedAnswer?: number;
  isFlagged?: boolean;
  showHint?: boolean;
  showExplanation?: boolean;
  selectedExplanationLang: 'all' | 'en' | 'am' | 'om';
  isLocked?: boolean;
  onUnlockClick?: () => void;
  onSelectOption: (optionIndex: number) => void;
  onToggleFlag: () => void;
  onToggleHint: () => void;
  onToggleExplanation: () => void;
  onSetExplanationLang: (lang: 'all' | 'en' | 'am' | 'om') => void;
  onAskAiTutor: () => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  index,
  examMode,
  selectedAnswer,
  isFlagged,
  showHint,
  showExplanation,
  selectedExplanationLang,
  isLocked,
  onUnlockClick,
  onSelectOption,
  onToggleFlag,
  onToggleHint,
  onToggleExplanation,
  onSetExplanationLang,
  onAskAiTutor,
}) => {
  const isTF = question.questionType === 'true_false' || question.options.length === 2;
  const hasAnswered = selectedAnswer !== undefined;
  const isCorrect = selectedAnswer === question.correctAnswer;
  const isExplanationOpen = showExplanation || (examMode === 'practice' && hasAnswered);

  const getFormatLabel = () => {
    if (question.questionType === 'true_false' || isTF) {
      return 'True / False';
    }
    if (question.questionType === 'matching' || question.question.toLowerCase().includes('match column')) {
      return 'Matching';
    }
    if (question.questionType === 'workout' || question.topic?.toLowerCase().includes('workout')) {
      return 'Problem Solving';
    }
    return 'Multiple Choice';
  };

  // Mathematics questions are strictly English only as requested
  const isMath =
    question.courseCode === 'Math 1011' ||
    question.courseId === 'math-1011' ||
    (question.courseCode?.toLowerCase().includes('math') ?? false);
  const hasMultilingual = !isMath && Boolean(question.explanationAmharic || question.explanationAfaanOromo);

  return (
    <div
      id={`question-card-${question.id}`}
      className="bg-[#0f172a]/95 border border-[#1e293b] hover:border-slate-700/80 rounded-2xl p-5 sm:p-7 shadow-xl backdrop-blur-sm space-y-5 transition-colors duration-150 scroll-mt-24"
    >
      {/* 1. Header Row */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800/80">
        <div className="flex flex-wrap items-center gap-2.5">
          {/* Question Number Badge */}
          <span className="bg-indigo-600 text-white font-black text-xs px-3 py-1.5 rounded-lg shadow-sm">
            Question {index + 1}
          </span>

          {/* Course Code Pill */}
          <span className="bg-indigo-950/70 text-indigo-300 border border-indigo-700/50 text-xs font-bold px-3 py-1 rounded-lg">
            {question.courseCode || 'Course'}
          </span>

          {/* Question Format Badge (True/False, Multiple Choice, Matching, Problem Solving) */}
          <span
            className={`text-xs font-bold px-2.5 py-1 rounded-lg border ${
              isTF
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 font-extrabold'
                : 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40'
            }`}
          >
            {getFormatLabel()}
          </span>

          {/* Exam Category & Year Badge */}
          <span
            className={`text-xs font-bold px-2.5 py-1 rounded-lg flex items-center gap-1.5 border ${
              question.examType === 'midterm'
                ? 'bg-amber-950/60 text-amber-300 border-amber-700/50'
                : question.examType === 'final'
                ? 'bg-emerald-950/60 text-emerald-300 border-emerald-700/50'
                : 'bg-purple-950/60 text-purple-300 border-purple-700/50'
            }`}
          >
            <Calendar className="w-3 h-3" />
            <span>
              {question.examType === 'midterm'
                ? 'Mid Terms Exam'
                : question.examType === 'final'
                ? 'Final Terms Exam'
                : 'Smart Study Model Exam'}
              {question.year ? ` • ${question.year}` : ''}
            </span>
          </span>

          {/* Subtopic */}
          {question.topic && (
            <span className="text-xs font-medium text-slate-400 hidden lg:inline">
              {cleanSymbols(question.topic)}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          {/* Flag button */}
          <button
            onClick={onToggleFlag}
            className={`p-1.5 rounded-lg border text-xs transition ${
              isFlagged
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                : 'bg-[#0a0f1d] text-slate-400 border-[#1e293b] hover:text-slate-200'
            }`}
            title="Flag for review"
          >
            <Flag className="w-3.5 h-3.5" />
          </button>

          {/* Difficulty & Points Pill */}
          <span className="bg-emerald-950/80 text-emerald-400 border border-emerald-700/60 text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
            {question.difficulty} • {question.points || 10} PTS
          </span>
        </div>
      </div>

      {/* 2. Question Text & Content / Locked Paywall */}
      {isLocked ? (
        <div className="space-y-4">
          {/* Blurred/obscured teaser line indicating the question text is locked */}
          <div className="relative py-3 px-4 rounded-xl bg-[#0a0f1d] border border-slate-800/80 overflow-hidden select-none">
            <div className="filter blur-md opacity-30 text-slate-300 text-sm sm:text-base font-medium select-none pointer-events-none line-clamp-2">
              {index + 1}. Which of the following fundamental principles correctly determines the theoretical framework and solutions for this university examination problem under relative grading?
            </div>
            <div className="absolute inset-0 flex items-center justify-center gap-2 bg-black/50 backdrop-blur-[2px]">
              <Lock className="w-4 h-4 text-amber-400" />
              <span className="text-xs sm:text-sm font-extrabold text-amber-300 tracking-wide">
                Question {index + 1} is Locked — 300 ETB Access
              </span>
            </div>
          </div>

          {/* Pro Curriculum Locked Paywall Overlay */}
          <div className="bg-gradient-to-b from-[#111c38] to-[#0a1020] border border-amber-500/40 rounded-2xl p-6 sm:p-7 text-center space-y-4 shadow-xl">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-400 mx-auto flex items-center justify-center shadow-lg shadow-amber-500/10">
              <Lock className="w-7 h-7 text-amber-400" />
            </div>
            <div className="space-y-2 max-w-lg mx-auto">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[11px] font-extrabold uppercase tracking-wider">
                <span>Free Preview: First 4 Questions Only</span>
              </div>
              <h3 className="text-base sm:text-lg font-black text-white tracking-tight">
                Unlock Question {index + 1} &amp; Full Question Bank
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Only the first 4 questions are available in the free student preview. To view Question {index + 1} and unlock the full 1,000+ past exam questions, step-by-step 3-language solutions (English, Amharic &amp; Afaan Oromoo), lecture videos, and notes, you must pay the <strong className="text-amber-400">300 ETB</strong> subscription fee.
              </p>
            </div>

            {/* CBE & Telebirr Payment Details Card */}
            <div className="bg-[#070b16] border border-amber-500/30 rounded-xl p-3.5 max-w-md mx-auto text-left text-xs space-y-2 shadow-inner">
              <div className="flex items-center justify-between border-b border-slate-800 pb-1.5">
                <span className="text-[11px] font-extrabold text-amber-400 uppercase tracking-wider">
                  Payment Accounts (300 ETB)
                </span>
                <span className="text-[10px] text-slate-400 font-semibold">Guduru Alemayehu</span>
              </div>
              <div className="flex items-center justify-between text-slate-200">
                <span className="font-semibold flex items-center gap-1.5">
                  🏦 CBE Account:
                </span>
                <code className="text-amber-300 font-mono font-bold bg-[#0d162a] px-2 py-0.5 rounded border border-slate-700">
                  1000521750255
                </code>
              </div>
              <div className="flex items-center justify-between text-slate-200">
                <span className="font-semibold flex items-center gap-1.5">
                  📱 Telebirr:
                </span>
                <code className="text-amber-300 font-mono font-bold bg-[#0d162a] px-2 py-0.5 rounded border border-slate-700">
                  0953201048
                </code>
              </div>
            </div>

            <div className="pt-1 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                id={`unlock-btn-q-${index + 1}`}
                onClick={onUnlockClick}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm inline-flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <Sparkles className="w-4 h-4 fill-slate-950" />
                <span>Pay 300 ETB to Unlock Question {index + 1}</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* Question Text */}
          <div className="pt-0.5">
            <h2 className="text-white text-base sm:text-lg font-bold tracking-tight leading-relaxed">
              {index + 1}. {cleanQuestionText(question.question)}
            </h2>
          </div>

          {/* 3. Options Grid */}
          <div
            className={`grid gap-3.5 pt-1 ${
              isTF ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1 md:grid-cols-2'
            }`}
          >
        {question.options.map((optionText, optIdx) => {
          const optionLetter = String.fromCharCode(65 + optIdx); // A, B, C, D
          const isSelected = selectedAnswer === optIdx;
          const isThisOptionCorrect = optIdx === question.correctAnswer;

          let cardStyles =
            'bg-[#0a0f1d] border-[#1e293b] hover:border-indigo-500/60 text-slate-200';
          let badgeStyles = 'bg-[#1e293b] text-slate-300';

          if (examMode === 'practice' && hasAnswered) {
            if (isThisOptionCorrect) {
              cardStyles = 'bg-emerald-950/40 border-emerald-500/80 text-emerald-100 ring-1 ring-emerald-500/30';
              badgeStyles = 'bg-emerald-500 text-slate-950 font-black';
            } else if (isSelected && !isThisOptionCorrect) {
              cardStyles = 'bg-rose-950/40 border-rose-500/80 text-rose-100 ring-1 ring-rose-500/30';
              badgeStyles = 'bg-rose-500 text-white font-black';
            }
          } else if (isSelected) {
            cardStyles = 'bg-indigo-950/40 border-indigo-500 text-white ring-1 ring-indigo-500/40';
            badgeStyles = 'bg-indigo-600 text-white';
          }

          return (
            <div
              key={optIdx}
              id={`q-${question.id}-opt-${optIdx}`}
              onClick={() => onSelectOption(optIdx)}
              className={`p-4 rounded-xl border flex items-center gap-3.5 cursor-pointer transition-all duration-150 select-none ${cardStyles}`}
            >
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${badgeStyles}`}
              >
                {examMode === 'practice' && hasAnswered && isThisOptionCorrect ? (
                  <Check className="w-4 h-4 stroke-[3]" />
                ) : examMode === 'practice' && hasAnswered && isSelected && !isThisOptionCorrect ? (
                  <XCircle className="w-4 h-4" />
                ) : (
                  optionLetter
                )}
              </div>
              <span className="text-sm font-medium leading-normal flex-1">
                {cleanOptionText(optionText)}
              </span>
            </div>
          );
        })}
      </div>

      {/* 4. Hint Drawer */}
      {showHint && (
        <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-500/40 text-amber-200 text-xs sm:text-sm space-y-1 animate-in fade-in duration-200">
          <div className="font-bold flex items-center gap-1.5 text-amber-400">
            <HelpCircle className="w-4 h-4" />
            <span>Helpful Hint:</span>
          </div>
          <p className="text-slate-300">
            {cleanSymbols(
              question.hint ||
                'Review the core definition and eliminate clearly false options first.'
            )}
          </p>
        </div>
      )}

      {/* 5. Multilingual Explanation Section (In 3 Dedicated Places for English, Amharic, and Afan Oromo) */}
      {isExplanationOpen && (
        <div className="p-4 sm:p-5 rounded-2xl bg-[#080d1a] border border-indigo-500/40 text-slate-300 text-xs sm:text-sm space-y-4 shadow-xl">
          {/* Verified Official Answer & Language Switcher Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3.5 border-b border-[#1e293b]">
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </span>
              <div>
                <span className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold block">
                  Verified Official Answer
                </span>
                <span className="text-sm sm:text-base font-bold text-white">
                  Option {String.fromCharCode(65 + question.correctAnswer)}: {cleanSymbols(question.options[question.correctAnswer])}
                </span>
              </div>
            </div>

            {/* Language Selector Pills (Only for courses with 3-language explanations, avoided for Mathematics) */}
            {hasMultilingual ? (
              <div className="flex items-center gap-1 p-1 bg-[#0f172a] rounded-xl border border-[#1e293b] self-start sm:self-auto">
                <button
                  onClick={() => onSetExplanationLang('all')}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1 ${
                    selectedExplanationLang === 'all'
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                  title="Display all three languages in separate dedicated cards"
                >
                  <span>All 3 Languages</span>
                </button>
                <button
                  onClick={() => onSetExplanationLang('en')}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1 ${
                    selectedExplanationLang === 'en'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <span>🇬🇧 English</span>
                </button>
                <button
                  onClick={() => onSetExplanationLang('am')}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1 ${
                    selectedExplanationLang === 'am'
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <span>🇪🇹 አማርኛ</span>
                </button>
                <button
                  onClick={() => onSetExplanationLang('om')}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1 ${
                    selectedExplanationLang === 'om'
                      ? 'bg-amber-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <span>🌳 Afaan Oromoo</span>
                </button>
              </div>
            ) : (
              <span className="px-3 py-1.5 rounded-xl bg-blue-950/70 text-blue-300 border border-blue-800/50 text-xs font-bold self-start sm:self-auto flex items-center gap-1.5 shadow-sm">
                <span>🇬🇧 English Explanation</span>
              </span>
            )}
          </div>

          {/* Explanation Content: Single English Card for Mathematics; 3 Language Cards for Multilingual Courses */}
          {!hasMultilingual ? (
            <div className="p-4 sm:p-5 rounded-xl bg-[#0c1427] border border-blue-500/30 space-y-2.5 shadow-sm">
              <div className="flex items-center justify-between border-b border-blue-900/40 pb-2">
                <span className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-md bg-blue-500/20 text-blue-300 text-[11px] font-black uppercase tracking-wider">
                    🇬🇧 Step-by-Step Mathematical Solution
                  </span>
                  <span className="text-slate-400 text-xs hidden sm:inline">
                    Clean Step-by-Step Working &amp; Verification
                  </span>
                </span>
                <span className="text-[10px] font-mono text-blue-400 font-bold">ENGLISH ONLY</span>
              </div>
              <p className="text-slate-200 leading-relaxed whitespace-pre-line text-xs sm:text-sm font-normal">
                {cleanSymbols(question.explanation)}
              </p>
            </div>
          ) : (
            <div className="space-y-3.5">
              {/* 1. English Explanation Card */}
              {(selectedExplanationLang === 'all' || selectedExplanationLang === 'en') && (
                <div className="p-4 rounded-xl bg-[#0c1427] border border-blue-500/30 space-y-2 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded-md bg-blue-500/20 text-blue-300 text-[11px] font-black uppercase tracking-wider">
                        🇬🇧 English Explanation
                      </span>
                      <span className="text-slate-400 text-xs hidden sm:inline">
                        Academic Rationale &amp; Concepts
                      </span>
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">EN</span>
                  </div>
                  <p className="text-slate-200 leading-relaxed whitespace-pre-line text-xs sm:text-sm">
                    {cleanSymbols(question.explanation)}
                  </p>
                </div>
              )}

              {/* 2. Amharic Explanation Card (የአማርኛ ማብራሪያ) */}
              {(selectedExplanationLang === 'all' || selectedExplanationLang === 'am') && (
                <div className="p-4 rounded-xl bg-[#0c1427] border border-emerald-500/30 space-y-2 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 text-[11px] font-black uppercase tracking-wider">
                        🇪🇹 የአማርኛ ማብራሪያ (Amharic Explanation)
                      </span>
                      <span className="text-slate-400 text-xs hidden sm:inline">
                        {question.topic ? `${question.topic} - ማብራሪያ` : 'ዝርዝር የፅንሰ-ሀሳብ ማብራሪያ'}
                      </span>
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">AM</span>
                  </div>
                  <p className="text-slate-200 leading-relaxed whitespace-pre-line text-xs sm:text-sm">
                    {question.explanationAmharic
                      ? cleanSymbols(question.explanationAmharic)
                      : cleanSymbols(question.explanation)}
                  </p>
                </div>
              )}

              {/* 3. Afan Oromo Explanation Card (Ibsa Afaan Oromoo) */}
              {(selectedExplanationLang === 'all' || selectedExplanationLang === 'om') && (
                <div className="p-4 rounded-xl bg-[#0c1427] border border-amber-500/30 space-y-2 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-300 text-[11px] font-black uppercase tracking-wider">
                        🌳 Ibsa Afaan Oromoo (Afan Oromo Explanation)
                      </span>
                      <span className="text-slate-400 text-xs hidden sm:inline">
                        {question.topic ? `${question.topic} - Ibsa` : 'Ibsa Dabalataa'}
                      </span>
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">OM</span>
                  </div>
                  <p className="text-slate-200 leading-relaxed whitespace-pre-line text-xs sm:text-sm">
                    {question.explanationAfaanOromo
                      ? cleanSymbols(question.explanationAfaanOromo)
                      : cleanSymbols(question.explanation)}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* 6. Card Actions Footer (No Next/Previous buttons!) */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-800 text-xs">
        <div className="flex flex-wrap items-center gap-4">
          <button
            onClick={onToggleHint}
            className="text-slate-400 hover:text-indigo-300 flex items-center gap-1.5 transition"
          >
            <HelpCircle className="w-4 h-4 text-slate-400" />
            <span>{showHint ? 'Hide Hint' : 'View Hint'}</span>
          </button>

          <button
            onClick={onToggleExplanation}
            className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5 transition font-semibold"
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>
              {showExplanation
                ? isMath
                  ? 'Hide Explanation'
                  : 'Hide Explanations'
                : isMath
                ? 'View Explanation (English)'
                : 'View Explanations (3 Languages)'}
            </span>
          </button>

          <button
            onClick={onAskAiTutor}
            className="text-indigo-400 hover:text-indigo-300 flex items-center gap-1.5 transition font-bold"
          >
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span>Ask AI Tutor to Explain</span>
          </button>
        </div>

        {/* Status Indicator for this question */}
        <div className="flex items-center gap-2">
          {hasAnswered ? (
            <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2.5 py-1 rounded-lg">
              <Check className="w-3.5 h-3.5" />
              <span>
                Answered {isCorrect && examMode === 'practice' ? `(Correct +${question.points || 10})` : ''}
              </span>
            </span>
          ) : (
            <span className="text-xs text-slate-500">
              Not answered yet
            </span>
          )}
        </div>
      </div>
        </>
      )}
    </div>
  );
};
