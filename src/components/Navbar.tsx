import React, { useState } from 'react';
import {
  BookOpen,
  Video,
  FileText,
  Bot,
  Shield,
  Wifi,
  ChevronDown,
  Sparkles,
  CheckCircle2,
  Lock,
  Search,
  LogOut,
  ExternalLink,
  WifiOff,
  MessageSquare
} from 'lucide-react';
import { useApp, ADMIN_EMAIL } from '../context/AppContext';
import { PWAInstallButton } from './PWAInstallButton';
import { useOnlineStatus } from '../hooks/useOnlineStatus';

interface NavbarProps {
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch }) => {
  const {
    activeTab,
    setActiveTab,
    isAdmin,
    adminLogout,
    isUnlocked,
    unlockAllForAdmin,
    paymentSubmissions,
    videos,
    accounts,
    currentAccount,
    switchAccount,
    sampleStudentPaywallStatus,
    setSampleStudentPaywallStatus,
    signOut,
    studentProfile
  } = useApp();

  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const isOnline = useOnlineStatus();
  const pendingPaymentsCount = paymentSubmissions.filter((p) => p.status === 'pending').length;

  const navItems = [
    {
      id: 'questions',
      label: 'Questions',
      icon: BookOpen,
      badge: null
    },
    {
      id: 'videos',
      label: 'Videos',
      icon: Video,
      badge: videos.length > 0 ? `${videos.length}` : null
    },
    {
      id: 'notes',
      label: 'Notes',
      icon: FileText,
      badge: null
    },
    {
      id: 'chat',
      label: 'Community Chat',
      icon: MessageSquare,
      badge: 'LIVE'
    },
    {
      id: 'ai-tutor',
      label: 'AI Tutor',
      icon: Bot,
      isAi: true
    },
    {
      id: 'admin',
      label: 'Admin Panel',
      icon: Shield,
      isAdminBadge: true,
      pendingCount: pendingPaymentsCount
    }
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#090d16]/95 backdrop-blur-md border-b border-[#182138] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-2 sm:gap-4">
          {/* 1. Left: Brand Logo & Title (Matching Screenshot) */}
          <div
            id="brand-logo-btn"
            onClick={() => setActiveTab('questions')}
            className="flex items-center gap-3 cursor-pointer select-none shrink-0"
          >
            {/* Purple rounded icon with open book */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#4f46e5] flex items-center justify-center text-white shadow-md shadow-indigo-600/30">
              <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-white">
                  Smart Study
                </span>
                <span className="bg-[#4338ca] text-indigo-100 text-[10px] font-bold px-1.5 py-0.5 rounded-md uppercase tracking-wider">
                  PWA
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-400 font-medium leading-none mt-0.5">
                Tutorial & Practice Portal
              </p>
            </div>
          </div>

          {/* 2. Center: Navigation Tabs (Matching Screenshot) */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;

              return (
                <button
                  key={item.id}
                  id={`tab-${item.id}`}
                  onClick={() => setActiveTab(item.id)}
                  className={`relative flex items-center gap-2 px-3.5 lg:px-4 py-2 rounded-xl text-xs lg:text-sm font-semibold transition-all select-none ${
                    isActive
                      ? 'bg-[#4f46e5] text-white shadow-md shadow-indigo-600/30 font-bold'
                      : 'text-slate-400 hover:text-white hover:bg-[#12192c]'
                  }`}
                >
                  <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                  <span>{item.label}</span>

                  {/* AI dot indicator */}
                  {item.isAi && (
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  )}

                  {/* Yellow ADMIN badge on Admin Panel tab */}
                  {item.isAdminBadge && (
                    <span className="bg-amber-400 text-slate-950 text-[9px] font-black px-1.5 py-0.2 rounded font-mono">
                      ADMIN
                    </span>
                  )}

                  {/* Pending payments notification dot */}
                  {item.pendingCount && item.pendingCount > 0 ? (
                    <span className="px-1.5 py-0.2 bg-amber-400 text-slate-950 rounded-full font-black text-[9px] font-mono">
                      {item.pendingCount}
                    </span>
                  ) : null}
                </button>
              );
            })}
          </nav>

          {/* 3. Right: Online Badge + Admin Profile Pill (Matching Screenshot) */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick 300 ETB Unlock Button for students */}
            {!isUnlocked && (
              <button
                onClick={() => setActiveTab('unlock')}
                className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-md transition"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Unlock (300 ETB)</span>
              </button>
            )}

            {/* PWA Install Button */}
            <div className="flex items-center">
              <PWAInstallButton />
            </div>

            {/* "Online" / "Offline Ready" status pill with real connectivity indicator */}
            {isOnline ? (
              <div
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#062c21] border border-[#0d5f47] text-[#34d399] text-xs font-semibold select-none shadow-xs"
                title="Connected to internet — Live sync & updates active"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <Wifi className="w-3.5 h-3.5 text-emerald-400 ml-[-4px]" />
                <span>Online</span>
              </div>
            ) : (
              <div
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1e1505] border border-amber-600/70 text-amber-300 text-xs font-semibold select-none shadow-xs"
                title="Offline Mode — All courses, notes, exams & quizzes are cached and ready to use offline"
              >
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <WifiOff className="w-3.5 h-3.5 text-amber-400 ml-[-4px]" />
                <span>Offline Ready</span>
              </div>
            )}

            {/* User Profile Pill */}
            <div className="relative">
              <button
                id="user-profile-menu-btn"
                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                className={`flex items-center gap-2.5 px-3 py-1.5 rounded-xl border transition text-left ${
                  isAdmin
                    ? 'bg-amber-950/40 border-amber-500/50 hover:border-amber-400'
                    : 'bg-[#0f172a] border-[#1e293b] hover:border-slate-600'
                }`}
              >
                {/* Avatar with status indicator */}
                <div className="relative">
                  <div
                    className={`w-8 h-8 rounded-full border flex items-center justify-center font-bold text-xs ${
                      isAdmin
                        ? 'bg-amber-500 text-slate-950 font-black border-amber-300'
                        : 'bg-indigo-700 text-white border-indigo-400'
                    }`}
                  >
                    {isAdmin
                      ? 'AD'
                      : (studentProfile.name ? studentProfile.name.slice(0, 2).toUpperCase() : 'ST')}
                  </div>
                  <span
                    className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full ring-2 ring-[#0f172a] ${
                      isAdmin
                        ? 'bg-amber-400'
                        : isUnlocked
                        ? 'bg-emerald-400'
                        : 'bg-amber-400'
                    }`}
                  />
                </div>

                <div className="hidden sm:block leading-tight">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-white max-w-[120px] truncate">
                      {isAdmin ? 'Administrator' : (studentProfile.name || 'Freshman Student')}
                    </span>
                    <span className={`text-[9px] font-black px-1.5 py-0.2 rounded-sm uppercase tracking-wide ${
                      isAdmin
                        ? 'bg-amber-400 text-slate-950'
                        : isUnlocked
                        ? 'bg-emerald-400 text-slate-950'
                        : 'bg-slate-700 text-slate-200'
                    }`}>
                      {isAdmin ? 'ADMIN' : (isUnlocked ? 'PRO 300 ETB' : 'FREE PREVIEW')}
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono block max-w-[140px] truncate">
                    {isAdmin ? 'admin@smartstudy.edu.et' : (studentProfile.email || 'student@university.edu.et')}
                  </span>
                </div>

                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {/* Profile Dropdown */}
              {profileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-[#0f172a] border border-[#1e293b] rounded-2xl shadow-2xl p-3 space-y-3 z-50 animate-in fade-in-50">
                  {/* Active Account Summary */}
                  <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-800 space-y-1.5">
                    <div className="flex items-center justify-between gap-1.5">
                      <span className="font-bold text-xs text-white truncate">
                        {isAdmin ? 'Administrator' : (studentProfile.name || 'Freshman Student')}
                      </span>
                      <span className={`text-[9px] font-black px-1.5 py-0.5 rounded uppercase tracking-wide ${
                        isAdmin
                          ? 'bg-amber-400 text-slate-950'
                          : isUnlocked
                          ? 'bg-emerald-400 text-slate-950'
                          : 'bg-slate-700 text-slate-200'
                      }`}>
                        {isAdmin ? 'ADMIN' : (isUnlocked ? '300 ETB ACTIVE' : 'FREE (4 QS)')}
                      </span>
                    </div>

                    <div className="text-[11px] text-slate-400 font-mono truncate">
                      {isAdmin ? 'admin@smartstudy.edu.et' : studentProfile.email}
                    </div>

                    {!isAdmin && (
                      <div className="pt-1.5 border-t border-slate-800 text-[10px] text-slate-400 space-y-0.5">
                        <div className="truncate">🏫 {studentProfile.university || 'Ethiopian University'}</div>
                        <div className="flex items-center justify-between pt-0.5">
                          <span>Status:</span>
                          <span className={`font-bold ${isUnlocked ? 'text-emerald-400' : 'text-amber-400'}`}>
                            {isUnlocked ? 'Full 1000+ Questions Unlocked' : 'First 4 Questions Free'}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Action Links */}
                  <div className="space-y-1 text-xs pt-1 border-t border-[#1e293b]">
                    {!isAdmin && (
                      <button
                        onClick={() => {
                          unlockAllForAdmin();
                          setProfileDropdownOpen(false);
                        }}
                        className="w-full flex items-center gap-2 p-2 rounded-xl text-emerald-300 bg-emerald-950/40 border border-emerald-600/30 hover:bg-emerald-900/50 transition font-semibold"
                        title="Instant Admin Access for Guduru Alemayehu"
                      >
                        <Shield className="w-4 h-4 text-emerald-400" />
                        <span>Admin Guduru: Open All Questions</span>
                      </button>
                    )}

                    {/* Unlock Access Tab link */}
                    {!isUnlocked && !isAdmin && (
                      <button
                        onClick={() => {
                          setActiveTab('unlock');
                          setProfileDropdownOpen(false);
                        }}
                        className="w-full flex items-center gap-2 p-2 rounded-xl text-amber-300 bg-amber-950/40 border border-amber-600/30 hover:bg-amber-900/50 transition font-semibold"
                      >
                        <Sparkles className="w-4 h-4 text-amber-400" />
                        <span>Unlock All Questions (300 ETB)</span>
                      </button>
                    )}

                    {isAdmin && (
                      <button
                        onClick={() => {
                          setActiveTab('admin');
                          setProfileDropdownOpen(false);
                        }}
                        className="w-full flex items-center gap-2 p-2 rounded-xl text-amber-300 hover:bg-[#1e293b] hover:text-white transition font-semibold"
                      >
                        <Shield className="w-4 h-4 text-amber-400" />
                        <span>Admin Control Panel</span>
                      </button>
                    )}

                    <button
                      onClick={() => {
                        setActiveTab('unlock');
                        setProfileDropdownOpen(false);
                      }}
                      className="w-full flex items-center gap-2 p-2 rounded-xl text-slate-300 hover:bg-[#1e293b] hover:text-white transition"
                    >
                      <Sparkles className="w-4 h-4 text-indigo-400" />
                      <span>300 ETB CBE / Telebirr Payment</span>
                    </button>
                  </div>

                  {/* Sign Out */}
                  <div className="border-t border-[#1e293b] pt-1">
                    <button
                      id="navbar-signout-btn"
                      onClick={() => {
                        signOut();
                        adminLogout();
                        setProfileDropdownOpen(false);
                      }}
                      className="w-full flex items-center gap-2 p-2 rounded-xl text-rose-400 hover:bg-rose-950/40 text-xs font-semibold transition cursor-pointer"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Navigation Strip (Matching Screenshot Options) */}
        <div className="md:hidden flex items-center justify-between overflow-x-auto py-2 border-t border-[#182138] scrollbar-none gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition ${
                  isActive
                    ? 'bg-[#4f46e5] text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{item.label}</span>
                {item.isAdminBadge && (
                  <span className="bg-amber-400 text-slate-950 text-[8px] font-black px-1 rounded font-mono">
                    ADMIN
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
