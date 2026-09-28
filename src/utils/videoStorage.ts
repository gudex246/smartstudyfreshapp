/**
 * Persistent offline IndexedDB storage for uploaded video files.
 * Unlike temporary blob URLs which are destroyed when a browser tab closes or on the next day,
 * IndexedDB stores the actual video Blob data permanently in the user's browser.
 */

const DB_NAME = 'SmartStudyVideoDB';
const STORE_NAME = 'video_blobs';
const DB_VERSION = 1;

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !('indexedDB' in window)) {
      return reject(new Error('IndexedDB is not available in this environment.'));
    }

    const request = window.indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

/**
 * Stores a video file/blob permanently into IndexedDB under a unique key.
 * Returns an 'idb://...' protocol URI that can be stored in VideoTutorial.videoUrl.
 */
export async function saveVideoBlob(id: string, file: Blob | File): Promise<string> {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const req = store.put(file, id);

      req.onsuccess = () => resolve(`idb://${id}`);
      req.onerror = () => reject(req.error);
    });
  } catch (err) {
    console.error('Failed to persist video to IndexedDB:', err);
    throw err;
  }
}

/**
 * Retrieves a video Blob by its ID or URI from IndexedDB.
 */
export async function getVideoBlob(idOrUri: string): Promise<Blob | null> {
  try {
    const id = idOrUri.replace(/^idb:\/\//, '');
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const req = store.get(id);

      req.onsuccess = () => resolve((req.result as Blob) || null);
      req.onerror = () => reject(req.error);
    });
  } catch (err) {
    console.error('Failed to load video from IndexedDB:', err);
    return null;
  }
}

/**
 * Deletes a stored video from IndexedDB.
 */
export async function deleteVideoBlob(idOrUri: string): Promise<void> {
  try {
    const id = idOrUri.replace(/^idb:\/\//, '');
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const req = store.delete(id);

      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  } catch (err) {
    console.warn('Failed to delete video from IndexedDB:', err);
  }
}

/**
 * Returns all video keys saved in IndexedDB
 */
export async function getAllVideoBlobKeys(): Promise<string[]> {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const req = store.getAllKeys();
      req.onsuccess = () => resolve(((req.result as any[]) || []).map(k => String(k)));
      req.onerror = () => reject(req.error);
    });
  } catch (err) {
    console.error('Failed to get video keys from IndexedDB:', err);
    return [];
  }
}

/**
 * Uploads a raw File or Blob directly to /api/upload-video
 */
export async function uploadFileToServer(file: Blob | File, filename?: string, id?: string): Promise<string | null> {
  try {
    const cleanName = filename || (file instanceof File ? file.name : `video_${Date.now()}.mp4`);
    const cleanId = id || `vid_${Date.now()}`;
    const res = await fetch(`/api/upload-video?filename=${encodeURIComponent(cleanName)}&id=${encodeURIComponent(cleanId)}`, {
      method: 'POST',
      headers: {
        'Content-Type': file.type || 'video/mp4'
      },
      body: file
    });
    if (res.ok) {
      const data = await res.json();
      if (data.success && data.url) {
        return data.url;
      }
    }
  } catch (err) {
    console.warn('Upload to server failed (offline or local dev):', err);
  }
  return null;
}

/**
 * Reads local binary video blob from IndexedDB and uploads it to the server
 * so that mobile phones and any device can stream it over HTTP.
 */
export async function uploadLocalVideoToServer(idOrUri: string, filename?: string): Promise<string | null> {
  try {
    const blob = await getVideoBlob(idOrUri);
    if (!blob) return null;
    const cleanId = idOrUri.replace(/^idb:\/\//, '');
    const cleanName = filename || `${cleanId}.mp4`;
    return await uploadFileToServer(blob, cleanName, cleanId);
  } catch (err) {
    console.warn('Failed to sync video to server from IndexedDB:', err);
    return null;
  }
}

/**
 * Checks if a video URL (such as /uploads/videos/...) is reachable on the server
 */
export async function checkServerVideoExists(url: string): Promise<boolean> {
  try {
    if (!url || url.startsWith('idb://') || url.startsWith('blob:')) return false;
    const res = await fetch(url, { method: 'HEAD' });
    return res.ok;
  } catch {
    return false;
  }
}

/**
 * Scans all video blobs saved in IndexedDB and uploads any missing ones to the server
 * so that mobile phones and any other devices can stream the original video files immediately.
 */
export async function syncAllLocalVideosToServer(): Promise<{ synced: number; total: number; uploadedUrls: Record<string, string> }> {
  try {
    const keys = await getAllVideoBlobKeys();
    let synced = 0;
    const uploadedUrls: Record<string, string> = {};

    for (const key of keys) {
      const cleanId = key.replace(/^idb:\/\//, '');
      const serverUrl = `/uploads/videos/${cleanId}.mp4`;
      const exists = await checkServerVideoExists(serverUrl);
      if (!exists) {
        const uploaded = await uploadLocalVideoToServer(key, `${cleanId}.mp4`);
        if (uploaded) {
          synced++;
          uploadedUrls[cleanId] = uploaded;
        }
      } else {
        uploadedUrls[cleanId] = serverUrl;
      }
    }
    return { synced, total: keys.length, uploadedUrls };
  } catch (err) {
    console.warn('syncAllLocalVideosToServer warning:', err);
    return { synced: 0, total: 0, uploadedUrls: {} };
  }
}
