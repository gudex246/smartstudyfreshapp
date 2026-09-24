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
