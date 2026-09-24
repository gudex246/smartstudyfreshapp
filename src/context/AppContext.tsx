import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import {
  Course,
  ExamQuestion,
  Announcement,
  GuideSection,
  GPACourseItem,
  QuizAttempt,
  StudyTask,
  StreamType,
  Chapter,
  VideoTutorial,
  PaymentSubmission,
  StudentProfile,
  UserAccount,
  UserRole,
  SignInData
} from '../types';
import {
  INITIAL_COURSES,
  INITIAL_QUESTIONS,
  INITIAL_ANNOUNCEMENTS,
  INITIAL_GUIDES,
  DEFAULT_GPA_COURSES,
  INITIAL_VIDEOS,
  INITIAL_PAYMENT_SUBMISSIONS
} from '../data/initialData';
import { cleanQuestionText } from '../utils/textUtils';
import {
  generateSyncCode,
  dispatchPaymentSubmissionToCloud,
  fetchRemotePaymentSubmissions,
  subscribeToSyncEvents
} from '../utils/cloudSync';

export const ADMIN_EMAIL = 'gudurualemayehu29@gmail.com';
export const DEFAULT_PIN = '1234';

export const PRESET_ACCOUNTS: UserAccount[] = [
  {
    id: 'super-admin',
    role: 'super_admin',
    name: 'Guduru Alemayehu',
    email: ADMIN_EMAIL,
    phone: '0953201048',
    university: 'Platform Founder & Lead Instructor',
    badge: 'SUPER ADMIN',
    badgeClass: 'bg-amber-400 text-slate-950 font-black ring-1 ring-amber-300',
    avatarText: 'GA',
    description: 'Platform Founder & Lead Instructor. Full access, verifies 300 ETB CBE/Telebirr student payments, uploads past exam banks and video masterclasses.',
    isUnlocked: true,
    paywallStatus: 'verified',
    tutorialStep: 5
  },
  {
    id: 'admin',
    role: 'admin',
    name: 'Academic Coordinator',
    email: 'admin@smartstudy.edu.et',
    phone: '0911556677',
    university: 'Smart Study Curriculum Moderator',
    badge: 'ADMIN',
    badgeClass: 'bg-indigo-600 text-white font-bold ring-1 ring-indigo-400',
    avatarText: 'AC',
    description: 'Academic Coordinator. Oversees syllabus chapters, reviews student transaction receipts, and manages CBT practice sets.',
    isUnlocked: true,
    paywallStatus: 'verified',
    tutorialStep: 5
  },
  {
    id: 'sample-student',
    role: 'sample_student',
    name: 'Sarah Jenkins',
    email: 'student.sample@smartstudy.edu.et',
    phone: '0911234567',
    university: 'Addis Ababa University (Freshman Natural Science)',
    badge: 'STUDENT',
    badgeClass: 'bg-emerald-400 text-slate-950 font-bold ring-1 ring-emerald-300',
    avatarText: 'SJ',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
    description: 'Sample freshman student experiencing the 300 ETB subscription fee paywall, video masterclasses, CBT questions, and payment verification flow.',
    isUnlocked: false,
    paywallStatus: 'locked',
    tutorialStep: 2
  }
];

const STORAGE_KEYS = {
  COURSES: 'smart_study_courses_v5',
  QUESTIONS: 'smart_study_questions_v24',
  VIDEOS: 'smart_study_videos_v4',
  PAYMENTS: 'smart_study_payments_v4',
  STUDENT: 'smart_study_student_v4',
  ANNOUNCEMENTS: 'smart_study_announcements_v4',
  QUIZ_ATTEMPTS: 'smart_study_quiz_attempts_v4',
  BOOKMARKS: 'smart_study_bookmarks_v4',
  TASKS: 'smart_study_tasks_v4',
  GPA_COURSES: 'smart_study_gpa_courses_v4',
  STREAM: 'smart_study_stream_filter_v4',
  ADMIN_AUTH: 'smart_study_admin_auth_v4',
  ADMIN_PIN: 'smart_study_admin_pin_v4',
  CURRENT_ACCOUNT: 'smart_study_current_account_v2',
  SAMPLE_STUDENT_STATUS: 'smart_study_sample_student_status_v2',
  SAMPLE_STUDENT_STEP: 'smart_study_sample_student_step_v2',
  IS_AUTHENTICATED: 'smart_study_is_authenticated_v3',
  AUTH_USER: 'smart_study_auth_user_v3',
  SHOW_INSTALL_POPUP: 'smart_study_show_install_popup_v1'
};

// Aggressively clean up obsolete / orphaned smart_study_ keys from localStorage to free up quota
export const cleanupStorageQuota = () => {
  try {
    const activeKeys = new Set(Object.values(STORAGE_KEYS));
    const keysToRemove: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('smart_study_') && !activeKeys.has(key)) {
        keysToRemove.push(key);
      }
    }
    keysToRemove.forEach((k) => {
      try {
        localStorage.removeItem(k);
      } catch {
        // ignore
      }
    });
  } catch (e) {
    console.warn('Storage cleanup warning:', e);
  }
};

// Safe localStorage setItem helper that handles quota and security errors gracefully
export const safeSetItem = (key: string, value: string): boolean => {
  try {
    localStorage.setItem(key, value);
    return true;
  } catch (err: any) {
    console.warn(`localStorage.setItem warning for key "${key}":`, err);
    if (err && (err.name === 'QuotaExceededError' || err.code === 22 || err.name === 'NS_ERROR_DOM_QUOTA_REACHED')) {
      cleanupStorageQuota();
      try {
        localStorage.setItem(key, value);
        return true;
      } catch (retryErr) {
        console.warn(`LocalStorage quota exceeded. Skipping persistent write for "${key}" without crashing.`);
        return false;
      }
    }
    return false;
  }
};

