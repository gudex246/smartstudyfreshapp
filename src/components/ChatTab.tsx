import React, { useState, useEffect, useRef } from 'react';
import {
  MessageSquare,
  Send,
  Users,
  Sparkles,
  Shield,
  GraduationCap,
  Smile,
  RefreshCw,
  Heart,
  ChevronRight,
  Info,
  CheckCircle2,
  Atom,
  Binary,
  Brain,
  Globe2,
  HelpCircle
} from 'lucide-react';
import { useApp, ADMIN_EMAIL } from '../context/AppContext';
import { ChatMessage, ChatChannel } from '../types';
import {
  fetchCloudChatMessages,
  sendCloudChatMessage,
  subscribeToSyncEvents,
  INITIAL_CHAT_MESSAGES
} from '../utils/cloudSync';

const CHANNELS: { id: ChatChannel; label: string; icon: React.ElementType; description: string }[] = [
  {
    id: 'general',
    label: '#general',
    icon: MessageSquare,
    description: 'Freshman campus experience, study schedules, dorm life, and university tips.'
  },
  {
    id: 'physics',
    label: '#physics-1011',
    icon: Atom,
    description: 'Mechanics, vectors, Kepler’s laws, fluid dynamics, and worked midterm problems.'
  },
  {
    id: 'math',
    label: '#math-1011',
    icon: Binary,
    description: 'Calculus, limits, derivatives, matrices, and freshman exam problem solving.'
  },
  {
    id: 'logic',
    label: '#logic-1011',
    icon: Brain,
    description: 'Critical thinking, fallacies, categorical syllogisms, and validity tests.'
  },
  {
    id: 'geog-econ',
    label: '#geog-econ',
    icon: Globe2,
    description: 'Ethiopian geography, physiographic regions, and micro/macro economics concepts.'
  },
  {
    id: 'admin-help',
    label: '#admin-help',
    icon: HelpCircle,
    description: 'Direct inquiries & 300 ETB verification assistance from Admin Guduru Alemayehu.'
  }
];

const UNIVERSITIES = [
  'Addis Ababa University (AAU)',
  'Jimma University (JU)',
  'Hawassa University (HU)',
  'Bahir Dar University (BDU)',
  'Arba Minch University (AMU)',
  'Haramaya University',
  'Adama Science & Tech (ASTU)',
  'Addis Ababa Science & Tech (AASTU)',
  'Mekelle University',
  'Wollo University'
];

