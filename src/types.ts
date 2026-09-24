export type StreamType = 'natural' | 'social' | 'both';

export interface Chapter {
  id: string;
  courseId: string;
  number: number;
  title: string;
  summary: string;
  content: string; // Markdown or structured notes
  keyFormulas?: string[];
  readTimeMinutes: number;
  isPremium?: boolean;
}

export interface Course {
  id: string;
  code: string;
  name: string;
  stream: StreamType;
  creditHours: number;
  semester: 1 | 2;
  description: string;
  color: string;
  iconName: string;
  chapters: Chapter[];
  isPremium?: boolean;
}

export interface VideoTutorial {
  id: string;
  courseId: string;
  courseCode: string;
  title: string;
  description: string;
  videoUrl: string; // YouTube embed URL or direct video URL
  duration: string; // e.g. "32:45"
  topic: string;
  instructor: string;
  isPremium: boolean;
  views?: number;
  addedAt?: string;
}

export interface PaymentSubmission {
  id: string;
  studentName: string;
  studentEmail: string;
  studentPhone: string;
  paymentMethod: 'CBE' | 'Telebirr';
  accountOrPhoneUsed?: string;
  transactionRef: string; // e.g., CBE transaction code or Telebirr SMS ref
  amount: number; // 300 ETB
  screenshotUrl: string; // Data URL or image link
  submittedAt: string;
  status: 'pending' | 'verified' | 'rejected';
  verifiedAt?: string;
  adminNotes?: string;
  syncCode?: string; // 6-digit reference for instant manual lookup
  deliveryChannel?: 'cloud_sync' | 'telegram' | 'direct';
}

export type ChatChannel = 'general' | 'physics' | 'math' | 'logic' | 'geog-econ' | 'admin-help';

export interface ChatMessage {
  id: string;
  senderName: string;
  senderRole: 'student' | 'admin';
  senderEmail?: string;
  university?: string;
  channel: ChatChannel;
  text: string;
  timestamp: string;
  avatarColor?: string;
  likes?: number;
}

export interface StudentProfile {
  name: string;
  email: string;
  phone: string;
  isUnlocked: boolean;
  unlockedAt?: string;
  submissionId?: string;
}

export interface ExamQuestion {
  id: string;
  courseId: string;
  courseCode: string;
  year?: string;
  examType: 'midterm' | 'final' | 'model';
  question: string;
  options: string[]; // options
  correctAnswer: number; // 0-based index
  explanation: string;
  explanationAmharic?: string;
  explanationAfaanOromo?: string;
  difficulty: 'easy' | 'medium' | 'hard';
  isPremium?: boolean;
  topic?: string;
  points?: number;
  hint?: string;
  questionType?: 'true_false' | 'multiple_choice' | 'matching' | 'workout';
}

export interface QuizAttempt {
  id: string;
  courseId: string;
  courseName: string;
  date: string;
  score: number;
  totalQuestions: number;
  percentage: number;
  timeSpentSeconds: number;
  userAnswers: {
    questionId: string;
    selectedOption: number;
    isCorrect: boolean;
  }[];
}

export interface Announcement {
  id: string;
  title: string;
  date: string;
  category: 'academic' | 'exam' | 'registration' | 'orientation';
  priority: 'normal' | 'high' | 'urgent';
  content: string;
}

export interface GuideSection {
  id: string;
  category: 'transition' | 'academics' | 'placement' | 'dorm' | 'wellness';
  title: string;
  subtitle: string;
  icon: string;
  readTime: string;
  content: string[];
  tips: string[];
}

export interface GPACourseItem {
  id: string;
  code: string;
  name: string;
  creditHours: number;
  grade: string; // 'A+', 'A', etc.
  semester: 1 | 2;
}

export interface StudyTask {
  id: string;
  title: string;
  courseCode: string;
  completed: boolean;
  dueDate?: string;
  priority: 'low' | 'medium' | 'high';
}

export type UserRole = 'super_admin' | 'admin' | 'sample_student';

export interface UserAccount {
  id: string;
  role: UserRole;
  name: string;
  email: string;
  phone?: string;
  university?: string;
  badge: string;
  badgeClass: string;
  avatarText: string;
  avatarUrl?: string;
  description: string;
  isUnlocked: boolean;
  paywallStatus: 'locked' | 'pending' | 'verified';
  tutorialStep: number;
}

export interface SignInData {
  name: string;
  email: string;
  phone?: string;
  university?: string;
  stream?: StreamType;
  role?: 'student' | 'admin';
}