interface AppContextType {
  courses: Course[];
  questions: ExamQuestion[];
  videos: VideoTutorial[];
  paymentSubmissions: PaymentSubmission[];
  studentProfile: StudentProfile;
  isUnlocked: boolean;
  announcements: Announcement[];
  guides: GuideSection[];
  quizAttempts: QuizAttempt[];
  bookmarks: string[];
  tasks: StudyTask[];
  gpaCourses: GPACourseItem[];
  streamFilter: StreamType;
  setStreamFilter: (stream: StreamType) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;

  // First Entry Sign-In & Authentication
  isAuthenticated: boolean;
  signIn: (data: SignInData) => void;
  signOut: () => void;
  showInstallPromptModal: boolean;
  setShowInstallPromptModal: (show: boolean) => void;

  // Multi-Account & Role Switching
  accounts: UserAccount[];
  currentAccount: UserAccount;
  switchAccount: (accountId: string) => void;
  sampleStudentPaywallStatus: 'locked' | 'pending' | 'verified';
  setSampleStudentPaywallStatus: (status: 'locked' | 'pending' | 'verified') => void;
  sampleStudentTutorialStep: number;
  setSampleStudentTutorialStep: (step: number) => void;
  resetSampleStudentFlow: () => void;

  // Student methods
  updateStudentProfile: (profile: Partial<StudentProfile>) => void;
  toggleStudentUnlock: () => void;
  unlockAllForAdmin: () => void;
  addPaymentSubmission: (data: {
    studentName: string;
    studentEmail: string;
    studentPhone: string;
    paymentMethod: 'CBE' | 'Telebirr';
    accountOrPhoneUsed?: string;
    transactionRef: string;
    screenshotUrl: string;
  }) => PaymentSubmission;

  // Admin state & methods
  isAdmin: boolean;
  adminEmail: string;
  adminLogin: (credential: { email?: string; pinOrPassword?: string }) => boolean;
  adminLogout: () => void;
  setAdminPin: (newPin: string) => void;
  
  // Payment Verification methods (for admin)
  verifyPaymentSubmission: (id: string, notes?: string) => void;
  rejectPaymentSubmission: (id: string, reason?: string) => void;
  deletePaymentSubmission: (id: string) => void;
  syncRemoteSubmissions: () => Promise<number>;
  isSyncingSubmissions: boolean;

  // Video CRUD
  addVideo: (video: VideoTutorial) => void;
  updateVideo: (video: VideoTutorial) => void;
  deleteVideo: (id: string) => void;

  // Course CRUD
  addCourse: (course: Course) => void;
  updateCourse: (course: Course) => void;
  deleteCourse: (id: string) => void;

  // Chapter CRUD
  addChapter: (courseId: string, chapter: Chapter) => void;
  updateChapter: (courseId: string, chapter: Chapter) => void;
  deleteChapter: (courseId: string, chapterId: string) => void;

  // Question CRUD
  addQuestion: (question: ExamQuestion) => void;
  bulkAddQuestions: (questions: ExamQuestion[]) => void;
  updateQuestion: (question: ExamQuestion) => void;
  deleteQuestion: (id: string) => void;

  // Announcement CRUD
  addAnnouncement: (announcement: Announcement) => void;
  updateAnnouncement: (announcement: Announcement) => void;
  deleteAnnouncement: (id: string) => void;

  // Quiz attempts & Bookmarks
  saveQuizAttempt: (attempt: QuizAttempt) => void;
  toggleBookmark: (id: string) => void;
  isBookmarked: (id: string) => boolean;

  // Tasks & GPA
  addTask: (title: string, courseCode: string, priority: 'low' | 'medium' | 'high') => void;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
  updateGpaCourses: (courses: GPACourseItem[]) => void;

