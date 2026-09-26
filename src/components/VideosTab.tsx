import React, { useState, useEffect } from 'react';
import {
  Play,
  Lock,
  Unlock,
  Clock,
  User,
  Filter,
  Search,
  Sparkles,
  CheckCircle2,
  Video,
  ChevronRight,
  WifiOff,
  FileText,
  BookOpen,
  ExternalLink,
  AlertCircle,
  AlertTriangle,
  Upload,
  HelpCircle,
  RefreshCw
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { VideoTutorial } from '../types';
import { useOnlineStatus } from '../hooks/useOnlineStatus';
import { formatVideoEmbedUrl, isDirectVideoFile, getOriginalVideoUrl } from '../utils/videoUtils';
import { getVideoBlob, saveVideoBlob } from '../utils/videoStorage';

export const VideosTab: React.FC = () => {
  const isOnline = useOnlineStatus();
  const {
    videos,
    courses,
    isUnlocked,
    setActiveTab,
    streamFilter,
    updateVideo
  } = useApp();

  const [selectedCourseId, setSelectedCourseId] = useState<string>('all');
  const [selectedStreamFilter, setSelectedStreamFilter] = useState<'all' | 'natural' | 'social'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeVideo, setActiveVideo] = useState<VideoTutorial | null>(() => {
    return (
      videos.find((v) => v.courseCode.toLowerCase().includes('math') || v.courseId.includes('math')) ||
      videos[0] ||
      null
    );
  });

  // Ensure active video is always set if videos change
  useEffect(() => {
    if (!activeVideo && videos.length > 0) {
      const mathVid = videos.find(
        (v) => v.courseCode.toLowerCase().includes('math') || v.courseId.includes('math')
      );
      setActiveVideo(mathVid || videos[0]);
    }
  }, [videos, activeVideo]);

  const [playableVideoUrl, setPlayableVideoUrl] = useState<string | null>(null);
  const [mediaError, setMediaError] = useState<string | null>(null);
  const [isResolvingMedia, setIsResolvingMedia] = useState<boolean>(false);
  const [showTroubleshootGuide, setShowTroubleshootGuide] = useState<boolean>(false);

  // Resolve video URL for playback (including IndexedDB persistent storage and expired blob check)
  useEffect(() => {
    let activeObjUrl: string | null = null;
    let isCancelled = false;
    setMediaError(null);
    setPlayableVideoUrl(null);

    async function resolveSource() {
      if (!activeVideo?.videoUrl || !activeVideo.videoUrl.trim()) {
        setPlayableVideoUrl(null);
        return;
      }

      const url = activeVideo.videoUrl.trim();

      if (url.startsWith('idb://')) {
        setIsResolvingMedia(true);
        try {
          const blob = await getVideoBlob(url);
          if (isCancelled) return;
          if (blob) {
            activeObjUrl = URL.createObjectURL(blob);
            setPlayableVideoUrl(activeObjUrl);
          } else {
            setMediaError('Local video file could not be found in your browser storage. It may have been cleared or uploaded on another device.');
          }
        } catch {
          if (!isCancelled) setMediaError('Failed to read video from browser database.');
        } finally {
          if (!isCancelled) setIsResolvingMedia(false);
        }
      } else if (url.startsWith('blob:')) {
        setIsResolvingMedia(true);
        try {
          const res = await fetch(url, { method: 'HEAD' });
          if (!isCancelled) {
            if (res.ok) {
              setPlayableVideoUrl(url);
            } else {
              setMediaError('This video was uploaded as a temporary browser session file yesterday and has expired because the browser was closed or refreshed.');
            }
          }
        } catch {
          if (!isCancelled) {
            setMediaError('This video was uploaded as a temporary browser session file yesterday and has expired because the browser was closed or refreshed.');
          }
        } finally {
          if (!isCancelled) setIsResolvingMedia(false);
        }
      } else {
        const formatted = formatVideoEmbedUrl(url);
        setPlayableVideoUrl(formatted || null);
      }
    }

    resolveSource();

    return () => {
      isCancelled = true;
      if (activeObjUrl) {
        URL.revokeObjectURL(activeObjUrl);
      }
    };
  }, [activeVideo?.id, activeVideo?.videoUrl]);

  // Handle re-uploading / attaching video file permanently to IndexedDB
  const handleReuploadVideoFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !activeVideo) return;
    try {
      setIsResolvingMedia(true);
      const videoId = activeVideo.id;
      const idbUri = await saveVideoBlob(videoId, file);
      const updated: VideoTutorial = {
        ...activeVideo,
        videoUrl: idbUri
      };
      updateVideo(updated);
      setActiveVideo(updated);
      setMediaError(null);
    } catch (err) {
      console.error('Failed to save video into persistent storage:', err);
      setMediaError('Could not save video file into browser storage.');
    } finally {
      setIsResolvingMedia(false);
    }
  };

  // Filter videos based on course, search, and stream (never suppress math or selected course)
  const filteredVideos = videos.filter((video) => {
    const course = courses.find((c) => c.id === video.courseId);

    // Stream matching: allow All, Natural, Social, or if course is selected explicitly
    const matchesStream =
      selectedStreamFilter === 'all' ||
      selectedCourseId !== 'all' ||
      !course ||
      course.stream === 'both' ||
      course.stream === selectedStreamFilter;

    const matchesCourse =
      selectedCourseId === 'all' ||
      video.courseId === selectedCourseId ||
      video.courseCode.toLowerCase().includes(selectedCourseId.toLowerCase());

    const matchesSearch =
      searchQuery.trim() === '' ||
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.courseCode.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesStream && matchesCourse && matchesSearch;
  });

  const isVideoLocked = (video: VideoTutorial, idx: number) => {
    if (isUnlocked) return false;
    return video.isPremium || idx >= 2;
  };

  const handleSelectVideo = (video: VideoTutorial, idx: number) => {
    setActiveVideo(video);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-6 text-slate-200">
      {/* Top Banner with Tutorial Branding & Unlock Status */}
      <div className="bg-[#0f172a]/95 border border-[#1e293b] text-white rounded-2xl p-6 sm:p-7 shadow-xl relative overflow-hidden backdrop-blur-sm">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="bg-indigo-950/70 text-indigo-300 border border-indigo-700/50 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                Smart Study Masterclass
              </span>
              {isUnlocked ? (
                <span className="bg-emerald-950/80 text-emerald-400 border border-emerald-700/60 text-[10px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  Full Access Unlocked
                </span>
              ) : (
                <span className="bg-amber-950/80 text-amber-300 border border-amber-600/50 text-[10px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <Lock className="w-3 h-3 text-amber-300" />
                  Free Preview Mode
                </span>
              )}
            </div>

            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Freshman Video Masterclasses & Problem Walkthroughs
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
              Curated masterclasses taught by senior instructors covering Mathematics for Natural Science, Geography, Psychology, Communicative English 1, General Physics, and Logic.
            </p>
          </div>

          {!isUnlocked && (
            <div className="shrink-0">
              <button
                onClick={() => setActiveTab('unlock')}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition"
              >
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>Unlock All Videos (300 ETB)</span>
                <ChevronRight className="w-4 h-4 text-slate-950" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Offline Mode Alert for Videos */}
      {!isOnline && (
        <div className="p-4 rounded-2xl bg-amber-950/40 border border-amber-600/50 text-amber-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-lg">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
              <WifiOff className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-bold text-white text-xs sm:text-sm">Video Streaming Requires Internet</h4>
              <p className="text-[11px] text-amber-300/90 mt-0.5">
                Full lecture notes, formulas, and past exam questions for all units are 100% available offline right now.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setActiveTab('notes')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Read Offline Notes</span>
            </button>
            <button
              onClick={() => setActiveTab('questions')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#1e293b] hover:bg-[#334155] text-white font-semibold text-xs transition"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>CBT Practice</span>
            </button>
          </div>
        </div>
      )}

      {/* Main Video Theater Player */}
      {activeVideo && (() => {
        const activeVideoIndex = filteredVideos.findIndex((v) => v.id === activeVideo.id);
        const isActiveVideoLocked = !isUnlocked && (activeVideo.isPremium || (activeVideoIndex >= 0 ? activeVideoIndex >= 2 : true));

        return (
        <div className="bg-[#0f172a]/95 rounded-2xl border border-[#1e293b] overflow-hidden shadow-xl">
          <div className="aspect-video w-full bg-[#070b14] relative flex items-center justify-center">
            {isActiveVideoLocked ? (
              <div className="p-8 text-center text-white max-w-md space-y-4">
                <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 mx-auto flex items-center justify-center">
                  <Lock className="w-6 h-6 text-amber-400" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    This video lecture is part of the Smart Study Pro Curriculum
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
                    Unlock complete question explanations, video lectures, and notes with a subscription fee.
                  </p>
                </div>
                <button
                  onClick={() => setActiveTab('unlock')}
                  className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm inline-flex items-center gap-2 transition shadow-md hover:scale-[1.02] active:scale-[0.98]"
                >
                  Unlock Full Access
                </button>
              </div>
            ) : isResolvingMedia ? (
              <div className="p-8 text-center text-slate-400 space-y-3">
                <RefreshCw className="w-8 h-8 text-indigo-400 animate-spin mx-auto" />
                <p className="text-xs font-semibold">Loading video media...</p>
              </div>
            ) : mediaError ? (
              <div className="p-6 sm:p-8 text-center text-white max-w-lg space-y-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-400 mx-auto flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 sm:w-7 sm:h-7 text-rose-400" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    Video Not Available or Connection Expired
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    {mediaError}
                  </p>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <label className="cursor-pointer px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 transition shadow-md">
                    <Upload className="w-4 h-4" />
                    <span>Re-select Video File (Permanent Storage)</span>
                    <input
                      type="file"
                      accept="video/mp4,video/webm,video/ogg"
                      className="hidden"
                      onChange={handleReuploadVideoFile}
                    />
                  </label>
                  {activeVideo.videoUrl && !activeVideo.videoUrl.startsWith('blob:') && !activeVideo.videoUrl.startsWith('idb://') && (
                    <a
                      href={getOriginalVideoUrl(activeVideo.videoUrl)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-xs sm:text-sm inline-flex items-center gap-2 transition"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Watch in New Tab</span>
                    </a>
                  )}
                </div>
              </div>
            ) : isResolvingMedia || (!playableVideoUrl && !mediaError) ? (
              <div className="p-8 text-center text-slate-400 space-y-3">
                <RefreshCw className="w-8 h-8 text-indigo-400 animate-spin mx-auto" />
                <p className="text-xs font-semibold">Loading video media...</p>
              </div>
            ) : playableVideoUrl && isDirectVideoFile(activeVideo.videoUrl) ? (
              <video
                key={playableVideoUrl}
                src={playableVideoUrl}
                controls
                playsInline
                className="w-full h-full object-contain bg-black"
                onError={() => {
                  setMediaError(
                    'Video failed to play. If this was a local file uploaded yesterday, temporary browser memory expires when closed. Please re-select the file to save it permanently.'
                  );
                }}
              >
                Your browser does not support HTML5 video playback.
              </video>
            ) : playableVideoUrl ? (
              <iframe
                key={playableVideoUrl}
                src={playableVideoUrl}
                title={activeVideo.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : null}
          </div>

          <div className="p-5 sm:p-6 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-xs bg-indigo-950/60 text-indigo-300 px-2.5 py-1 rounded-lg border border-indigo-700/50">
                  {activeVideo.courseCode}
                </span>
                <span className="text-xs font-semibold text-slate-300 bg-[#0a0f1d] border border-[#1e293b] px-2.5 py-1 rounded-lg">
                  {activeVideo.topic}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1 font-medium">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  {activeVideo.duration}
                </span>
              </div>

              <div className="flex items-center gap-2">
                {!isActiveVideoLocked && activeVideo.videoUrl && (
                  <a
                    href={getOriginalVideoUrl(activeVideo.videoUrl)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#18233c] hover:bg-[#23355b] text-indigo-300 hover:text-white text-[11px] font-semibold border border-indigo-500/30 transition shadow-xs"
                    title="If browser blocks connection in iframe, watch directly in YouTube/Browser"
                  >
                    <ExternalLink className="w-3 h-3" />
                    <span>Watch in New Tab</span>
                  </a>
                )}
                {activeVideo.isPremium ? (
                  <span className="text-[11px] font-bold text-amber-300 bg-amber-950/70 border border-amber-600/50 px-2.5 py-0.5 rounded-md flex items-center gap-1">
                    <Lock className="w-3 h-3 text-amber-400" /> Premium 300 ETB
                  </span>
                ) : (
                  <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950/70 border border-emerald-700/50 px-2.5 py-0.5 rounded-md">
                    Free Access
                  </span>
                )}
              </div>
            </div>

            <h2 className="text-lg sm:text-xl font-bold text-white">
              {activeVideo.title}
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {activeVideo.description}
            </p>

            <div className="pt-3 border-t border-[#1e293b] flex items-center justify-between text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-indigo-900/60 text-indigo-300 flex items-center justify-center font-bold text-[10px]">
                  <User className="w-3.5 h-3.5" />
                </div>
                <span>Instructor: <strong className="text-white">{activeVideo.instructor}</strong></span>
              </div>
              <span>Added: {activeVideo.addedAt || 'Recent'}</span>
            </div>

            {/* Troubleshoot & Video Guide */}
            <div className="mt-3 pt-3 border-t border-[#1e293b]">
              <button
                onClick={() => setShowTroubleshootGuide(!showTroubleshootGuide)}
                className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1.5 transition cursor-pointer"
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span>{showTroubleshootGuide ? 'Hide Video Troubleshooting Guide' : 'Why might a video fail to connect or stop working tomorrow? (Click for help)'}</span>
              </button>

              {showTroubleshootGuide && (
                <div className="mt-3 p-4 rounded-xl bg-[#0a0f1d] border border-indigo-900/40 text-xs space-y-3">
                  <div className="space-y-1">
                    <p className="font-bold text-indigo-300 flex items-center gap-1.5">
                      <span>1. Uploaded Local Files (MP4 / WebM from phone or computer):</span>
                    </p>
                    <p className="text-slate-400 leading-relaxed">
                      If you uploaded a file yesterday directly from your device, browsers create a temporary memory link (<code className="text-indigo-300 font-mono">blob:...</code>). When the browser tab was closed or restarted, that temporary memory was erased by the browser.
                      <br />
                      <strong className="text-emerald-400">Solution:</strong> Click <strong>"Re-select Video File"</strong> above. The app now saves your video into persistent offline IndexedDB storage so it never expires again!
                    </p>
                  </div>

                  <div className="space-y-1">
                    <p className="font-bold text-amber-300 flex items-center gap-1.5">
                      <span>2. YouTube: "Playback on other websites has been disabled by video owner"</span>
                    </p>
                    <p className="text-slate-400 leading-relaxed">
                      In YouTube Studio, open the video details &gt; click <strong>Show More</strong> &gt; scroll down to <strong>License and distribution</strong> &gt; check the box <strong>"Allow embedding"</strong>.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <p className="font-bold text-amber-300 flex items-center gap-1.5">
                      <span>3. YouTube: "Video is private"</span>
                    </p>
                    <p className="text-slate-400 leading-relaxed">
                      Private videos cannot be embedded into websites. Change the video visibility on YouTube from <strong>Private</strong> to <strong>Unlisted</strong> (anyone with the link can watch) or <strong>Public</strong>.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <p className="font-bold text-emerald-300 flex items-center gap-1.5">
                      <span>4. Google Drive Video Permissions</span>
                    </p>
                    <p className="text-slate-400 leading-relaxed">
                      If you host the video on Google Drive, set the file share settings to <strong>"Anyone with the link can view"</strong> so the embed preview has permission to stream.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        );
      })()}

      {/* Filter and Course Selection Strip */}
      <div className="bg-[#0f172a]/95 rounded-2xl border border-[#1e293b] p-3.5 sm:p-4 shadow-lg space-y-3">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none flex-wrap sm:flex-nowrap">
            <button
              onClick={() => {
                setSelectedCourseId('all');
                setSelectedStreamFilter('all');
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer ${
                selectedCourseId === 'all' && selectedStreamFilter === 'all'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-[#0a0f1d] border border-[#1e293b] text-slate-400 hover:text-white'
              }`}
            >
              All Masterclasses ({videos.length})
            </button>

            <button
              onClick={() => {
                setSelectedCourseId('all');
                setSelectedStreamFilter('natural');
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition border cursor-pointer ${
                selectedStreamFilter === 'natural' && selectedCourseId === 'all'
                  ? 'bg-blue-600 border-blue-500 text-white shadow-sm'
                  : 'bg-[#0a0f1d] border-[#1e293b] text-slate-400 hover:text-white'
              }`}
            >
              📐 Natural Science
            </button>

            <button
              onClick={() => {
                setSelectedCourseId('all');
                setSelectedStreamFilter('social');
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition border cursor-pointer ${
                selectedStreamFilter === 'social' && selectedCourseId === 'all'
                  ? 'bg-amber-600 border-amber-500 text-white shadow-sm'
                  : 'bg-[#0a0f1d] border-[#1e293b] text-slate-400 hover:text-white'
              }`}
            >
              📊 Social Science
            </button>

            <div className="h-4 w-px bg-slate-700 mx-1 shrink-0 hidden sm:block" />

            {courses.map((c) => {
              const count = videos.filter(
                (v) => v.courseId === c.id || v.courseCode.toLowerCase().includes(c.code.toLowerCase())
              ).length;

              return (
                <button
                  key={c.id}
                  onClick={() => {
                    setSelectedCourseId(c.id);
                    setSelectedStreamFilter('all');
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition border flex items-center gap-1 cursor-pointer ${
                    selectedCourseId === c.id
                      ? 'bg-indigo-600 border-indigo-500 text-white shadow-sm'
                      : 'bg-[#0a0f1d] border-[#1e293b] text-slate-400 hover:text-white'
                  }`}
                >
                  <span>{c.code}</span>
                  {count > 0 && (
                    <span className="text-[10px] opacity-80 font-mono">({count})</span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="relative shrink-0">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Math, Vectors, Limits..."
              className="w-full sm:w-60 pl-8 pr-3 py-1.5 rounded-xl border border-[#1e293b] bg-[#0a0f1d] text-slate-200 text-xs focus:outline-none focus:border-indigo-500"
            />
          </div>
        </div>
      </div>

      {/* Video Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredVideos.map((video, vIdx) => {
          const isSelected = activeVideo?.id === video.id;
          const isLockedForStudent = isVideoLocked(video, vIdx);

          return (
            <div
              key={video.id}
              onClick={() => handleSelectVideo(video, vIdx)}
              className={`group bg-[#0f172a]/95 rounded-2xl border transition-all cursor-pointer overflow-hidden flex flex-col justify-between ${
                isSelected
                  ? 'border-indigo-500 shadow-lg ring-1 ring-indigo-500/30'
                  : 'border-[#1e293b] hover:border-slate-600 hover:shadow-md'
              }`}
            >
              <div>
                {/* Video Card Header Thumbnail */}
                <div className="aspect-video w-full bg-[#070b14] relative flex items-center justify-center group-hover:opacity-95 transition">
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xs flex items-center justify-center text-white transition-transform group-hover:scale-110">
                    {isLockedForStudent ? (
                      <Lock className="w-5 h-5 text-amber-400" />
                    ) : (
                      <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                    )}
                  </div>

                  <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/80 text-white text-[10px] font-mono font-medium">
                    {video.duration}
                  </div>

                  <div className="absolute top-2 left-2">
                    <span className="font-mono text-[10px] font-bold bg-indigo-600/90 text-white px-2 py-0.5 rounded">
                      {video.courseCode}
                    </span>
                  </div>

                  <div className="absolute top-2 right-2">
                    {isLockedForStudent ? (
                      <span className="text-[10px] font-bold bg-amber-500 text-slate-950 px-2 py-0.5 rounded flex items-center gap-1">
                        <Lock className="w-2.5 h-2.5" /> Pro Curriculum
                      </span>
                    ) : (
                      <span className="text-[10px] font-bold bg-emerald-500 text-white px-2 py-0.5 rounded">
                        Free Preview
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-4 space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span className="font-medium text-indigo-400">{video.topic}</span>
                    <span>{video.views || 850} views</span>
                  </div>

                  <h3 className="font-bold text-white text-sm line-clamp-2 group-hover:text-indigo-300 transition">
                    {video.title}
                  </h3>

                  <p className="text-xs text-slate-400 line-clamp-2">
                    {video.description}
                  </p>
                </div>
              </div>

              <div className="p-4 pt-0 border-t border-[#1e293b] flex items-center justify-between text-[11px] text-slate-400 mt-2">
                <span className="truncate pr-2">By {video.instructor}</span>
                <span className={`font-bold shrink-0 flex items-center gap-0.5 ${isLockedForStudent ? 'text-amber-400' : 'text-indigo-400'}`}>
                  {isLockedForStudent ? 'Unlock Full Access' : 'Watch Now'}
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {filteredVideos.length === 0 && (
        <div className="text-center py-12 bg-[#0f172a] rounded-2xl border border-[#1e293b] space-y-3">
          <Video className="w-10 h-10 text-slate-500 mx-auto" />
          <h3 className="text-sm font-bold text-slate-300">No videos found</h3>
          <p className="text-xs text-slate-500">Try changing your search keywords or course filter.</p>
        </div>
      )}
    </div>
  );
};
