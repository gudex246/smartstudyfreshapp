import React, { useState, useMemo, useEffect } from 'react';
import {
  Layers,
  Search,
  Timer,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Flag,
  Award,
  Send,
  Bot,
  Check,
  Zap,
  Bookmark,
  Shuffle,
  Lock
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ExamQuestion } from '../types';
import { cleanSymbols, cleanQuestionText } from '../utils/textUtils';
import { QuestionCard } from './QuestionCard';

export const QuestionsTab: React.FC = () => {
  const { questions, courses, isUnlocked, isAdmin, unlockAllForAdmin, setActiveTab, resetQuestionsToDefault } = useApp();

  // Mode state: 'practice' or 'timed'
  const [examMode, setExamMode] = useState<'practice' | 'timed'>('practice');

  // Filter states - default to Psychology 2015 Midterm (2015 E.C.)
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCourse, setSelectedCourse] = useState<string>('Psyc 1011');
  const [selectedExamType, setSelectedExamType] = useState<'all' | 'midterm' | 'final' | 'model'>('midterm');
  const [selectedYear, setSelectedYear] = useState<string>('2015');
  const [selectedQuestionType, setSelectedQuestionType] = useState<'all' | 'true_false' | 'multiple_choice'>('all');
  const [selectedExplanationLang, setSelectedExplanationLang] = useState<'all' | 'en' | 'am' | 'om'>('all');

  // Practice & Question state
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [showHintMap, setShowHintMap] = useState<Record<string, boolean>>({});
  const [showExplanationMap, setShowExplanationMap] = useState<Record<string, boolean>>({});
  const [flaggedMap, setFlaggedMap] = useState<Record<string, boolean>>({});
  const [userScore, setUserScore] = useState(0);

  // AI Tutor Modal / Drawer
  const [aiTutorOpen, setAiTutorOpen] = useState(false);
  const [activeAiQuestion, setActiveAiQuestion] = useState<ExamQuestion | null>(null);
  const [activeAiIndex, setActiveAiIndex] = useState<number>(0);
  const [aiChatMessages, setAiChatMessages] = useState<{ role: 'user' | 'assistant'; text: string }[]>([]);
  const [aiInputText, setAiInputText] = useState('');
  const [isAiGenerating, setIsAiGenerating] = useState(false);

  // Timed Exam Mode states
  const [timedSecondsLeft, setTimedSecondsLeft] = useState(30 * 60); // 30 mins
  const [isTimedRunning, setIsTimedRunning] = useState(false);
  const [isTimedSubmitted, setIsTimedSubmitted] = useState(false);

  // Timer countdown
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (examMode === 'timed' && isTimedRunning && !isTimedSubmitted) {
      interval = setInterval(() => {
        setTimedSecondsLeft((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            setIsTimedSubmitted(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [examMode, isTimedRunning, isTimedSubmitted]);

  // Filtered questions
  const filteredQuestions = useMemo(() => {
    return questions.filter((q) => {
      // Strictly avoid matching and blank space question types as user requested:
      // "avoid matching part and blank spaces and explain do true and false and choice parts"
      const rawType = (q as any).questionType;
      if (rawType === 'matching' || rawType === 'blank_space' || rawType === 'fill_in_blank') {
        return false;
      }

      // Course filter
      if (selectedCourse !== 'all') {
        const matchesCourse =
          q.courseCode.toLowerCase().includes(selectedCourse.toLowerCase()) ||
          q.courseId.toLowerCase().includes(selectedCourse.toLowerCase()) ||
          (selectedCourse.toLowerCase().includes('psyc') && (q.courseCode.toLowerCase().includes('psyc') || q.courseId.toLowerCase().includes('psyc'))) ||
          (selectedCourse.toLowerCase().includes('geog') && (q.courseCode.toLowerCase().includes('gees') || q.courseId.toLowerCase().includes('geog') || q.courseCode.toLowerCase().includes('geog'))) ||
          (selectedCourse.toLowerCase().includes('gees') && (q.courseCode.toLowerCase().includes('gees') || q.courseId.toLowerCase().includes('geog')));
        if (!matchesCourse) return false;
      }

      // Exam Category / Type filter (Midterm, Final, Smart Study Model)
      if (selectedExamType !== 'all') {
        if (q.examType !== selectedExamType) {
          return false;
        }
      }

      // Year filter
      if (selectedYear !== 'all') {
        if (!q.year || !q.year.toLowerCase().includes(selectedYear.toLowerCase())) {
          return false;
        }
      }

      // Question Type filter: True/False vs Choice
      if (selectedQuestionType !== 'all') {
        const isTF = q.questionType === 'true_false' || q.options.length === 2;
        if (selectedQuestionType === 'true_false' && !isTF) return false;
        if (selectedQuestionType === 'multiple_choice' && isTF) return false;
      }

      // Search keyword filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesText =
          q.question.toLowerCase().includes(query) ||
          (q.topic && q.topic.toLowerCase().includes(query)) ||
          q.options.some((opt) => opt.toLowerCase().includes(query)) ||
          q.explanation.toLowerCase().includes(query) ||
          (q.explanationAmharic && q.explanationAmharic.toLowerCase().includes(query)) ||
          (q.explanationAfaanOromo && q.explanationAfaanOromo.toLowerCase().includes(query));
        if (!matchesText) return false;
      }

      return true;
    });
  }, [questions, selectedCourse, selectedExamType, selectedYear, selectedQuestionType, searchQuery]);

  // Keep index in bounds
  useEffect(() => {
    if (currentQuestionIndex >= filteredQuestions.length && filteredQuestions.length > 0) {
      setCurrentQuestionIndex(0);
    }
  }, [filteredQuestions.length, currentQuestionIndex]);

  const answeredCount = useMemo(() => {
    return filteredQuestions.filter((q) => selectedAnswers[q.id] !== undefined).length;
  }, [filteredQuestions, selectedAnswers]);

  const areAllExplanationsOpen = useMemo(() => {
    return (
      filteredQuestions.length > 0 &&
      filteredQuestions.every((q) => showExplanationMap[q.id])
    );
  }, [filteredQuestions, showExplanationMap]);

  const handleToggleAllExplanations = () => {
    const nextState = !areAllExplanationsOpen;
    const newMap: Record<string, boolean> = { ...showExplanationMap };
    filteredQuestions.forEach((q) => {
      newMap[q.id] = nextState;
    });
    setShowExplanationMap(newMap);
  };

  const handleSelectOption = (questionId: string, optionIndex: number) => {
    if (examMode === 'timed' && isTimedSubmitted) return;

    // Save choice
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionIndex
    }));

    if (examMode === 'practice') {
      const q = questions.find((item) => item.id === questionId);
      if (q && optionIndex === q.correctAnswer) {
        setUserScore((prev) => prev + (q.points || 10));
      }
    }
  };

  const toggleHint = (questionId: string) => {
    setShowHintMap((prev) => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  const toggleExplanation = (questionId: string) => {
    setShowExplanationMap((prev) => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  const toggleFlag = (questionId: string) => {
    setFlaggedMap((prev) => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  const handleAskAiTutor = (q: ExamQuestion, questionNumber?: number) => {
    setActiveAiQuestion(q);
    const qNum = questionNumber !== undefined ? questionNumber : (filteredQuestions.findIndex((item) => item.id === q.id) + 1);
    setActiveAiIndex(qNum);
    setAiTutorOpen(true);

    let intro = `Hello! I am your Smart Study AI Tutor. Let us examine Question ${qNum}:\n\n"${cleanQuestionText(q.question)}"\n\nCourse: ${q.courseCode}\nTopic: ${cleanSymbols(q.topic || q.courseCode)}\n\nCore Concept: ${cleanSymbols(q.hint || 'Analyze the underlying theoretical principles.')}`;

    const isMath =
      q.courseCode === 'Math 1011' ||
      q.courseId === 'math-1011' ||
      (q.courseCode?.toLowerCase().includes('math') ?? false);

    if (isMath) {
      intro += `\n\nMathematical Solution (English Only):\nThis question features a complete verified mathematical solution written strictly in English. Would you like me to walk through the algebraic derivation, proof steps, or fundamental theorems?`;
    } else if (q.explanationAmharic || q.explanationAfaanOromo) {
      intro += `\n\nMultilingual Explanations Available:\nThis question has full verified explanations in English, Amharic, and Afan Oromo without any distracting symbols. Would you like me to explain in English, በአማርኛ (Amharic), or Afaan Oromootiin?`;
    } else {
      intro += `\n\nWould you like me to walk you through the step-by-step solution, explain why the correct choice works, or clarify the key principles tested in this question?`;
    }

    setAiChatMessages([
      {
        role: 'assistant',
        text: intro
      }
    ]);
  };

  const handleSendAiMessage = () => {
    if (!aiInputText.trim() || isAiGenerating || !activeAiQuestion) return;

    const userMsg = aiInputText.trim();
    setAiInputText('');
    setAiChatMessages((prev) => [...prev, { role: 'user', text: userMsg }]);
    setIsAiGenerating(true);

    setTimeout(() => {
      const q = activeAiQuestion;
      const optLetter = String.fromCharCode(65 + q.correctAnswer);
      const correctText = q.options[q.correctAnswer];
      const cleanExpEn = cleanSymbols(q.explanation);
      const cleanExpAm = q.explanationAmharic ? cleanSymbols(q.explanationAmharic) : '';
      const cleanExpOm = q.explanationAfaanOromo ? cleanSymbols(q.explanationAfaanOromo) : '';

      let reply = '';
      const lower = userMsg.toLowerCase();
      const isMath =
        q.courseCode === 'Math 1011' ||
        q.courseId === 'math-1011' ||
        (q.courseCode?.toLowerCase().includes('math') ?? false);

      if (isMath) {
        if (lower.includes('why') || lower.includes('explain') || lower.includes('how') || lower.includes('step') || lower.includes('solve')) {
          reply = `Step-by-Step Mathematical Solution (English):\n\n${cleanExpEn}\n\nVerified Answer: Option ${optLetter} (${cleanSymbols(correctText)})`;
        } else if (lower.includes('formula') || lower.includes('theorem') || lower.includes('rule') || lower.includes('property')) {
          reply = `Core Mathematical Principle:\n\nFor this problem on ${cleanSymbols(q.topic || q.courseCode)}:\n${cleanExpEn}`;
        } else if (lower.includes('hint') || lower.includes('help') || lower.includes('clue')) {
          reply = `Helpful Clue:\n${cleanSymbols(q.hint || 'Review the mathematical definitions and apply properties step by step.')}`;
        } else {
          reply = `Mathematical Solution (English):\n\n${cleanExpEn}\n\nVerified Answer: Option ${optLetter} (${cleanSymbols(correctText)})`;
        }
      } else if (lower.includes('amharic') || lower.includes('አማርኛ') || lower.includes('amaric')) {
        reply = cleanExpAm
          ? `የአማርኛ ማብራሪያ (Amharic Explanation):\n\nትክክለኛው መልስ: ምርጫ ${optLetter} (${cleanSymbols(correctText)})\n\nዝርዝር ማብራሪያ:\n${cleanExpAm}`
          : `የዚህ ጥያቄ ማብራሪያ:\n${cleanExpEn}`;
      } else if (lower.includes('oromo') || lower.includes('afaan') || lower.includes('oromoo')) {
        reply = cleanExpOm
          ? `Ibsa Afaan Oromoo (Afan Oromo Explanation):\n\nDeebii Sirrii: Filannoo ${optLetter} (${cleanSymbols(correctText)})\n\nIbsa Bal'aa:\n${cleanExpOm}`
          : `Ibsa Afaan Oromoo:\n${cleanExpEn}`;
      } else if (lower.includes('all') || lower.includes('3') || lower.includes('three')) {
        reply = `Complete 3-Language Explanation:\n\n1. English Explanation:\n${cleanExpEn}\n\n2. የአማርኛ ማብራሪያ (Amharic):\n${cleanExpAm || cleanExpEn}\n\n3. Ibsa Afaan Oromoo (Afan Oromo):\n${cleanExpOm || cleanExpEn}\n\nCorrect Option: ${optLetter} (${cleanSymbols(correctText)})`;
      } else if (lower.includes('why') || lower.includes('explain') || lower.includes('how') || lower.includes('step')) {
        reply = `Step-by-step academic rationale:\n\n1. Solution Analysis: ${cleanExpEn}\n\n2. Correct Choice: Option ${optLetter} (${cleanSymbols(correctText)}) is the verified correct answer.\n\n3. Exam Tip: For ${q.courseCode}, pay close attention to exact definitions and boundary conditions to avoid common multiple-choice traps.`;
      } else if (lower.includes('hint') || lower.includes('help') || lower.includes('clue')) {
        reply = `Helpful Clue:\n${cleanSymbols(q.hint || 'Review the core theorem and eliminate clearly implausible answer choices first.')}`;
      } else if (lower.includes('formula') || lower.includes('theorem') || lower.includes('rule')) {
        reply = `Core Principle and Rule:\nFor this question on ${cleanSymbols(q.topic || q.courseCode)}, remember:\n${cleanExpEn}`;
      } else {
        reply = `Concept Breakdown:\n\n${cleanExpEn}\n\nCorrect Option: ${optLetter} (${cleanSymbols(correctText)})\n\nYou can also ask me for the Amharic (አማርኛ) or Afan Oromo (Afaan Oromoo) explanation at any time.`;
      }

      setAiChatMessages((prev) => [...prev, { role: 'assistant', text: cleanSymbols(reply) }]);
      setIsAiGenerating(false);
    }, 450);
  };

  const formatTimer = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-6 text-slate-200">
      {/* 1. Header Card (Matching Screenshot) */}
      <div className="bg-[#0f172a]/95 border border-[#1e293b] rounded-2xl p-6 sm:p-7 shadow-xl backdrop-blur-sm flex flex-col md:flex-row md:items-center justify-between gap-5">
        <div className="space-y-1.5">
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white flex flex-wrap items-center gap-2.5">
            <span>Interactive Practice & Question Bank</span>
            <span className="bg-emerald-950/80 text-emerald-300 border border-emerald-700/60 text-[10px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
              Offline CBT Ready
            </span>
          </h1>
          <p className="text-sm text-slate-400">
            Master problem solving with instant feedback, hints, and AI explanations.
          </p>
        </div>

        {/* Mode Switcher Buttons */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            id="mode-practice-btn"
            onClick={() => {
              setExamMode('practice');
              setIsTimedRunning(false);
            }}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all shadow-sm ${
              examMode === 'practice'
                ? 'bg-indigo-600 text-white shadow-indigo-500/20'
                : 'bg-[#17223b] text-slate-400 hover:text-white border border-[#233150]'
            }`}
          >
            Practice Mode
          </button>

          <button
            id="mode-timed-btn"
            onClick={() => {
              setExamMode('timed');
              if (!isTimedRunning && !isTimedSubmitted) {
                setIsTimedRunning(true);
              }
            }}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
              examMode === 'timed'
                ? 'bg-indigo-600 text-white shadow-indigo-500/20'
                : 'bg-[#17223b] text-slate-400 hover:text-white border border-[#233150]'
            }`}
          >
            <Timer className="w-4 h-4 text-slate-300" />
            <span>Timed Exam Test</span>
            {examMode === 'timed' && (
              <span className="font-mono text-xs bg-indigo-900/80 px-2 py-0.5 rounded-full text-indigo-200">
                {formatTimer(timedSecondsLeft)}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Quick Launch Banner for Psychology 2016 Midterm (18 Questions in 3 Languages) */}
      {/* Featured Exam Quick Access Banner */}
      <div className="bg-gradient-to-r from-amber-950/60 via-[#0f172a] to-indigo-950/60 border border-amber-500/40 rounded-2xl p-4 sm:p-5 shadow-xl flex flex-col xl:flex-row items-start xl:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/40 flex items-center justify-center shrink-0 shadow-sm">
            <Sparkles className="w-5 h-5 stroke-[2.2]" />
          </div>
          <div>
            <h2 className="text-white font-bold text-base sm:text-lg tracking-tight">
              Featured Midterm Exams
            </h2>
            <p className="text-xs text-slate-400">
              Direct access to authentic freshman midterms with clean step-by-step solutions
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 w-full xl:w-auto shrink-0">
          {/* Math 1011 2025 Model Quick Access Button */}
          <button
            onClick={() => {
              setSelectedCourse('Math 1011');
              setSelectedExamType('model');
              setSelectedYear('2025');
              setSelectedQuestionType('all');
              setCurrentQuestionIndex(0);
            }}
            className={`px-3 py-2 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-1.5 ${
              selectedCourse === 'Math 1011' && selectedExamType === 'model' && selectedYear === '2025'
                ? 'bg-indigo-600 text-white shadow-indigo-500/30 ring-2 ring-indigo-400/50'
                : 'bg-[#18233c] hover:bg-[#202f50] text-indigo-300 border border-indigo-500/40'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>📐 Math 2025 Model (30 Qs)</span>
          </button>

          {/* Math 1011 2016 E.C. Quick Access Button */}
          <button
            onClick={() => {
              setSelectedCourse('Math 1011');
              setSelectedExamType('midterm');
              setSelectedYear('2016');
              setSelectedQuestionType('all');
              setCurrentQuestionIndex(0);
            }}
            className={`px-3 py-2 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-1.5 ${
              selectedCourse === 'Math 1011' && selectedExamType === 'midterm' && selectedYear === '2016'
                ? 'bg-blue-600 text-white shadow-blue-500/30 ring-2 ring-blue-400/50'
                : 'bg-[#18233c] hover:bg-[#202f50] text-blue-300 border border-blue-500/40'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>📐 Math 2016</span>
          </button>

          {/* Math 1011 2015 E.C. Quick Access Button */}
          <button
            onClick={() => {
              setSelectedCourse('Math 1011');
              setSelectedExamType('midterm');
              setSelectedYear('2015');
              setSelectedQuestionType('all');
              setCurrentQuestionIndex(0);
            }}
            className={`px-3 py-2 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-1.5 ${
              selectedCourse === 'Math 1011' && selectedExamType === 'midterm' && selectedYear === '2015'
                ? 'bg-blue-600 text-white shadow-blue-500/30 ring-2 ring-blue-400/50'
                : 'bg-[#18233c] hover:bg-[#202f50] text-blue-300 border border-blue-500/40'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Math 2015</span>
          </button>

          {/* Math 1011 2014 E.C. Quick Access Button */}
          <button
            onClick={() => {
              setSelectedCourse('Math 1011');
              setSelectedExamType('midterm');
              setSelectedYear('2014');
              setSelectedQuestionType('all');
              setCurrentQuestionIndex(0);
            }}
            className={`px-3 py-2 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-1.5 ${
              selectedCourse === 'Math 1011' && selectedExamType === 'midterm' && selectedYear === '2014'
                ? 'bg-blue-600 text-white shadow-blue-500/30 ring-2 ring-blue-400/50'
                : 'bg-[#18233c] hover:bg-[#202f50] text-blue-300 border border-blue-500/40'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Math 2014</span>
          </button>

          <span className="text-slate-600 hidden sm:inline">|</span>

          {/* Psychology Quick Buttons */}
          <button
            onClick={() => {
              setSelectedCourse('Psyc 1011');
              setSelectedExamType('midterm');
              setSelectedYear('2013');
              setSelectedQuestionType('all');
              setCurrentQuestionIndex(0);
            }}
            className={`px-3 py-2 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-1.5 ${
              selectedCourse === 'Psyc 1011' && selectedExamType === 'midterm' && selectedYear === '2013'
                ? 'bg-amber-500 text-slate-950 shadow-amber-500/30'
                : 'bg-[#18233c] hover:bg-[#202f50] text-amber-300 border border-amber-500/40'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Psyc 2013</span>
          </button>

          <button
            onClick={() => {
              setSelectedCourse('Psyc 1011');
              setSelectedExamType('midterm');
              setSelectedYear('2014');
              setSelectedQuestionType('all');
              setCurrentQuestionIndex(0);
            }}
            className={`px-3 py-2 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-1.5 ${
              selectedCourse === 'Psyc 1011' && selectedExamType === 'midterm' && selectedYear === '2014'
                ? 'bg-amber-500 text-slate-950 shadow-amber-500/30'
                : 'bg-[#18233c] hover:bg-[#202f50] text-amber-300 border border-amber-500/40'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Psyc 2014</span>
          </button>

          <button
            onClick={() => {
              setSelectedCourse('Psyc 1011');
              setSelectedExamType('midterm');
              setSelectedYear('2015');
              setSelectedQuestionType('all');
              setCurrentQuestionIndex(0);
            }}
            className={`px-3 py-2 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-1.5 ${
              selectedCourse === 'Psyc 1011' && selectedExamType === 'midterm' && selectedYear === '2015'
                ? 'bg-amber-500 text-slate-950 shadow-amber-500/30'
                : 'bg-[#18233c] hover:bg-[#202f50] text-amber-300 border border-amber-500/40'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Psyc 2015</span>
          </button>

          {/* Psychology 2026 Model Quick Access Button */}
          <button
            onClick={() => {
              setSelectedCourse('Psyc 1011');
              setSelectedExamType('model');
              setSelectedYear('2026');
              setSelectedQuestionType('all');
              setCurrentQuestionIndex(0);
            }}
            className={`px-3 py-2 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-1.5 ${
              selectedCourse === 'Psyc 1011' && selectedExamType === 'model' && selectedYear === '2026'
                ? 'bg-rose-500 text-white shadow-rose-500/30 ring-2 ring-rose-400/50'
                : 'bg-[#18233c] hover:bg-[#202f50] text-rose-300 border border-rose-500/40'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>🧠 Psyc 2026 Model (50 Qs)</span>
          </button>

          <button
            onClick={() => {
              setSelectedCourse('Psyc 1011');
              setSelectedExamType('midterm');
              setSelectedYear('2016');
              setSelectedQuestionType('all');
              setCurrentQuestionIndex(0);
            }}
            className={`px-3 py-2 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-1.5 ${
              selectedCourse === 'Psyc 1011' && selectedExamType === 'midterm' && selectedYear === '2016'
                ? 'bg-amber-500 text-slate-950 shadow-amber-500/30'
                : 'bg-[#18233c] hover:bg-[#202f50] text-amber-300 border border-amber-500/40'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Psyc 2016</span>
          </button>

          <span className="text-slate-600 hidden sm:inline">|</span>

          {/* Logic 2025 Model Quick Access Button */}
          <button
            onClick={() => {
              setSelectedCourse('LoCT 1011');
              setSelectedExamType('model');
              setSelectedYear('2025');
              setSelectedQuestionType('all');
              setCurrentQuestionIndex(0);
            }}
            className={`px-3 py-2 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-1.5 ${
              selectedCourse === 'LoCT 1011' && selectedExamType === 'model' && selectedYear === '2025'
                ? 'bg-amber-500 text-slate-950 shadow-amber-500/30 ring-2 ring-amber-400/50'
                : 'bg-[#18233c] hover:bg-[#202f50] text-amber-300 border border-amber-500/40'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>🧠 Logic 2025 Model (30 Qs)</span>
          </button>

          {/* Logic 2016 E.C. Midterm Quick Access Button */}
          <button
            onClick={() => {
              setSelectedCourse('LoCT 1011');
              setSelectedExamType('midterm');
              setSelectedYear('2016');
              setSelectedQuestionType('all');
              setCurrentQuestionIndex(0);
            }}
            className={`px-3 py-2 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-1.5 ${
              selectedCourse === 'LoCT 1011' && selectedExamType === 'midterm' && selectedYear === '2016'
                ? 'bg-amber-600 text-white shadow-amber-500/30 ring-2 ring-amber-400/50'
                : 'bg-[#18233c] hover:bg-[#202f50] text-amber-300 border border-amber-500/40'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Logic 2016</span>
          </button>

          {/* Logic 2015 E.C. Midterm Quick Access Button */}
          <button
            onClick={() => {
              setSelectedCourse('LoCT 1011');
              setSelectedExamType('midterm');
              setSelectedYear('2015');
              setSelectedQuestionType('all');
              setCurrentQuestionIndex(0);
            }}
            className={`px-3 py-2 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-1.5 ${
              selectedCourse === 'LoCT 1011' && selectedExamType === 'midterm' && selectedYear === '2015'
                ? 'bg-amber-600 text-white shadow-amber-500/30 ring-2 ring-amber-400/50'
                : 'bg-[#18233c] hover:bg-[#202f50] text-amber-300 border border-amber-500/40'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Logic 2015</span>
          </button>

          {/* Logic 2014 E.C. Midterm Quick Access Button */}
          <button
            onClick={() => {
              setSelectedCourse('LoCT 1011');
              setSelectedExamType('midterm');
              setSelectedYear('2014');
              setSelectedQuestionType('all');
              setCurrentQuestionIndex(0);
            }}
            className={`px-3 py-2 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-1.5 ${
              selectedCourse === 'LoCT 1011' && selectedExamType === 'midterm' && selectedYear === '2014'
                ? 'bg-amber-600 text-white shadow-amber-500/30 ring-2 ring-amber-400/50'
                : 'bg-[#18233c] hover:bg-[#202f50] text-amber-300 border border-amber-500/40'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Logic 2014</span>
          </button>

          <span className="text-slate-600 hidden sm:inline">|</span>

          {/* Geography 2025 Model Quick Access Button */}
          <button
            onClick={() => {
              setSelectedCourse('GeES 1011');
              setSelectedExamType('model');
              setSelectedYear('2025');
              setSelectedQuestionType('all');
              setCurrentQuestionIndex(0);
            }}
            className={`px-3 py-2 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-1.5 ${
              selectedCourse === 'GeES 1011' && selectedExamType === 'model' && selectedYear === '2025'
                ? 'bg-emerald-500 text-slate-950 shadow-emerald-500/30 ring-2 ring-emerald-400/50'
                : 'bg-[#18233c] hover:bg-[#202f50] text-emerald-300 border border-emerald-500/40'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>🌍 Geog 2025 Model (50 Qs)</span>
          </button>

          {/* Geography 2015 E.C. Midterm Quick Access Button */}
          <button
            onClick={() => {
              setSelectedCourse('GeES 1011');
              setSelectedExamType('midterm');
              setSelectedYear('2015');
              setSelectedQuestionType('all');
              setCurrentQuestionIndex(0);
            }}
            className={`px-3 py-2 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-1.5 ${
              selectedCourse === 'GeES 1011' && selectedExamType === 'midterm' && selectedYear === '2015'
                ? 'bg-emerald-600 text-white shadow-emerald-500/30 ring-2 ring-emerald-400/50'
                : 'bg-[#18233c] hover:bg-[#202f50] text-emerald-300 border border-emerald-500/40'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Geog 2015</span>
          </button>

          {/* Geography 2014 E.C. Midterm Quick Access Button */}
          <button
            onClick={() => {
              setSelectedCourse('GeES 1011');
              setSelectedExamType('midterm');
              setSelectedYear('2014');
              setSelectedQuestionType('all');
              setCurrentQuestionIndex(0);
            }}
            className={`px-3 py-2 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-1.5 ${
              selectedCourse === 'GeES 1011' && selectedExamType === 'midterm' && selectedYear === '2014'
                ? 'bg-emerald-600 text-white shadow-emerald-500/30 ring-2 ring-emerald-400/50'
                : 'bg-[#18233c] hover:bg-[#202f50] text-emerald-300 border border-emerald-500/40'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Geog 2014</span>
          </button>

          <span className="text-slate-600 hidden sm:inline">|</span>

          {/* Physics 2025 Model Quick Access Button */}
          <button
            onClick={() => {
              setSelectedCourse('Phys 1011');
              setSelectedExamType('model');
              setSelectedYear('2025');
              setSelectedQuestionType('all');
              setCurrentQuestionIndex(0);
            }}
            className={`px-3 py-2 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-1.5 ${
              selectedCourse === 'Phys 1011' && selectedExamType === 'model' && selectedYear === '2025'
                ? 'bg-sky-600 text-white shadow-sky-500/30 ring-2 ring-sky-400/50'
                : 'bg-[#18233c] hover:bg-[#202f50] text-sky-300 border border-sky-500/40'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>⚛️ Phys 2025 Model (30 Qs)</span>
          </button>

          {/* Physics 2016 E.C. Midterm Quick Access Button */}
          <button
            onClick={() => {
              setSelectedCourse('Phys 1011');
              setSelectedExamType('midterm');
              setSelectedYear('2016');
              setSelectedQuestionType('all');
              setCurrentQuestionIndex(0);
            }}
            className={`px-3 py-2 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-1.5 ${
              selectedCourse === 'Phys 1011' && selectedExamType === 'midterm' && selectedYear === '2016'
                ? 'bg-cyan-600 text-white shadow-cyan-500/30 ring-2 ring-cyan-400/50'
                : 'bg-[#18233c] hover:bg-[#202f50] text-cyan-300 border border-cyan-500/40'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Phys 2016</span>
          </button>

          {/* Physics 2015 E.C. Midterm Quick Access Button */}
          <button
            onClick={() => {
              setSelectedCourse('Phys 1011');
              setSelectedExamType('midterm');
              setSelectedYear('2015');
              setSelectedQuestionType('all');
              setCurrentQuestionIndex(0);
            }}
            className={`px-3 py-2 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-1.5 ${
              selectedCourse === 'Phys 1011' && selectedExamType === 'midterm' && selectedYear === '2015'
                ? 'bg-teal-600 text-white shadow-teal-500/30 ring-2 ring-teal-400/50'
                : 'bg-[#18233c] hover:bg-[#202f50] text-teal-300 border border-teal-500/40'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Phys 2015</span>
          </button>

          <span className="text-slate-600 hidden sm:inline">|</span>

          {/* Economics 2025 Model Quick Access Button */}
          <button
            onClick={() => {
              setSelectedCourse('Econ 1011');
              setSelectedExamType('model');
              setSelectedYear('2025');
              setSelectedQuestionType('all');
              setCurrentQuestionIndex(0);
            }}
            className={`px-3 py-2 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-1.5 ${
              selectedCourse === 'Econ 1011' && selectedExamType === 'model' && selectedYear === '2025'
                ? 'bg-blue-600 text-white shadow-blue-500/30 ring-2 ring-blue-400/50'
                : 'bg-[#18233c] hover:bg-[#202f50] text-blue-300 border border-blue-500/40'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>📈 Econ 2025 Model (50 Qs)</span>
          </button>

          {/* Economics 2016 Midterm Quick Access Button */}
          <button
            onClick={() => {
              setSelectedCourse('Econ 1011');
              setSelectedExamType('midterm');
              setSelectedYear('2016');
              setSelectedQuestionType('all');
              setCurrentQuestionIndex(0);
            }}
            className={`px-3 py-2 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-1.5 ${
              selectedCourse === 'Econ 1011' && selectedExamType === 'midterm' && selectedYear === '2016'
                ? 'bg-blue-500 text-slate-950 shadow-blue-500/30'
                : 'bg-[#18233c] hover:bg-[#202f50] text-blue-300 border border-blue-500/40'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>📈 Econ 2016 Midterm (16 Qs)</span>
          </button>

          <button
            onClick={() => {
              resetQuestionsToDefault();
              setSelectedCourse('Phys 1011');
              setSelectedExamType('midterm');
              setSelectedYear('2015');
              setSelectedQuestionType('all');
              setCurrentQuestionIndex(0);
            }}
            title="Reload latest questions bank from source code"
            className="px-3 py-2 rounded-xl bg-[#0a0f1d] hover:bg-[#1e293b] text-slate-400 hover:text-slate-200 border border-[#1e293b] text-xs font-semibold transition flex items-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Sync Latest</span>
          </button>
        </div>
      </div>

      {/* Filters Bar (Course, Exam Category, Dynamic Year Dropdown & Search) */}
      <div className="bg-[#0f172a]/95 border border-[#1e293b] rounded-2xl p-3.5 sm:p-4 shadow-lg flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 flex-1 flex-wrap">
          {/* Search Input */}
          <div className="relative flex-1 min-w-[200px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions by keyword or topic..."
              className="w-full bg-[#0a0f1d] border border-[#1e293b] text-slate-200 placeholder-slate-500 text-xs sm:text-sm rounded-xl pl-10 pr-4 py-2.5 focus:outline-none focus:border-indigo-500 transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 text-xs"
              >
                ✕
              </button>
            )}
          </div>

          {/* Course Dropdown */}
          <div className="relative">
            <select
              value={selectedCourse}
              onChange={(e) => {
                setSelectedCourse(e.target.value);
                setCurrentQuestionIndex(0);
              }}
              className="w-full sm:w-auto appearance-none bg-[#0a0f1d] border border-[#1e293b] text-slate-200 text-xs sm:text-sm font-semibold rounded-xl pl-4 pr-9 py-2.5 focus:outline-none focus:border-indigo-500 cursor-pointer"
            >
              <option value="all">All Courses</option>
              <option value="LoCT 1011">🧠 Critical Thinking & Logic (2025 Model • 2016, 2015 & 2014 Midterms • 104 Qs • 3 Languages)</option>
              <option value="Math 1011">📐 Mathematics for Natural Science (2025 Model • 2016, 2015 & 2014 Midterms • 91 Qs • 3 Languages & English)</option>
              <option value="Psyc 1011">🧠 Psychology and Life Skills (2026 Model • 2016 Midterm • 80 Qs • 3 Languages)</option>
              <option value="GeES 1011">🌍 Geography of Ethiopia & the Horn (2025 Model • 2015 & 2014 Midterms • 112 Qs • 3 Languages)</option>
              <option value="Phys 1011">⚡ General Physics (2016 & 2015 Midterms • 42 Qs • Part 1 & 2 English Solutions)</option>
              <option value="FLEn 1011">Communicative English 1</option>
              <option value="Econ 1011">📈 Economics for Social (2025 Model • 2016 Midterm • 73 Qs • 3 Languages: EN / AM / OM)</option>
            </select>
            <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs">
              ▼
            </div>
          </div>

          {/* Exam Category Dropdown */}
          <div className="relative">
            <select
              value={selectedExamType}
              onChange={(e) => {
                setSelectedExamType(e.target.value as any);
                setSelectedYear('all');
                setCurrentQuestionIndex(0);
              }}
              className={`w-full sm:w-auto appearance-none bg-[#0a0f1d] border text-xs sm:text-sm font-bold rounded-xl pl-4 pr-9 py-2.5 focus:outline-none cursor-pointer ${
                selectedExamType === 'midterm'
                  ? 'border-amber-500/50 text-amber-400'
                  : selectedExamType === 'final'
                  ? 'border-emerald-500/50 text-emerald-400'
                  : selectedExamType === 'model'
                  ? 'border-purple-500/50 text-purple-400'
                  : 'border-[#1e293b] text-indigo-300'
              }`}
            >
              <option value="all">All Exam Categories</option>
              <option value="midterm">📝 Mid Terms Exam</option>
              <option value="final">🎓 Final Terms Exam</option>
              <option value="model">⚡ Smart Study Model Exam</option>
            </select>
            <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs">
              ▼
            </div>
          </div>

          {/* Dynamic Exam Year Dropdown */}
          <div className="relative">
            <select
              value={selectedYear}
              onChange={(e) => {
                const val = e.target.value;
                if (val.startsWith('midterm-')) {
                  setSelectedExamType('midterm');
                  setSelectedYear(val.replace('midterm-', ''));
                } else if (val.startsWith('final-')) {
                  setSelectedExamType('final');
                  setSelectedYear(val.replace('final-', ''));
                } else if (val.startsWith('model-')) {
                  setSelectedExamType('model');
                  setSelectedYear(val.replace('model-', ''));
                } else {
                  setSelectedYear(val);
                }
                setCurrentQuestionIndex(0);
              }}
              className="w-full sm:w-auto appearance-none bg-[#0a0f1d] border border-[#1e293b] text-amber-400 text-xs sm:text-sm font-bold rounded-xl pl-4 pr-9 py-2.5 focus:outline-none focus:border-indigo-500 cursor-pointer"
            >
              {selectedExamType === 'midterm' && (
                <>
                  <option value="all">All Mid Terms Years</option>
                  <option value="2013">2013 Midterm Exam (2013 E.C. Haramaya)</option>
                  <option value="2014">2014 Midterm Exam (2014 E.C. Haramaya)</option>
                  <option value="2015">2015 Midterm Exam (2015 E.C. Haramaya)</option>
                  <option value="2016">2016 Midterm Exam (2016 E.C. Haramaya)</option>
                  <option value="2024">2024 Midterm Exam (2016 E.C.)</option>
                  <option value="2023">2023 Midterm Exam (2015 E.C.)</option>
                  <option value="2022">2022 Midterm Exam (2014 E.C.)</option>
                </>
              )}
              {selectedExamType === 'final' && (
                <>
                  <option value="all">All Final Terms Years</option>
                  <option value="2024">2024 Final Exam (2016 E.C.)</option>
                  <option value="2023">2023 Final Exam (2015 E.C.)</option>
                  <option value="2022">2022 Final Exam (2014 E.C.)</option>
                </>
              )}
              {selectedExamType === 'model' && (
                <>
                  <option value="all">All Smart Study Model Exams</option>
                  <option value="2026">2026 Smart Study Model Exam (General Psychology • Unit 1 - 3 • 50 Qs)</option>
                  <option value="2025">2025 Smart Study Model Exam (Economics 50 Qs • Geography 50 Qs • Math 30 Qs • Logic 30 Qs • Unit 1 - 3)</option>
                  <option value="2024">2024 Smart Study Model Exam</option>
                  <option value="2023">2023 Smart Study Model Exam</option>
                </>
              )}
              {selectedExamType === 'all' && (
                <>
                  <option value="all">All Exam Years & Categories</option>
                  <optgroup label="📝 Mid Terms Exam">
                    <option value="midterm-all">All Mid Terms Years</option>
                    <option value="midterm-2013">2013 Midterm Exam (2013 E.C. Haramaya)</option>
                    <option value="midterm-2014">2014 Midterm Exam (2014 E.C. Haramaya)</option>
                    <option value="midterm-2015">2015 Midterm Exam (2015 E.C. Haramaya)</option>
                    <option value="midterm-2016">2016 Midterm Exam (2016 E.C. Haramaya)</option>
                    <option value="midterm-2024">2024 Midterm Exam (2016 E.C.)</option>
                    <option value="midterm-2023">2023 Midterm Exam (2015 E.C.)</option>
                    <option value="midterm-2022">2022 Midterm Exam (2014 E.C.)</option>
                  </optgroup>
                  <optgroup label="🎓 Final Terms Exam">
                    <option value="final-all">All Final Terms Years</option>
                    <option value="final-2024">2024 Final Exam (2016 E.C.)</option>
                    <option value="final-2023">2023 Final Exam (2015 E.C.)</option>
                    <option value="final-2022">2022 Final Exam (2014 E.C.)</option>
                  </optgroup>
                  <optgroup label="⚡ Smart Study Model Exam">
                    <option value="model-all">All Smart Study Model Exams</option>
                    <option value="model-2026">2026 Smart Study Model Exam (General Psychology • Unit 1 - 3 • 50 Qs)</option>
                    <option value="model-2025">2025 Smart Study Model Exam (Economics 50 Qs • Geography 50 Qs • Math 30 Qs • Logic 30 Qs • Unit 1 - 3)</option>
                    <option value="model-2024">2024 Smart Study Model Exam</option>
                    <option value="model-2023">2023 Smart Study Model Exam</option>
                  </optgroup>
                </>
              )}
            </select>
            <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-amber-400 text-xs">
              ▼
            </div>
          </div>
        </div>

        {/* Total Questions Count (Matching Screenshot) */}
        <div className="text-xs sm:text-sm text-slate-400 font-medium shrink-0 flex items-center justify-between sm:justify-end gap-2 border-t lg:border-t-0 border-slate-800 pt-2 lg:pt-0">
          <span>
            Total: <strong className="text-white font-black">{filteredQuestions.length}</strong> questions
          </span>
          {examMode === 'practice' && userScore > 0 && (
            <span className="bg-emerald-950/80 text-emerald-400 border border-emerald-800/60 px-2 py-0.5 rounded-full text-[11px] font-bold">
              Score: {userScore} pts
            </span>
          )}
        </div>
      </div>

      {/* 3.5 Question Type Filter Bar (Part I: True / False vs Part IV: Multiple Choice - Matching & Blank Spaces Avoided) */}
      <div className="bg-[#0f172a]/95 border border-[#1e293b] rounded-2xl p-3 sm:p-4 shadow-lg flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-400"></span>
            Format:
          </span>
          <div className="flex items-center gap-1 p-1 bg-[#0a0f1d] rounded-xl border border-[#1e293b]">
            <button
              onClick={() => { setSelectedQuestionType('all'); setCurrentQuestionIndex(0); }}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                selectedQuestionType === 'all'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              All Types ({filteredQuestions.length})
            </button>
            <button
              onClick={() => { setSelectedQuestionType('true_false'); setCurrentQuestionIndex(0); }}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                selectedQuestionType === 'true_false'
                  ? 'bg-amber-500 text-slate-950 font-extrabold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <span>True / False</span>
            </button>
            <button
              onClick={() => { setSelectedQuestionType('multiple_choice'); setCurrentQuestionIndex(0); }}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                selectedQuestionType === 'multiple_choice'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <span>Multiple Choice & Matching</span>
            </button>
          </div>
        </div>

        <div className="text-[11px] text-slate-400 flex items-center gap-2">
          {selectedCourse === 'Math 1011' || selectedCourse === 'Phys 1011' ? (
            <span className="px-2.5 py-1 rounded-lg bg-cyan-950/70 text-cyan-300 border border-cyan-800/50 font-semibold flex items-center gap-1.5">
              <span>📐 English Solutions Only (Step-by-Step Derivations)</span>
            </span>
          ) : (
            <span className="px-2.5 py-1 rounded-lg bg-emerald-950/70 text-emerald-300 border border-emerald-800/50 font-semibold flex items-center gap-1.5">
              <span>🌐 3-Language Explanations (EN • AM • OM)</span>
            </span>
          )}
          <span className="hidden sm:inline text-slate-500">• Matching & Blank spaces excluded</span>
        </div>
      </div>

      {/* 4. Questions Stream: All Questions Listed Vertically Down (One After Another) */}
      {filteredQuestions.length > 0 ? (
        <div className="space-y-6">
          {/* Stream Header Info Bar */}
          <div className="bg-[#0f172a]/95 border border-[#1e293b] rounded-2xl p-4 sm:p-5 shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <Layers className="w-5 h-5" />
              </span>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                  <span>Questions Stream</span>
                  <span className="bg-amber-500 text-slate-950 font-black text-xs px-2.5 py-0.5 rounded-full">
                    {filteredQuestions.length} Questions
                  </span>
                </h3>
                <p className="text-xs text-slate-400">
                  All questions listed down continuously — practice and read one question after another without next/previous buttons.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <button
                onClick={handleToggleAllExplanations}
                className="px-3.5 py-2 rounded-xl bg-[#0a0f1d] hover:bg-[#1e293b] text-xs font-bold text-slate-200 border border-[#1e293b] transition flex items-center gap-1.5 shadow-sm"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>
                  {areAllExplanationsOpen
                    ? "Hide All Explanations"
                    : selectedCourse === 'Math 1011' || selectedCourse === 'Phys 1011'
                    ? "View All Explanations (English)"
                    : "View All Explanations (3 Languages)"}
                </span>
              </button>
              <div className="text-xs font-mono text-slate-300 bg-[#0a0f1d] px-3.5 py-2 rounded-xl border border-[#1e293b] flex items-center gap-2">
                <span className="text-emerald-400 font-bold">Answered: {answeredCount}/{filteredQuestions.length}</span>
                {examMode === "practice" && (
                  <span className="text-indigo-300 font-bold border-l border-slate-700 pl-2">Score: {userScore} pts</span>
                )}
              </div>
            </div>
          </div>

          {/* Admin Full Access Confirmation Banner */}
          {isAdmin && (
            <div className="bg-gradient-to-r from-emerald-950/70 via-emerald-900/40 to-slate-900 border border-emerald-500/50 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xl">
              <div className="flex items-start sm:items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5 text-emerald-300" />
                </div>
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="text-white text-xs sm:text-sm font-bold">
                      Administrator Access Active (Guduru Alemayehu)
                    </span>
                    <span className="bg-emerald-400 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider">
                      All Questions Unlocked
                    </span>
                  </div>
                  <p className="text-xs text-slate-300">
                    As Administrator, you have complete unlimited access to all 1,000+ past exam questions, verified solutions, hints, and multilingual explanations without any locks.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-xs font-mono font-bold text-emerald-300 bg-emerald-950/80 px-3 py-1.5 rounded-xl border border-emerald-600/50">
                  {filteredQuestions.length} Questions Open
                </span>
              </div>
            </div>
          )}

          {/* Student Freemium 4-Question Preview Limit Banner */}
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
                      First 4 Questions Free
                    </span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Questions 1–4 are open for free practice. Question 5 and all subsequent questions are locked under Smart Study Pro. To unlock full access, pay the 300 ETB subscription fee.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 shrink-0">
                <button
                  onClick={() => setActiveTab('unlock')}
                  className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition flex items-center justify-center gap-1.5 shadow-md shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Pay 300 ETB to Unlock All</span>
                </button>
                <button
                  onClick={() => unlockAllForAdmin()}
                  className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 text-xs font-bold border border-amber-500/40 transition flex items-center justify-center gap-1.5"
                  title="Direct unlock for Admin Guduru Alemayehu"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Admin: Open All Questions</span>
                </button>
              </div>
            </div>
          )}

          {/* Map through all questions down */}
          {filteredQuestions.map((q, qIndex) => (
            <QuestionCard
              key={q.id}
              question={q}
              index={qIndex}
              examMode={examMode}
              selectedAnswer={selectedAnswers[q.id]}
              isFlagged={flaggedMap[q.id]}
              showHint={showHintMap[q.id]}
              showExplanation={showExplanationMap[q.id]}
              selectedExplanationLang={selectedExplanationLang}
              isLocked={!isUnlocked && qIndex >= 4}
              onUnlockClick={() => setActiveTab('unlock')}
              onSelectOption={(optIdx) => handleSelectOption(q.id, optIdx)}
              onToggleFlag={() => toggleFlag(q.id)}
              onToggleHint={() => toggleHint(q.id)}
              onToggleExplanation={() => toggleExplanation(q.id)}
              onSetExplanationLang={setSelectedExplanationLang}
              onAskAiTutor={() => handleAskAiTutor(q, qIndex + 1)}
            />
          ))}
        </div>
      ) : (
        <div className="bg-[#0f172a] border border-[#1e293b] rounded-2xl p-10 text-center space-y-3">
          <p className="text-slate-400 text-sm">
            No questions matched your search criteria.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => {
                setSelectedCourse('Psyc 1011');
                setSelectedExamType('midterm');
                setSelectedYear('2016');
                setSelectedQuestionType('all');
                setSearchQuery('');
                setCurrentQuestionIndex(0);
              }}
              className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-black rounded-xl shadow-md transition"
            >
              Open Psychology 2016 Midterm (18 Qs)
            </button>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCourse('all');
                setSelectedExamType('all');
                setSelectedYear('all');
                setSelectedQuestionType('all');
                setCurrentQuestionIndex(0);
              }}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl transition"
            >
              Reset All Filters
            </button>
            <button
              onClick={() => {
                resetQuestionsToDefault();
                setSelectedCourse('Psyc 1011');
                setSelectedExamType('midterm');
                setSelectedYear('2016');
                setSelectedQuestionType('all');
                setSearchQuery('');
                setCurrentQuestionIndex(0);
              }}
              className="px-4 py-2 bg-[#18233c] hover:bg-[#202f50] text-slate-300 border border-[#223354] text-xs font-semibold rounded-xl flex items-center gap-1.5 transition"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Sync All Questions</span>
            </button>
          </div>
        </div>
      )}

      {/* Quick Jump Question Matrix (Drawer / Quick Navigator) */}
      <div className="bg-[#0f172a]/95 border border-[#1e293b] rounded-2xl p-4 sm:p-5 shadow-lg space-y-3">
        <div className="flex items-center justify-between">
          <div className="text-xs font-bold text-slate-300 flex items-center gap-2">
            <Layers className="w-4 h-4 text-indigo-400" />
            <span>Question Navigator ({filteredQuestions.length} items)</span>
          </div>
          <div className="flex items-center gap-3 text-[11px] text-slate-400">
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> Answered
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" /> Flagged
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-600" /> Current
            </span>
            {!isUnlocked && (
              <span className="flex items-center gap-1 text-amber-400/80 font-medium">
                <Lock className="w-3 h-3 text-amber-400" /> Pro (5+)
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 max-h-36 overflow-y-auto pr-1 scrollbar-thin">
          {filteredQuestions.map((q, idx) => {
            const isItemLocked = !isUnlocked && idx >= 4;
            const isAnswered = selectedAnswers[q.id] !== undefined;
            const isFlagged = flaggedMap[q.id];
            const isCurrent = idx === currentQuestionIndex;

            let btnClass = 'bg-[#0a0f1d] border-[#1e293b] text-slate-400';
            if (isCurrent) {
              btnClass = 'bg-indigo-600 text-white font-black border-indigo-400 ring-2 ring-indigo-500/50';
            } else if (isItemLocked) {
              btnClass = 'bg-[#141d33] border-amber-500/30 text-amber-400/80 hover:border-amber-400/60';
            } else if (isFlagged) {
              btnClass = 'bg-amber-500/20 text-amber-300 border-amber-500/50 font-bold';
            } else if (isAnswered) {
              btnClass = 'bg-emerald-950/60 text-emerald-300 border-emerald-700/60 font-bold';
            }

            return (
              <button
                key={q.id}
                onClick={() => {
                  setCurrentQuestionIndex(idx);
                  const el = document.getElementById(`question-card-${q.id}`);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className={`w-8 h-8 rounded-lg border text-xs font-mono transition flex items-center justify-center ${btnClass}`}
                title={isItemLocked ? `Question ${idx + 1} (Pro Curriculum Locked)` : `Jump to Question ${idx + 1}`}
              >
                {isItemLocked && !isCurrent ? (
                  <span className="flex items-center justify-center text-[10px]">
                    <Lock className="w-2.5 h-2.5 text-amber-400/80" />
                  </span>
                ) : (
                  idx + 1
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* AI Tutor Explanation Modal / Drawer */}
      {aiTutorOpen && activeAiQuestion && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0f172a] border border-[#1e293b] rounded-2xl w-full max-w-2xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="p-4 bg-[#111827] border-b border-[#1e293b] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-sm">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-white flex items-center gap-1.5">
                    <span>Smart Study AI Tutor</span>
                    <span className="text-[10px] bg-emerald-950 text-emerald-400 border border-emerald-700/50 px-2 py-0.2 rounded-full font-bold">
                      Active
                    </span>
                  </h3>
                  <p className="text-[11px] text-slate-400">
                    Step-by-step reasoning for Question #{activeAiIndex || (activeAiQuestion ? filteredQuestions.findIndex(q => q.id === activeAiQuestion.id) + 1 : 1)}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setAiTutorOpen(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg text-sm"
              >
                ✕
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3.5 text-xs sm:text-sm">
              {aiChatMessages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex gap-3 ${
                    msg.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {msg.role === 'assistant' && (
                    <div className="w-6 h-6 rounded-lg bg-indigo-600 text-white flex items-center justify-center shrink-0 mt-1">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                  )}
                  <div
                    className={`p-3.5 rounded-2xl max-w-[85%] whitespace-pre-line leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-indigo-600 text-white rounded-br-none'
                        : 'bg-[#0a0f1d] border border-[#1e293b] text-slate-200 rounded-bl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isAiGenerating && (
                <div className="flex items-center gap-2 text-indigo-400 text-xs p-2">
                  <div className="w-2 h-2 rounded-full bg-indigo-500 animate-bounce" />
                  <div className="w-2 h-2 rounded-full bg-indigo-500 animate-bounce delay-100" />
                  <div className="w-2 h-2 rounded-full bg-indigo-500 animate-bounce delay-200" />
                  <span>AI Tutor is formulating explanation...</span>
                </div>
              )}
            </div>

            {/* Modal Input */}
            <div className="p-3 bg-[#0a0f1d] border-t border-[#1e293b] flex items-center gap-2">
              <input
                type="text"
                value={aiInputText}
                onChange={(e) => setAiInputText(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendAiMessage()}
                placeholder="Ask follow-up (e.g. 'Can you explain the key steps?', 'Why is this option correct?')..."
                className="flex-1 bg-[#111827] border border-[#1e293b] text-xs sm:text-sm rounded-xl px-3.5 py-2 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500"
              />
              <button
                onClick={handleSendAiMessage}
                disabled={!aiInputText.trim() || isAiGenerating}
                className="p-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl disabled:opacity-40 transition"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