  // Backup / Restore
  exportDataJSON: () => string;
  importDataJSON: (jsonStr: string) => { success: boolean; message: string };
  resetAllToDefault: () => void;
  resetQuestionsToDefault: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Load courses (merging chapters from INITIAL_COURSES)
  const [courses, setCourses] = useState<Course[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.COURSES);
      if (saved) {
        const parsed: Course[] = JSON.parse(saved);
        return INITIAL_COURSES.map((initCourse) => {
          const matched = parsed.find((c) => c.id === initCourse.id);
          if (!matched) return initCourse;
          return {
            ...matched,
            chapters: initCourse.chapters.length > 0 ? initCourse.chapters : (matched.chapters || [])
          };
        });
      }
    } catch (e) {
      console.warn('Error loading courses:', e);
    }
    return INITIAL_COURSES;
  });

  // Load questions with automatic merge of INITIAL_QUESTIONS
  const [questions, setQuestions] = useState<ExamQuestion[]>(() => {
    cleanupStorageQuota();
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.QUESTIONS);
      if (saved) {
        const parsed: ExamQuestion[] = JSON.parse(saved);
        const initialMap = new Map(INITIAL_QUESTIONS.map((q) => [q.id, q]));
        const merged = parsed.map((q) => {
          const base = initialMap.has(q.id) ? { ...initialMap.get(q.id)!, ...q } : q;
          return { ...base, question: cleanQuestionText(base.question) };
        });
        const existingIds = new Set(merged.map((q) => q.id));
        for (const initQ of INITIAL_QUESTIONS) {
          if (!existingIds.has(initQ.id)) {
            merged.push({ ...initQ, question: cleanQuestionText(initQ.question) });
          }
        }
        return merged;
      }
    } catch (e) {
      console.warn('Notice: Using default questions bank:', e);
    }
    return INITIAL_QUESTIONS.map((q) => ({ ...q, question: cleanQuestionText(q.question) }));
  });

  // Load videos
  const [videos, setVideos] = useState<VideoTutorial[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.VIDEOS);
    return saved ? JSON.parse(saved) : INITIAL_VIDEOS;
  });

  // Load payment submissions
  const [paymentSubmissions, setPaymentSubmissions] = useState<PaymentSubmission[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.PAYMENTS);
    return saved ? JSON.parse(saved) : INITIAL_PAYMENT_SUBMISSIONS;
  });

  // Load current student profile
  const [studentProfile, setStudentProfile] = useState<StudentProfile>(() => {
    const authAdmin = sessionStorage.getItem(STORAGE_KEYS.ADMIN_AUTH) === 'true' || localStorage.getItem('smart_study_admin_session') === 'true';
    const saved = localStorage.getItem(STORAGE_KEYS.STUDENT);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed === 'object') {
          const isUserAdminEmail = parsed.email && parsed.email.trim().toLowerCase() === ADMIN_EMAIL.toLowerCase();
          return {
            ...parsed,
            isUnlocked: authAdmin || isUserAdminEmail ? true : Boolean(parsed.isUnlocked)
          };
        }
      } catch {}
    }
    return {
      name: authAdmin ? 'Guduru Alemayehu' : 'Freshman Student',
      email: authAdmin ? ADMIN_EMAIL : 'student@university.edu.et',
      phone: '0953201048',
      isUnlocked: authAdmin ? true : false
    };
  });

  const [announcements, setAnnouncements] = useState<Announcement[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.ANNOUNCEMENTS);
    return saved ? JSON.parse(saved) : INITIAL_ANNOUNCEMENTS;
  });

  const [guides] = useState<GuideSection[]>(INITIAL_GUIDES);

  const [quizAttempts, setQuizAttempts] = useState<QuizAttempt[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.QUIZ_ATTEMPTS);
    return saved ? JSON.parse(saved) : [];
  });

  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.BOOKMARKS);
    return saved ? JSON.parse(saved) : ['math-1011', 'math-ch1', 'vid-math-1'];
  });

  const [tasks, setTasks] = useState<StudyTask[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.TASKS);
    return saved ? JSON.parse(saved) : [
      { id: 't1', title: 'Complete Calculus Limits practice set', courseCode: 'Math 1011', completed: false, priority: 'high' },
      { id: 't2', title: 'Watch Physics 2D Projectile tutorial', courseCode: 'Phys 1011', completed: false, priority: 'medium' },
      { id: 't3', title: 'Review Logic Fallacies Cheat Sheet', courseCode: 'LoCT 1011', completed: true, priority: 'low' }
    ];
  });

  const [gpaCourses, setGpaCourses] = useState<GPACourseItem[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.GPA_COURSES);
    return saved ? JSON.parse(saved) : DEFAULT_GPA_COURSES;
  });

  const [streamFilter, setStreamFilterState] = useState<StreamType>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.STREAM);
    return (saved as StreamType) || 'both';
  });

  const [activeTab, setActiveTab] = useState<string>('questions');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Authentication State for First-Entry Sign-In Page
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.IS_AUTHENTICATED);
    return saved === 'true';
  });

  const [showInstallPromptModal, setShowInstallPromptModal] = useState<boolean>(false);

  const [isAdmin, setIsAdmin] = useState<boolean>(() => {
    const auth = sessionStorage.getItem(STORAGE_KEYS.ADMIN_AUTH);
    if (auth === 'true') return true;
    const adminPerm = localStorage.getItem('smart_study_admin_session');
    if (adminPerm === 'true') return true;
    try {
      const savedStudent = localStorage.getItem(STORAGE_KEYS.STUDENT);
      if (savedStudent) {
        const parsed = JSON.parse(savedStudent);
        if (parsed.email && parsed.email.trim().toLowerCase() === ADMIN_EMAIL.toLowerCase()) {
          return true;
        }
      }
      const savedAuthUser = localStorage.getItem(STORAGE_KEYS.AUTH_USER);
      if (savedAuthUser) {
        const parsed = JSON.parse(savedAuthUser);
        if (parsed.email && parsed.email.trim().toLowerCase() === ADMIN_EMAIL.toLowerCase()) {
          return true;
        }
      }
    } catch {}
    const acc = localStorage.getItem(STORAGE_KEYS.CURRENT_ACCOUNT);
    if (acc === 'super-admin') return true;
    return false;
  });

  // Multi-Account & Student Profile State
  const [currentAccountId, setCurrentAccountId] = useState<string>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.CURRENT_ACCOUNT);
    if (saved) return saved;
    const auth = sessionStorage.getItem(STORAGE_KEYS.ADMIN_AUTH);
    if (auth === 'true' || localStorage.getItem('smart_study_admin_session') === 'true') return 'super-admin';
    return 'sample-student';
  });

  const [sampleStudentPaywallStatus, setSampleStudentPaywallStatusState] = useState<'locked' | 'pending' | 'verified'>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.SAMPLE_STUDENT_STATUS);
    return (saved as 'locked' | 'pending' | 'verified') || 'locked';
  });

  const [sampleStudentTutorialStep, setSampleStudentTutorialStepState] = useState<number>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.SAMPLE_STUDENT_STEP);
    return saved ? parseInt(saved, 10) : 2;
  });

  const [isSyncingSubmissions, setIsSyncingSubmissions] = useState<boolean>(false);

  // Cross-device synchronization effect for payment submissions and updates
  useEffect(() => {
    let isMounted = true;

    // Listen to local broadcast channel across browser tabs/windows
    const unsubscribe = subscribeToSyncEvents(
      (incomingSub) => {
        if (isMounted && incomingSub) {
          setPaymentSubmissions(prev => {
            if (prev.some(s => s.id === incomingSub.id)) return prev;
            return [incomingSub, ...prev];
          });
        }
      },
      () => {}
    );

    // Initial background fetch from cloud/serverless API
    const initialSync = async () => {
      try {
        const remotes = await fetchRemotePaymentSubmissions();
        if (isMounted && remotes && remotes.length > 0) {
          setPaymentSubmissions(prev => {
            const prevIds = new Set(prev.map(p => p.id));
            const newItems = remotes.filter(r => !prevIds.has(r.id));
            if (newItems.length === 0) return prev;
            return [...newItems, ...prev];
          });
        }
      } catch {
        // silent
      }
    };
    initialSync();

    // Background polling every 10 seconds to auto-receive remote mobile submissions
    const interval = setInterval(async () => {
      try {
        const remotes = await fetchRemotePaymentSubmissions();
        if (isMounted && remotes && remotes.length > 0) {
          setPaymentSubmissions(prev => {
            const prevIds = new Set(prev.map(p => p.id));
            const newItems = remotes.filter(r => !prevIds.has(r.id));
            if (newItems.length === 0) return prev;
            return [...newItems, ...prev];
          });
        }
      } catch {
        // silent
      }
    }, 10000);

    return () => {
      isMounted = false;
      unsubscribe();
      clearInterval(interval);
    };
  }, []);

  // Sync state to LocalStorage safely
  useEffect(() => {
    safeSetItem(STORAGE_KEYS.CURRENT_ACCOUNT, currentAccountId);
  }, [currentAccountId]);

  useEffect(() => {
    safeSetItem(STORAGE_KEYS.SAMPLE_STUDENT_STATUS, sampleStudentPaywallStatus);
  }, [sampleStudentPaywallStatus]);

  useEffect(() => {
    safeSetItem(STORAGE_KEYS.SAMPLE_STUDENT_STEP, sampleStudentTutorialStep.toString());
  }, [sampleStudentTutorialStep]);

  const currentAccount: UserAccount = useMemo(() => {
    const base = PRESET_ACCOUNTS.find(a => a.id === currentAccountId) || PRESET_ACCOUNTS[0];
    if (base.role === 'sample_student') {
      return {
        ...base,
        paywallStatus: sampleStudentPaywallStatus,
        tutorialStep: sampleStudentTutorialStep,
        isUnlocked: sampleStudentPaywallStatus === 'verified'
      };
    }
    return base;
  }, [currentAccountId, sampleStudentPaywallStatus, sampleStudentTutorialStep]);

  const switchAccount = (accountId: string) => {
    const target = PRESET_ACCOUNTS.find(a => a.id === accountId);
    if (!target) return;
    setCurrentAccountId(accountId);

    if (target.role === 'sample_student') {
      setIsAdmin(false);
      sessionStorage.setItem(STORAGE_KEYS.ADMIN_AUTH, 'false');
      setStudentProfile({
        name: target.name,
        email: target.email,
        phone: target.phone || '0911234567',
        isUnlocked: sampleStudentPaywallStatus === 'verified',
        submissionId: 'pay-demo-blen'
      });
    } else {
      setIsAdmin(true);
      sessionStorage.setItem(STORAGE_KEYS.ADMIN_AUTH, 'true');
    }
  };

  const setSampleStudentPaywallStatus = (status: 'locked' | 'pending' | 'verified') => {
    setSampleStudentPaywallStatusState(status);

    setPaymentSubmissions(prev =>
      prev.map(p => {
        if (
          p.id === 'pay-demo-blen' ||
          p.studentEmail.toLowerCase() === 'student.sample@smartstudy.edu.et' ||
          p.studentEmail.toLowerCase() === 'blen.tadesse@aau.edu.et' ||
          (studentProfile.email && p.studentEmail.toLowerCase() === studentProfile.email.toLowerCase())
        ) {
          return {
            ...p,
            status: status === 'verified' ? 'verified' : (status === 'pending' ? 'pending' : 'rejected'),
            verifiedAt: status === 'verified' ? new Date().toISOString() : undefined,
            adminNotes: status === 'verified'
              ? `Verified by Super Admin Guduru Alemayehu (${ADMIN_EMAIL})`
              : (status === 'pending' ? 'Awaiting 300 ETB verification by Super Admin Guduru Alemayehu' : 'Subscription paywall active / not verified')
          };
        }
        return p;
      })
    );

    if (status === 'verified') {
      setSampleStudentTutorialStepState(5);
    } else if (status === 'pending') {
      setSampleStudentTutorialStepState(4);
    } else {
      setSampleStudentTutorialStepState(2);
    }
  };

  const setSampleStudentTutorialStep = (step: number) => {
    const validStep = Math.max(1, Math.min(5, step));
    setSampleStudentTutorialStepState(validStep);
    if (validStep === 5) {
      setSampleStudentPaywallStatusState('verified');
    } else if (validStep === 4) {
      setSampleStudentPaywallStatusState('pending');
    } else {
      setSampleStudentPaywallStatusState('locked');
    }
  };

  const resetSampleStudentFlow = () => {
    setSampleStudentPaywallStatus('locked');
    setSampleStudentTutorialStep(2);
  };

  // Sync state to LocalStorage safely
  useEffect(() => {
    safeSetItem(STORAGE_KEYS.COURSES, JSON.stringify(courses));
  }, [courses]);

  useEffect(() => {
    safeSetItem(STORAGE_KEYS.QUESTIONS, JSON.stringify(questions));
  }, [questions]);

  useEffect(() => {
    safeSetItem(STORAGE_KEYS.VIDEOS, JSON.stringify(videos));
  }, [videos]);

  useEffect(() => {
    safeSetItem(STORAGE_KEYS.PAYMENTS, JSON.stringify(paymentSubmissions));
  }, [paymentSubmissions]);

  useEffect(() => {
    safeSetItem(STORAGE_KEYS.STUDENT, JSON.stringify(studentProfile));
  }, [studentProfile]);

  useEffect(() => {
    safeSetItem(STORAGE_KEYS.ANNOUNCEMENTS, JSON.stringify(announcements));
  }, [announcements]);

  useEffect(() => {
    safeSetItem(STORAGE_KEYS.QUIZ_ATTEMPTS, JSON.stringify(quizAttempts));
  }, [quizAttempts]);

  useEffect(() => {
    safeSetItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(bookmarks));
  }, [bookmarks]);

  useEffect(() => {
    safeSetItem(STORAGE_KEYS.TASKS, JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    safeSetItem(STORAGE_KEYS.GPA_COURSES, JSON.stringify(gpaCourses));
  }, [gpaCourses]);

  const setStreamFilter = (stream: StreamType) => {
    setStreamFilterState(stream);
    safeSetItem(STORAGE_KEYS.STREAM, stream);
  };

  // Student Profile Updates
  const updateStudentProfile = (partial: Partial<StudentProfile>) => {
    setStudentProfile(prev => ({ ...prev, ...partial }));
  };

  const toggleStudentUnlock = () => {
    setStudentProfile(prev => ({
      ...prev,
      isUnlocked: !prev.isUnlocked,
      unlockedAt: !prev.isUnlocked ? new Date().toISOString() : undefined
    }));
  };

  const unlockAllForAdmin = () => {
    setIsAdmin(true);
    sessionStorage.setItem(STORAGE_KEYS.ADMIN_AUTH, 'true');
    localStorage.setItem('smart_study_admin_session', 'true');
    setCurrentAccountId('super-admin');
    safeSetItem(STORAGE_KEYS.CURRENT_ACCOUNT, 'super-admin');
    setStudentProfile(prev => ({
      ...prev,
      name: prev.name && prev.name !== 'Freshman Student' ? prev.name : 'Guduru Alemayehu',
      email: ADMIN_EMAIL,
      isUnlocked: true,
      unlockedAt: new Date().toISOString()
    }));
  };

  // Student Payment Submission
  const addPaymentSubmission = (data: {
    studentName: string;
    studentEmail: string;
    studentPhone: string;
    paymentMethod: 'CBE' | 'Telebirr';
    accountOrPhoneUsed?: string;
    transactionRef: string;
    screenshotUrl: string;
  }): PaymentSubmission => {
    const syncCode = generateSyncCode();
    const newSubmission: PaymentSubmission = {
      id: 'sub-' + Date.now(),
      studentName: data.studentName,
      studentEmail: data.studentEmail,
      studentPhone: data.studentPhone,
      paymentMethod: data.paymentMethod,
      accountOrPhoneUsed: data.accountOrPhoneUsed,
      transactionRef: data.transactionRef,
      amount: 300,
      screenshotUrl: data.screenshotUrl,
      submittedAt: new Date().toISOString(),
      status: 'pending',
      adminNotes: 'Awaiting review from gudurualemayehu29@gmail.com',
      syncCode,
      deliveryChannel: 'cloud_sync'
    };

    setPaymentSubmissions(prev => [newSubmission, ...prev]);

    // Dispatch to cloud relay & Vercel API asynchronously for multi-device delivery
    dispatchPaymentSubmissionToCloud(newSubmission).catch(err => {
      console.warn('Cross-device dispatch notification:', err);
    });

    // Link submission to current student profile
    setStudentProfile(prev => ({
      ...prev,
      name: data.studentName || prev.name,
      email: data.studentEmail || prev.email,
      phone: data.studentPhone || prev.phone,
      submissionId: newSubmission.id
    }));

    return newSubmission;
  };

  // Manual / On-demand Cloud Sync for Admin
  const syncRemoteSubmissions = async (): Promise<number> => {
    setIsSyncingSubmissions(true);
    try {
      const remotes = await fetchRemotePaymentSubmissions();
      let newCount = 0;
      if (remotes && remotes.length > 0) {
        setPaymentSubmissions(prev => {
          const prevMap = new Map(prev.map(p => [p.id, p]));
          let changed = false;
          remotes.forEach(r => {
            if (!prevMap.has(r.id)) {
              prevMap.set(r.id, r);
              newCount++;
              changed = true;
            }
          });
          return changed ? Array.from(prevMap.values()) : prev;
        });
      }
      return newCount;
    } finally {
      setIsSyncingSubmissions(false);
    }
  };

  // Payment verification by admin
  const verifyPaymentSubmission = (id: string, notes?: string) => {
    setPaymentSubmissions(prev =>
      prev.map(sub => {
        if (sub.id === id) {
          if (
            sub.id === 'pay-demo-blen' ||
            sub.studentEmail.toLowerCase() === 'student.sample@smartstudy.edu.et' ||
            sub.studentEmail.toLowerCase() === 'blen.tadesse@aau.edu.et' ||
            (studentProfile.email && sub.studentEmail.toLowerCase() === studentProfile.email.toLowerCase())
          ) {
            setSampleStudentPaywallStatusState('verified');
            safeSetItem(STORAGE_KEYS.SAMPLE_STUDENT_STATUS, 'verified');
            setSampleStudentTutorialStepState(5);
            safeSetItem(STORAGE_KEYS.SAMPLE_STUDENT_STEP, '5');
          }
          return {
            ...sub,
            status: 'verified' as const,
            verifiedAt: new Date().toISOString(),
            adminNotes: notes || `Verified by Super Admin Guduru Alemayehu (${ADMIN_EMAIL})`
          };
        }
        return sub;
      })
    );

    // If verified submission matches student, unlock access
    setPaymentSubmissions(currentList => {
      const targetSub = currentList.find(s => s.id === id);
      if (targetSub) {
        setStudentProfile(prev => {
          if (
            prev.submissionId === id ||
            prev.email.toLowerCase() === targetSub.studentEmail.toLowerCase() ||
            prev.phone === targetSub.studentPhone
          ) {
            return {
              ...prev,
              isUnlocked: true,
              unlockedAt: new Date().toISOString()
            };
          }
          return prev;
        });
      }
      return currentList;
    });
  };

  const rejectPaymentSubmission = (id: string, reason?: string) => {
    setPaymentSubmissions(prev =>
      prev.map(sub => {
        if (sub.id === id) {
          return {
            ...sub,
            status: 'rejected' as const,
            adminNotes: reason || 'Screenshot or transaction reference could not be validated. Please contact CBE/Telebirr support.'
          };
        }
        return sub;
      })
    );
  };

  const deletePaymentSubmission = (id: string) => {
    setPaymentSubmissions(prev => prev.filter(s => s.id !== id));
  };

  // Admin auth
  const adminLogin = (credential: { email?: string; pinOrPassword?: string } | string): boolean => {
    const enteredPin = typeof credential === 'string' ? credential : credential.pinOrPassword || '';
    const enteredEmail = typeof credential === 'string' ? '' : (credential.email || '').trim().toLowerCase();
    const storedPin = localStorage.getItem(STORAGE_KEYS.ADMIN_PIN) || DEFAULT_PIN;

    // Check if logging in with email gudurualemayehu29@gmail.com OR default admin PIN
    if (
      (enteredEmail === ADMIN_EMAIL.toLowerCase() && (enteredPin === storedPin || enteredPin === 'admin' || enteredPin === '1234')) ||
      enteredEmail === ADMIN_EMAIL.toLowerCase() ||
      enteredPin === storedPin ||
      enteredPin === '1234'
    ) {
      setIsAdmin(true);
      sessionStorage.setItem(STORAGE_KEYS.ADMIN_AUTH, 'true');
      localStorage.setItem('smart_study_admin_session', 'true');
      setCurrentAccountId('super-admin');
      safeSetItem(STORAGE_KEYS.CURRENT_ACCOUNT, 'super-admin');
      setStudentProfile(prev => ({
        ...prev,
        name: prev.name && prev.name !== 'Freshman Student' ? prev.name : 'Guduru Alemayehu',
        email: ADMIN_EMAIL,
        isUnlocked: true,
        unlockedAt: new Date().toISOString()
      }));
      return true;
    }
    return false;
  };

  const adminLogout = () => {
    setIsAdmin(false);
    sessionStorage.removeItem(STORAGE_KEYS.ADMIN_AUTH);
    localStorage.removeItem('smart_study_admin_session');
    setCurrentAccountId('sample-student');
    safeSetItem(STORAGE_KEYS.CURRENT_ACCOUNT, 'sample-student');
  };

  const setAdminPin = (newPin: string) => {
    safeSetItem(STORAGE_KEYS.ADMIN_PIN, newPin);
  };

  const signIn = (data: SignInData) => {
    const isAdminEmail = data.email.trim().toLowerCase() === ADMIN_EMAIL.toLowerCase();
    const isExplicitAdmin = data.role === 'admin' || isAdminEmail;

    if (isExplicitAdmin) {
      setIsAdmin(true);
      sessionStorage.setItem(STORAGE_KEYS.ADMIN_AUTH, 'true');
      localStorage.setItem('smart_study_admin_session', 'true');
      setCurrentAccountId('super-admin');
      safeSetItem(STORAGE_KEYS.CURRENT_ACCOUNT, 'super-admin');
      setIsAuthenticated(true);
      safeSetItem(STORAGE_KEYS.IS_AUTHENTICATED, 'true');
      safeSetItem(STORAGE_KEYS.AUTH_USER, JSON.stringify(data));
      setStudentProfile(prev => ({
        ...prev,
        name: data.name?.trim() || 'Guduru Alemayehu',
        email: data.email?.trim() || ADMIN_EMAIL,
        isUnlocked: true,
        unlockedAt: new Date().toISOString()
      }));
      setActiveTab('questions');
    } else {
      setIsAdmin(false);
      sessionStorage.removeItem(STORAGE_KEYS.ADMIN_AUTH);
      localStorage.removeItem('smart_study_admin_session');
      setCurrentAccountId('sample-student');
      safeSetItem(STORAGE_KEYS.CURRENT_ACCOUNT, 'sample-student');
      setStudentProfile(prev => ({
        ...prev,
        name: data.name.trim(),
        email: data.email.trim(),
        phone: data.phone?.trim() || prev.phone,
        university: data.university || prev.university,
        isUnlocked: false
      }));
      if (data.stream) {
        setStreamFilterState(data.stream);
        safeSetItem(STORAGE_KEYS.STREAM, data.stream);
      }
      setIsAuthenticated(true);
      safeSetItem(STORAGE_KEYS.IS_AUTHENTICATED, 'true');
      safeSetItem(STORAGE_KEYS.AUTH_USER, JSON.stringify(data));
      setActiveTab('questions');
      // Trigger the install app prompt modal when entering the app
      setShowInstallPromptModal(true);
    }
  };

  const signOut = () => {
    setIsAuthenticated(false);
    setIsAdmin(false);
    safeSetItem(STORAGE_KEYS.IS_AUTHENTICATED, 'false');
    sessionStorage.removeItem(STORAGE_KEYS.ADMIN_AUTH);
    setShowInstallPromptModal(false);
  };

  // Video CRUD
  const addVideo = (video: VideoTutorial) => {
    setVideos(prev => [video, ...prev]);
  };

  const updateVideo = (updated: VideoTutorial) => {
    setVideos(prev => prev.map(v => v.id === updated.id ? updated : v));
  };

  const deleteVideo = (id: string) => {
    setVideos(prev => prev.filter(v => v.id !== id));
  };

  // Courses CRUD
  const addCourse = (course: Course) => {
    setCourses(prev => [course, ...prev]);
  };

  const updateCourse = (updated: Course) => {
    setCourses(prev => prev.map(c => c.id === updated.id ? updated : c));
  };

  const deleteCourse = (id: string) => {
    setCourses(prev => prev.filter(c => c.id !== id));
    setQuestions(prev => prev.filter(q => q.courseId !== id));
    setVideos(prev => prev.filter(v => v.courseId !== id));
  };

  // Chapter CRUD
  const addChapter = (courseId: string, chapter: Chapter) => {
    setCourses(prev => prev.map(c => {
      if (c.id === courseId) {
        return {
          ...c,
          chapters: [...c.chapters, chapter]
        };
      }
      return c;
    }));
  };

  const updateChapter = (courseId: string, chapter: Chapter) => {
    setCourses(prev => prev.map(c => {
      if (c.id === courseId) {
        return {
          ...c,
          chapters: c.chapters.map(ch => ch.id === chapter.id ? chapter : ch)
        };
      }
      return c;
    }));
  };

  const deleteChapter = (courseId: string, chapterId: string) => {
    setCourses(prev => prev.map(c => {
      if (c.id === courseId) {
        return {
          ...c,
          chapters: c.chapters.filter(ch => ch.id !== chapterId)
        };
      }
      return c;
    }));
  };

  // Questions CRUD
  const addQuestion = (question: ExamQuestion) => {
    const cleaned: ExamQuestion = {
      ...question,
      question: cleanQuestionText(question.question)
    };
    setQuestions(prev => [cleaned, ...prev]);
  };

  const bulkAddQuestions = (newQuestions: ExamQuestion[]) => {
    const cleaned = newQuestions.map(q => ({
      ...q,
      question: cleanQuestionText(q.question)
    }));
    setQuestions(prev => [...cleaned, ...prev]);
  };

  const updateQuestion = (updated: ExamQuestion) => {
    const cleaned: ExamQuestion = {
      ...updated,
      question: cleanQuestionText(updated.question)
    };
    setQuestions(prev => prev.map(q => q.id === updated.id ? cleaned : q));
  };

  const deleteQuestion = (id: string) => {
    setQuestions(prev => prev.filter(q => q.id !== id));
  };

  // Announcements CRUD
  const addAnnouncement = (item: Announcement) => {
    setAnnouncements(prev => [item, ...prev]);
  };

  const updateAnnouncement = (updated: Announcement) => {
    setAnnouncements(prev => prev.map(a => a.id === updated.id ? updated : a));
  };

  const deleteAnnouncement = (id: string) => {
    setAnnouncements(prev => prev.filter(a => a.id !== id));
  };

  // Quiz Attempts
  const saveQuizAttempt = (attempt: QuizAttempt) => {
    setQuizAttempts(prev => [attempt, ...prev.slice(0, 49)]); // keep last 50
  };

  // Bookmarks
  const toggleBookmark = (id: string) => {
    setBookmarks(prev => {
      if (prev.includes(id)) {
        return prev.filter(b => b !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const isBookmarked = (id: string) => bookmarks.includes(id);

  // Tasks
  const addTask = (title: string, courseCode: string, priority: 'low' | 'medium' | 'high') => {
    const newTask: StudyTask = {
      id: 'task-' + Date.now(),
      title,
      courseCode,
      completed: false,
      priority
    };
    setTasks(prev => [newTask, ...prev]);
  };

  const toggleTask = (id: string) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id: string) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  const updateGpaCourses = (updated: GPACourseItem[]) => {
    setGpaCourses(updated);
  };

  // Export / Import
  const exportDataJSON = (): string => {
    const exportBundle = {
      version: '2.0',
      exportedAt: new Date().toISOString(),
      adminEmail: ADMIN_EMAIL,
      courses,
      questions,
      videos,
      paymentSubmissions,
      announcements,
      gpaCourses
    };
    return JSON.stringify(exportBundle, null, 2);
  };

  const importDataJSON = (jsonStr: string): { success: boolean; message: string } => {
    try {
      const data = JSON.parse(jsonStr);
      if (!data || typeof data !== 'object') {
        return { success: false, message: 'Invalid JSON file format.' };
      }
      if (Array.isArray(data.courses)) setCourses(data.courses);
      if (Array.isArray(data.questions)) {
        const cleanedQuestions = data.questions.map((q: any) => ({
          ...q,
          question: cleanQuestionText(q.question)
        }));
        setQuestions(cleanedQuestions);
      }
      if (Array.isArray(data.videos)) setVideos(data.videos);
      if (Array.isArray(data.paymentSubmissions)) setPaymentSubmissions(data.paymentSubmissions);
      if (Array.isArray(data.announcements)) setAnnouncements(data.announcements);
      if (Array.isArray(data.gpaCourses)) setGpaCourses(data.gpaCourses);

      return { success: true, message: 'Smart Study Tutorial curriculum data restored successfully!' };
    } catch (e) {
      return { success: false, message: 'Failed to parse JSON: ' + (e as Error).message };
    }
  };

  const resetQuestionsToDefault = () => {
    setQuestions(INITIAL_QUESTIONS);
    safeSetItem(STORAGE_KEYS.QUESTIONS, JSON.stringify(INITIAL_QUESTIONS));
  };

  const resetAllToDefault = () => {
    setCourses(INITIAL_COURSES);
    setQuestions(INITIAL_QUESTIONS);
    setVideos(INITIAL_VIDEOS);
    setPaymentSubmissions(INITIAL_PAYMENT_SUBMISSIONS);
    setAnnouncements(INITIAL_ANNOUNCEMENTS);
    setGpaCourses(DEFAULT_GPA_COURSES);
    localStorage.removeItem(STORAGE_KEYS.COURSES);
    localStorage.removeItem(STORAGE_KEYS.QUESTIONS);
    localStorage.removeItem(STORAGE_KEYS.VIDEOS);
    localStorage.removeItem(STORAGE_KEYS.PAYMENTS);
    localStorage.removeItem(STORAGE_KEYS.ANNOUNCEMENTS);
    localStorage.removeItem(STORAGE_KEYS.GPA_COURSES);
  };

  const isEffectiveAdmin = useMemo(() => {
    if (isAdmin) return true;
    if (currentAccount.role === 'super_admin' || currentAccount.role === 'admin') return true;
    if (studentProfile.email && studentProfile.email.trim().toLowerCase() === ADMIN_EMAIL.toLowerCase()) return true;
    if (sessionStorage.getItem(STORAGE_KEYS.ADMIN_AUTH) === 'true') return true;
    if (localStorage.getItem('smart_study_admin_session') === 'true') return true;
    return false;
  }, [isAdmin, currentAccount.role, studentProfile.email]);

  const isUnlockedEffective = useMemo(() => {
    // If Admin, ALL questions, past exams, solutions, and masterclasses are unconditionally 100% UNLOCKED!
    if (isEffectiveAdmin) return true;
    if (studentProfile.isUnlocked) return true;
    if (studentProfile.email && studentProfile.email.trim().toLowerCase() === ADMIN_EMAIL.toLowerCase()) return true;
    if (currentAccount.role === 'sample_student') {
      return sampleStudentPaywallStatus === 'verified';
    }
    return false;
  }, [isEffectiveAdmin, studentProfile.isUnlocked, studentProfile.email, currentAccount.role, sampleStudentPaywallStatus]);

  return (
    <AppContext.Provider
      value={{
        isAuthenticated,
        signIn,
        signOut,
        showInstallPromptModal,
        setShowInstallPromptModal,
        courses,
        questions,
        videos,
        paymentSubmissions,
        studentProfile,
        isUnlocked: isUnlockedEffective,
        announcements,
        guides,
        quizAttempts,
        bookmarks,
        tasks,
        gpaCourses,
        streamFilter,
        setStreamFilter,
        activeTab,
        setActiveTab,
        searchQuery,
        setSearchQuery,
        accounts: PRESET_ACCOUNTS,
        currentAccount,
        switchAccount,
        sampleStudentPaywallStatus,
        setSampleStudentPaywallStatus,
        sampleStudentTutorialStep,
        setSampleStudentTutorialStep,
        resetSampleStudentFlow,
        updateStudentProfile,
        toggleStudentUnlock,
        unlockAllForAdmin,
        addPaymentSubmission,
        isAdmin: isEffectiveAdmin,
        adminEmail: ADMIN_EMAIL,
        adminLogin,
        adminLogout,
        setAdminPin,
        verifyPaymentSubmission,
        rejectPaymentSubmission,
        deletePaymentSubmission,
        syncRemoteSubmissions,
        isSyncingSubmissions,
        addVideo,
        updateVideo,
        deleteVideo,
        addCourse,
        updateCourse,
        deleteCourse,
        addChapter,
        updateChapter,
        deleteChapter,
        addQuestion,
        bulkAddQuestions,
        updateQuestion,
        deleteQuestion,
        addAnnouncement,
        updateAnnouncement,
        deleteAnnouncement,
        saveQuizAttempt,
        toggleBookmark,
        isBookmarked,
        addTask,
        toggleTask,
        deleteTask,
        updateGpaCourses,
        exportDataJSON,
        importDataJSON,
        resetAllToDefault,
        resetQuestionsToDefault
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within an AppProvider');
  return context;
};

