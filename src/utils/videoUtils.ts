/**
 * Utilities for formatting, transforming, and embedding video URLs.
 * Resolves browser "Refused to connect" (X-Frame-Options: SAMEORIGIN) errors
 * by automatically transforming standard YouTube watch links and Google Drive links
 * into valid embeddable iframe / player sources.
 */

export function isDirectVideoFile(url: string): boolean {
  if (!url) return false;
  const clean = url.trim().toLowerCase();
  
  // If it's a blob object URL or inline video data
  if (clean.startsWith('blob:') || clean.startsWith('data:video/')) {
    return true;
  }

  // If it's an uploaded video file on our server
  if (clean.includes('/uploads/videos/') || clean.startsWith('/uploads/')) {
    return true;
  }

  // Common direct video extensions
  const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.m4v', '.mkv', '.3gp', '.avi'];
  const hasExt = videoExtensions.some(ext => clean.endsWith(ext) || clean.includes(`${ext}?`));
  if (hasExt) {
    return true;
  }

  return false;
}

export function formatVideoEmbedUrl(url: string): string {
  if (!url) return '';
  const trimmed = url.trim();

  // If already a direct video file (blob, mp4, etc.), return as is
  if (isDirectVideoFile(trimmed)) {
    return trimmed;
  }

  // 1. YouTube watch link: https://www.youtube.com/watch?v=VIDEO_ID or https://m.youtube.com/watch?v=VIDEO_ID
  const ytWatchMatch = trimmed.match(/(?:https?:\/\/)?(?:www\.|m\.)?youtube\.com\/watch\?(?:.*&)?v=([a-zA-Z0-9_-]{11})/i);
  if (ytWatchMatch && ytWatchMatch[1]) {
    return `https://www.youtube.com/embed/${ytWatchMatch[1]}`;
  }

  // 2. YouTube short link: https://youtu.be/VIDEO_ID
  const ytShortMatch = trimmed.match(/(?:https?:\/\/)?(?:www\.)?youtu\.be\/([a-zA-Z0-9_-]{11})/i);
  if (ytShortMatch && ytShortMatch[1]) {
    return `https://www.youtube.com/embed/${ytShortMatch[1]}`;
  }

  // 3. YouTube Shorts: https://www.youtube.com/shorts/VIDEO_ID
  const ytShortsMatch = trimmed.match(/(?:https?:\/\/)?(?:www\.)?youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/i);
  if (ytShortsMatch && ytShortsMatch[1]) {
    return `https://www.youtube.com/embed/${ytShortsMatch[1]}`;
  }

  // 4. YouTube Live: https://www.youtube.com/live/VIDEO_ID
  const ytLiveMatch = trimmed.match(/(?:https?:\/\/)?(?:www\.)?youtube\.com\/live\/([a-zA-Z0-9_-]{11})/i);
  if (ytLiveMatch && ytLiveMatch[1]) {
    return `https://www.youtube.com/embed/${ytLiveMatch[1]}`;
  }

  // 5. YouTube already embed: https://www.youtube.com/embed/VIDEO_ID
  const ytEmbedMatch = trimmed.match(/(?:https?:\/\/)?(?:www\.)?youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/i);
  if (ytEmbedMatch && ytEmbedMatch[1]) {
    return `https://www.youtube.com/embed/${ytEmbedMatch[1]}`;
  }

  // 6. Google Drive: https://drive.google.com/file/d/FILE_ID/view... or open?id=FILE_ID -> /preview
  const gDriveMatch = trimmed.match(/(?:https?:\/\/)?drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/i) ||
                      trimmed.match(/(?:https?:\/\/)?drive\.google\.com\/(?:open|uc)\?(?:.*&)?id=([a-zA-Z0-9_-]+)/i);
  if (gDriveMatch && gDriveMatch[1]) {
    return `https://drive.google.com/file/d/${gDriveMatch[1]}/preview`;
  }

  // 7. Vimeo: https://vimeo.com/VIDEO_ID
  const vimeoMatch = trimmed.match(/(?:https?:\/\/)?(?:www\.)?vimeo\.com\/(\d+)/i);
  if (vimeoMatch && vimeoMatch[1]) {
    return `https://player.vimeo.com/video/${vimeoMatch[1]}`;
  }

  return trimmed;
}

export function getOriginalVideoUrl(url: string): string {
  if (!url) return '';
  const trimmed = url.trim();

  // If it's a YouTube embed URL, convert back to watch URL for opening in a new tab if desired
  const ytEmbedMatch = trimmed.match(/youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/i);
  if (ytEmbedMatch && ytEmbedMatch[1]) {
    return `https://www.youtube.com/watch?v=${ytEmbedMatch[1]}`;
  }

  return trimmed;
}