export const ChatTab: React.FC = () => {
  const { currentAccount, isAdmin, setActiveTab } = useApp();

  const [activeChannel, setActiveChannel] = useState<ChatChannel>('general');
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_CHAT_MESSAGES);
  const [inputText, setInputText] = useState('');
  const [senderName, setSenderName] = useState(
    currentAccount.role === 'super_admin' ? 'Guduru Alemayehu' : currentAccount.name || 'Freshman Student'
  );
  const [university, setUniversity] = useState(
    currentAccount.role === 'super_admin' ? 'Smart Study Admin' : 'Addis Ababa University (AAU)'
  );
  const [isSending, setIsSending] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of chat
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Initial load and periodic sync across devices
  useEffect(() => {
    let isMounted = true;

    async function loadMessages() {
      try {
        const fetched = await fetchCloudChatMessages();
        if (isMounted && fetched && fetched.length > 0) {
          setMessages(fetched);
        }
      } catch (err) {
        console.warn('Could not load chat messages:', err);
      }
    }

    loadMessages();

    // Listen to live broadcast events
    const unsubscribe = subscribeToSyncEvents(
      () => {},
      (incomingMsg) => {
        if (isMounted) {
          setMessages(prev => {
            if (prev.some(m => m.id === incomingMsg.id)) return prev;
            return [...prev, incomingMsg];
          });
        }
      }
    );

    // Poll every 5 seconds for remote mobile sync
    const interval = setInterval(loadMessages, 5000);

    return () => {
      isMounted = false;
      unsubscribe();
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, activeChannel]);

  // Keep senderName synced with currentAccount
  useEffect(() => {
    if (currentAccount.role === 'super_admin') {
      setSenderName('Guduru Alemayehu');
      setUniversity('Smart Study Admin');
    } else {
      setSenderName(currentAccount.name || 'Freshman Student');
    }
  }, [currentAccount]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const trimmed = inputText.trim();
    setInputText('');
    setIsSending(true);

    const isCurrentAdmin = currentAccount.role === 'super_admin';

    const newMsg: ChatMessage = {
      id: 'msg-' + Date.now() + '-' + Math.random().toString(36).substring(2, 6),
      senderName: isCurrentAdmin ? 'Guduru Alemayehu' : senderName.trim(),
      senderRole: isCurrentAdmin ? 'admin' : 'student',
      senderEmail: currentAccount.email,
      university: isCurrentAdmin ? 'Smart Study Admin' : university,
      channel: activeChannel,
      text: trimmed,
      timestamp: new Date().toISOString(),
      avatarColor: isCurrentAdmin ? 'bg-amber-500' : 'bg-indigo-600',
      likes: 0
    };

    // Optimistic local update
    setMessages(prev => [...prev, newMsg]);

    try {
      await sendCloudChatMessage(newMsg);
    } catch (err) {
      console.warn('Error sending message:', err);
    } finally {
      setIsSending(false);
      setTimeout(scrollToBottom, 100);
    }
  };

  const handleLikeMessage = (id: string) => {
    setMessages(prev =>
      prev.map(m => (m.id === id ? { ...m, likes: (m.likes || 0) + 1 } : m))
    );
  };

  const handleManualRefresh = async () => {
    setIsRefreshing(true);
    try {
      const refreshed = await fetchCloudChatMessages();
      if (refreshed && refreshed.length > 0) {
        setMessages(refreshed);
      }
    } finally {
      setTimeout(() => setIsRefreshing(false), 400);
    }
  };

  const channelMessages = messages.filter(m => m.channel === activeChannel);
  const activeChannelConfig = CHANNELS.find(c => c.id === activeChannel) || CHANNELS[0];

  return (
    <div className="space-y-4 max-w-6xl mx-auto">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-indigo-950 via-slate-900 to-blue-950 border border-indigo-900/50 rounded-2xl p-4 sm:p-6 shadow-xl relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 uppercase tracking-wider">
                <Users className="w-3 h-3 text-indigo-400" />
                Live Freshman Study Room
              </span>
              <span className="flex items-center gap-1 text-[11px] text-emerald-400 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                Synced Across All Devices
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Freshman Community & Peer Study Chat
            </h1>
            <p className="text-xs text-slate-300 max-w-xl">
              Connect with fellow university freshman across Ethiopia. Discuss model questions, clarify tough lecture concepts, and receive direct help from Admin Guduru Alemayehu.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleManualRefresh}
              disabled={isRefreshing}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold border border-slate-700 transition"
              title="Refresh messages from cloud"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin text-indigo-400' : ''}`} />
              <span>Refresh</span>
            </button>
            <button
              onClick={() => setActiveTab('unlock')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold shadow-md transition"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Unlock 300 ETB Access</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Chat Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 bg-[#0a0f1d] border border-[#182138] rounded-2xl overflow-hidden shadow-2xl min-h-[580px]">
        {/* Left: Channels Sidebar */}
        <div className="lg:col-span-1 bg-[#070b14] border-b lg:border-b-0 lg:border-r border-[#182138] p-3 space-y-3">
          <div className="px-2 py-1">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
              Study Channels
            </span>
          </div>

          <div className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 scrollbar-none">
            {CHANNELS.map(ch => {
              const Icon = ch.icon;
              const isActive = activeChannel === ch.id;
              const channelCount = messages.filter(m => m.channel === ch.id).length;

              return (
                <button
                  key={ch.id}
                  onClick={() => setActiveChannel(ch.id)}
                  className={`flex items-center justify-between gap-2 px-3 py-2 rounded-xl text-xs font-semibold transition whitespace-nowrap lg:whitespace-normal w-full text-left ${
                    isActive
                      ? 'bg-indigo-600 text-white font-bold shadow-md shadow-indigo-600/30'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-[#101828]'
                  }`}
                >
                  <div className="flex items-center gap-2 truncate">
                    <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                    <span className="truncate">{ch.label}</span>
                  </div>
                  {channelCount > 0 && (
                    <span
                      className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full shrink-0 ${
                        isActive ? 'bg-indigo-900 text-indigo-100' : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {channelCount}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* User Profile in Chat */}
          <div className="pt-3 border-t border-[#182138] space-y-2 px-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
              Posting As
            </span>
            <div className="space-y-1.5">
              <input
                type="text"
                value={senderName}
                onChange={e => setSenderName(e.target.value)}
                placeholder="Your Full Name"
                className="w-full bg-[#0f172a] border border-slate-700/80 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-hidden focus:border-indigo-500"
              />

              {currentAccount.role !== 'super_admin' && (
                <select
                  value={university}
                  onChange={e => setUniversity(e.target.value)}
                  className="w-full bg-[#0f172a] border border-slate-700/80 rounded-lg px-2 py-1.5 text-[11px] text-slate-300 focus:outline-hidden focus:border-indigo-500"
                >
                  {UNIVERSITIES.map(u => (
                    <option key={u} value={u}>
                      {u}
                    </option>
                  ))}
                </select>
              )}
            </div>
          </div>
        </div>

        {/* Right: Message Stream & Input */}
        <div className="lg:col-span-3 flex flex-col justify-between h-[580px] bg-[#090d16]">
          {/* Active Channel Header */}
          <div className="px-4 py-3 bg-[#0d1424] border-b border-[#182138] flex items-center justify-between gap-3 shrink-0">
            <div className="flex items-center gap-2 truncate">
              <span className="font-bold text-white text-sm flex items-center gap-1.5">
                <activeChannelConfig.icon className="w-4 h-4 text-indigo-400 shrink-0" />
                {activeChannelConfig.label}
              </span>
              <span className="text-xs text-slate-400 hidden sm:inline truncate">
                — {activeChannelConfig.description}
              </span>
            </div>

            <div className="text-[11px] text-slate-400 font-mono shrink-0">
              {channelMessages.length} messages
            </div>
          </div>

          {/* Messages Feed */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 scrollbar-thin scrollbar-thumb-slate-700">
            {channelMessages.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center p-6 space-y-2 text-slate-400">
                <MessageSquare className="w-10 h-10 text-slate-600 stroke-[1.5]" />
                <p className="text-sm font-semibold text-slate-300">No messages in this channel yet</p>
                <p className="text-xs max-w-sm text-slate-500">
                  Be the first to post a study tip, question, or inquiry! All students and admins will receive your message in real-time.
                </p>
              </div>
            ) : (
              channelMessages.map(msg => {
                const isAdminMsg = msg.senderRole === 'admin' || msg.senderEmail === ADMIN_EMAIL;
                const isMyMessage = msg.senderName === senderName;

                return (
                  <div
                    key={msg.id}
                    className={`flex items-start gap-2.5 max-w-3xl ${
                      isMyMessage ? 'ml-auto flex-row-reverse' : ''
                    }`}
                  >
                    {/* Avatar */}
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0 shadow-md ${
                        isAdminMsg ? 'bg-amber-500 ring-2 ring-amber-300 text-slate-950 font-black' : msg.avatarColor || 'bg-indigo-600'
                      }`}
                    >
                      {isAdminMsg ? '👑' : msg.senderName.charAt(0).toUpperCase()}
                    </div>

                    {/* Bubble */}
                    <div
                      className={`rounded-2xl p-3 text-xs space-y-1 max-w-[85%] sm:max-w-xl transition shadow-md ${
                        isAdminMsg
                          ? 'bg-amber-950/40 border border-amber-500/40 text-slate-200'
                          : isMyMessage
                          ? 'bg-indigo-600 text-white rounded-tr-none'
                          : 'bg-[#11192b] border border-[#1e293b] text-slate-200 rounded-tl-none'
                      }`}
                    >
                      <div className="flex flex-wrap items-center gap-1.5 text-[10px]">
                        <span
                          className={`font-bold ${
                            isAdminMsg
                              ? 'text-amber-400 font-extrabold'
                              : isMyMessage
                              ? 'text-indigo-100'
                              : 'text-slate-100'
                          }`}
                        >
                          {msg.senderName}
                        </span>

                        {isAdminMsg && (
                          <span className="bg-amber-400 text-slate-950 text-[9px] font-black px-1.5 py-0.2 rounded font-mono uppercase">
                            Admin
                          </span>
                        )}

                        {msg.university && !isAdminMsg && (
                          <span
                            className={`text-[9px] truncate max-w-[130px] ${
                              isMyMessage ? 'text-indigo-200' : 'text-slate-400'
                            }`}
                          >
                            • {msg.university}
                          </span>
                        )}

                        <span
                          className={`font-mono text-[9px] ml-auto ${
                            isMyMessage ? 'text-indigo-200' : 'text-slate-500'
                          }`}
                        >
                          {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>

                      <p className="text-xs leading-relaxed whitespace-pre-wrap break-words">
                        {msg.text}
                      </p>

                      <div className="flex items-center justify-end pt-1">
                        <button
                          onClick={() => handleLikeMessage(msg.id)}
                          className={`flex items-center gap-1 text-[10px] px-1.5 py-0.5 rounded transition ${
                            isMyMessage
                              ? 'text-indigo-200 hover:text-white'
                              : 'text-slate-400 hover:text-rose-400'
                          }`}
                          title="Like this message"
                        >
                          <Heart className="w-3 h-3 text-rose-400 fill-rose-400/40" />
                          <span>{msg.likes || 0}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Message Input Box */}
          <form
            onSubmit={handleSendMessage}
            className="p-3 bg-[#0d1424] border-t border-[#182138] flex items-center gap-2 shrink-0"
          >
            <input
              type="text"
              value={inputText}
              onChange={e => setInputText(e.target.value)}
              placeholder={`Message ${activeChannelConfig.label}...`}
              disabled={isSending}
              className="flex-1 bg-[#090d16] border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-hidden focus:border-indigo-500 transition shadow-inner"
            />

            <button
              type="submit"
              disabled={!inputText.trim() || isSending}
              className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 text-white text-xs font-bold flex items-center gap-1.5 shadow-md shadow-indigo-600/30 transition shrink-0"
            >
              <Send className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Send</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
