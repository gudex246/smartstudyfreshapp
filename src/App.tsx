import React, { useState } from 'react';
import { AppProvider, useApp, ADMIN_EMAIL } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { OfflineIndicator } from './components/OfflineIndicator';
import { QuickSearchModal } from './components/QuickSearchModal';
import { QuestionsTab } from './components/QuestionsTab';
import { VideosTab } from './components/VideosTab';
import { NotesTab } from './components/NotesTab';
import { AITutorTab } from './components/AITutorTab';
import { AdminPortal } from './components/AdminPortal';
import { UnlockAccessTab } from './components/UnlockAccessTab';
import { ChatTab } from './components/ChatTab';
import { SignInPage } from './components/SignInPage';
import { AppInstallModal } from './components/AppInstallModal';
import { BookOpen, Shield, Sparkles, CheckCircle2, Phone, CreditCard } from 'lucide-react';

const MainContent: React.FC = () => {
  const {
    activeTab,
    setActiveTab,
    isUnlocked,
    currentAccount,
    isAuthenticated,
    showInstallPromptModal,
    setShowInstallPromptModal,
    studentProfile
  } = useApp();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // If user has not signed in yet, render the Ethiopian Freshman Sign In page first!
  if (!isAuthenticated) {
    return <SignInPage />;
  }

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-200 flex flex-col font-sans selection:bg-indigo-600 selection:text-white">
      {/* Offline Status Tracker */}
      <OfflineIndicator />

      {/* Main Top Navigation Header (Matching Screenshot) */}
      <Navbar onOpenSearch={() => setIsSearchOpen(true)} />

      {/* Onboarding App Install Modal (Appears when student enters the app) */}
      <AppInstallModal
        isOpen={showInstallPromptModal}
        onClose={() => setShowInstallPromptModal(false)}
        studentName={studentProfile.name}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {activeTab === 'questions' && <QuestionsTab />}
        {activeTab === 'videos' && <VideosTab />}
        {activeTab === 'notes' && <NotesTab />}
        {activeTab === 'chat' && <ChatTab />}
        {activeTab === 'ai-tutor' && <AITutorTab />}
        {activeTab === 'admin' && <AdminPortal />}
        {activeTab === 'unlock' && <UnlockAccessTab />}
      </main>

      {/* Global Quick Search Modal */}
      <QuickSearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Sleek Dark Footer with Ethiopia Payment Credentials & Admin Info */}
      <footer className="bg-[#070b14] border-t border-[#182138] mt-12 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-3 text-center md:text-left">
            <div className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-sm">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-white text-sm">
                Smart Study Tutorial Freshman
              </span>
              <div className="flex flex-wrap items-center gap-2 mt-0.5 text-[11px] text-slate-400">
                <span className="text-amber-400 font-mono font-bold">300 ETB Access</span>
                <span>•</span>
                <span>CBE: <strong className="text-slate-200 font-mono">1000521750255</strong></span>
                <span>•</span>
                <span>Telebirr: <strong className="text-slate-200 font-mono">0953201048</strong></span>
                <span>(Guduru Alemayehu)</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            <button
              onClick={() => setActiveTab('unlock')}
              className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1 transition"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isUnlocked ? '300 ETB Verified' : 'Submit 300 ETB Screenshot'}</span>
            </button>
            <span>•</span>
            <button
              onClick={() => setActiveTab('admin')}
              className="flex items-center gap-1 text-slate-300 hover:text-white transition font-medium"
            >
              <Shield className="w-3.5 h-3.5 text-amber-400" />
              <span>Admin ({ADMIN_EMAIL})</span>
            </button>
            <span>•</span>
            <span className="text-emerald-400 flex items-center gap-1 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" /> PWA Ready
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}
