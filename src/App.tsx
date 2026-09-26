import React, { useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
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
import { BookOpen } from 'lucide-react';

const MainContent: React.FC = () => {
  const {
    activeTab,
    isAdmin,
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
        {activeTab === 'admin' && (isAdmin ? <AdminPortal /> : <QuestionsTab />)}
        {activeTab === 'unlock' && <UnlockAccessTab />}
        {!['questions', 'videos', 'notes', 'chat', 'ai-tutor', 'admin', 'unlock'].includes(activeTab) && <QuestionsTab />}
      </main>

      {/* Global Quick Search Modal */}
      <QuickSearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Clean Footer showing only Smart Study Tutorial Freshman */}
      <footer className="bg-[#070b14] border-t border-[#182138] mt-12 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-sm">
              <BookOpen className="w-3.5 h-3.5" />
            </div>
            <span className="font-bold text-white text-sm tracking-wide">
              Smart Study Tutorial Freshman
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
