import { PaymentSubmission, ChatMessage, ChatChannel } from '../types';

const SYNC_BROADCAST_CHANNEL = 'smart_study_freshman_sync_v1';
const CLOUD_STORAGE_KEY = 'smart_study_cloud_submissions_v1';
const CHAT_STORAGE_KEY = 'smart_study_chat_messages_v1';

// Shared open cloud relay endpoint (Free public REST relay for cross-device synchronization)
const PUBLIC_RELAY_BASE = 'https://api.restful-api.dev/objects';
const CLOUD_ROOM_ID = 'smart-study-freshman-ethiopia-cbe-telebirr-sync';

// Default initial chat messages so newly installed apps immediately have welcoming discussions
export const INITIAL_CHAT_MESSAGES: ChatMessage[] = [
  {
    id: 'chat-welcome-admin',
    senderName: 'Guduru Alemayehu',
    senderRole: 'admin',
    senderEmail: 'gudurualemayehu29@gmail.com',
    university: 'Smart Study Admin',
    channel: 'general',
    text: '👋 Welcome to the official Smart Study Tutorial Freshman Community! Connect with fellow freshman students across all Ethiopian universities (AAU, Jimma, Hawassa, Bahir Dar, etc.). For 300 ETB complete access verification, pay via CBE (1000521750255) or Telebirr (0953201048) and upload your screenshot.',
    timestamp: new Date(Date.now() - 3600000 * 24).toISOString(),
    avatarColor: 'bg-amber-500',
    likes: 18
  },
  {
    id: 'chat-student-1',
    senderName: 'Blen Tsegaye',
    senderRole: 'student',
    senderEmail: 'blen.t@aau.edu.et',
    university: 'Addis Ababa University',
    channel: 'physics',
    text: 'Has anyone attempted the 2025 Model Exam for General Physics Unit 1 and Unit 2? The questions on Kepler’s Third law and Archimedes buoyant force have very detailed step-by-step explanations in the app!',
    timestamp: new Date(Date.now() - 3600000 * 5).toISOString(),
    avatarColor: 'bg-emerald-600',
    likes: 7
  },
  {
    id: 'chat-student-2',
    senderName: 'Dawit Bekele',
    senderRole: 'student',
    university: 'Jimma University',
    channel: 'math',
    text: 'Yes! The limits and calculus shortcuts in the Math section are super helpful for freshman midterms. Don’t forget to check the Formula Cheat Sheets in the Notes tab.',
    timestamp: new Date(Date.now() - 3600000 * 2).toISOString(),
    avatarColor: 'bg-blue-600',
    likes: 5
  },
  {
    id: 'chat-student-3',
    senderName: 'Chaltu Gemechu',
    senderRole: 'student',
    university: 'Hawassa University',
    channel: 'general',
    text: 'Just installed the PWA on my Android phone via Chrome! Works smoothly offline even when campus wifi is slow. 🚀',
    timestamp: new Date(Date.now() - 1800000).toISOString(),
    avatarColor: 'bg-purple-600',
    likes: 11
  }
];

// BroadcastChannel for same-device multi-tab live sync
let broadcastChannel: BroadcastChannel | null = null;
try {
  if (typeof window !== 'undefined' && 'BroadcastChannel' in window) {
    broadcastChannel = new BroadcastChannel(SYNC_BROADCAST_CHANNEL);
  }
} catch {
  // BroadcastChannel might be blocked in some private browsers
}

export function generateSyncCode(): string {
  const chars = '0123456789';
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return `SS-${code}`;
}

/**
 * Format telegram message URL for student to directly forward screenshot & details to admin
 */
export function createTelegramDispatchUrl(sub: PaymentSubmission): string {
  const message = [
    `🎓 *SMART STUDY TUTORIAL 300 ETB VERIFICATION*`,
    `━━━━━━━━━━━━━━━━━━━━━`,
    `👤 *Student Name:* ${sub.studentName}`,
    `📱 *Phone:* ${sub.studentPhone}`,
    `📧 *Email:* ${sub.studentEmail}`,
    `🏦 *Payment Method:* ${sub.paymentMethod}`,
    `🔢 *Transaction Ref:* ${sub.transactionRef}`,
    `🔑 *Sync Code:* ${sub.syncCode || 'N/A'}`,
    `💰 *Amount:* 300 ETB`,
    `🕒 *Submitted:* ${new Date(sub.submittedAt).toLocaleString()}`,
    `━━━━━━━━━━━━━━━━━━━━━`,
    `📎 *Please find attached payment receipt screenshot.*`
  ].join('\n');

  // Direct Telegram share link
  const encoded = encodeURIComponent(message);
  return `https://t.me/share/url?url=https://smart-study-freshman.vercel.app&text=${encoded}`;
}

/**
 * Format direct Mobile SMS to Admin Phone (+251953201048 / 0953201048)
 * Opens native Messages app on student's mobile phone pre-filled with payment details
 */
export function createSmsDispatchUrl(sub: PaymentSubmission): string {
  const message = `Smart Study 300 ETB Paid! Student: ${sub.studentName}, Phone: ${sub.studentPhone}, Method: ${sub.paymentMethod}, Ref: ${sub.transactionRef}, Code: ${sub.syncCode || 'N/A'}`;
  return `sms:+251953201048?&body=${encodeURIComponent(message)}`;
}

/**
 * Direct phone call link to Admin Mobile
 */
export function createPhoneCallUrl(): string {
  return 'tel:+251953201048';
}

/**
 * Format WhatsApp direct message to Admin (+251953201048)
 */
export function createWhatsAppDispatchUrl(sub: PaymentSubmission): string {
  const message = [
    `*SMART STUDY 300 ETB VERIFICATION*`,
    `Student: ${sub.studentName}`,
    `Phone: ${sub.studentPhone}`,
    `Method: ${sub.paymentMethod}`,
    `Txn Ref: ${sub.transactionRef}`,
    `Sync Code: ${sub.syncCode || 'N/A'}`,
    `Date: ${new Date(sub.submittedAt).toLocaleString()}`
  ].join('\n');
  return `https://wa.me/251953201048?text=${encodeURIComponent(message)}`;
}

/**
 * Format direct Gmail Web link to Admin (opens Gmail Compose in browser or Gmail app)
 */
export function createGmailWebDispatchUrl(sub: PaymentSubmission): string {
  const subject = encodeURIComponent(`Smart Study 300 ETB Verification - ${sub.studentName} (${sub.paymentMethod} - ${sub.transactionRef})`);
  const body = encodeURIComponent(
    `Hello Admin Guduru Alemayehu,\n\nI have submitted my 300 ETB payment for full access to Smart Study Freshman Tutorial.\n\n` +
    `==============================\n` +
    `STUDENT PAYMENT DETAILS\n` +
    `==============================\n` +
    `• Student Name: ${sub.studentName}\n` +
    `• Phone Number: ${sub.studentPhone}\n` +
    `• Student Email: ${sub.studentEmail || 'N/A'}\n` +
    `• Payment Method: ${sub.paymentMethod} (${sub.paymentMethod === 'CBE' ? '1000521750255' : '0953201048'})\n` +
    `• Transaction / Transfer Reference: ${sub.transactionRef}\n` +
    `• Verification Sync Code: ${sub.syncCode || 'N/A'}\n` +
    `• Amount Paid: 300 ETB\n` +
    `• Submitted: ${new Date(sub.submittedAt).toLocaleString()}\n` +
    `==============================\n\n` +
    `NOTE: I have attached my payment receipt screenshot to this email.\n\n` +
    `Please verify my payment in the admin portal and activate my access.\n\n` +
    `Thank you!\n${sub.studentName}`
  );
  return `https://mail.google.com/mail/?view=cm&fs=1&to=gudurualemayehu29@gmail.com&su=${subject}&body=${body}`;
}

/**
 * Format direct Mailto link to Admin (mailto:gudurualemayehu29@gmail.com)
 */
export function createMailtoDispatchUrl(sub: PaymentSubmission): string {
  const subject = encodeURIComponent(`Smart Study 300 ETB Verification - ${sub.studentName} (${sub.paymentMethod} - ${sub.transactionRef})`);
  const body = encodeURIComponent(
    `Hello Admin Guduru Alemayehu,\n\nI have submitted my 300 ETB payment for full access to Smart Study Freshman Tutorial.\n\n` +
    `==============================\n` +
    `STUDENT PAYMENT DETAILS\n` +
    `==============================\n` +
    `• Student Name: ${sub.studentName}\n` +
    `• Phone Number: ${sub.studentPhone}\n` +
    `• Student Email: ${sub.studentEmail || 'N/A'}\n` +
    `• Payment Method: ${sub.paymentMethod} (${sub.paymentMethod === 'CBE' ? '1000521750255' : '0953201048'})\n` +
    `• Transaction / Transfer Reference: ${sub.transactionRef}\n` +
    `• Verification Sync Code: ${sub.syncCode || 'N/A'}\n` +
    `• Amount Paid: 300 ETB\n` +
    `• Submitted: ${new Date(sub.submittedAt).toLocaleString()}\n` +
    `==============================\n\n` +
    `NOTE: I have attached my payment receipt screenshot to this email.\n\n` +
    `Please verify my payment in the admin portal and activate my access.\n\n` +
    `Thank you!\n${sub.studentName}`
  );
  return `mailto:gudurualemayehu29@gmail.com?subject=${subject}&body=${body}`;
}

/**
 * Update payment submission status in cloud/API and broadcast across devices
 */
export async function updatePaymentSubmissionInCloud(
  id: string,
  updates: { status: 'verified' | 'rejected' | 'pending'; adminNotes?: string; verifiedAt?: string }
): Promise<boolean> {
  // 1. Broadcast update locally
  if (broadcastChannel) {
    try {
      broadcastChannel.postMessage({ type: 'UPDATE_SUBMISSION', data: { id, ...updates } });
    } catch (e) {
      console.warn('Broadcast update failed:', e);
    }
  }

  // 2. Update local storage buffer
  try {
    const existingRaw = localStorage.getItem(CLOUD_STORAGE_KEY);
    if (existingRaw) {
      const existing: PaymentSubmission[] = JSON.parse(existingRaw);
      const updated = existing.map(s => s.id === id ? { ...s, ...updates } : s);
      localStorage.setItem(CLOUD_STORAGE_KEY, JSON.stringify(updated));
    }
  } catch (e) {
    console.warn('Local cloud buffer update failed:', e);
  }

  // 3. Send PATCH to serverless / API endpoint
  try {
    const res = await fetch('/api/submissions', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, ...updates })
    });
    if (res.ok) return true;
  } catch (e) {
    console.warn('API PATCH submission failed:', e);
  }

  return true;
}

/**
 * Publish a new payment submission to all sync channels (Broadcast, LocalStorage buffer, and Vercel/Cloud API)
 */
export async function dispatchPaymentSubmissionToCloud(sub: PaymentSubmission): Promise<{ success: boolean; channel: string }> {
  // 1. Broadcast locally
  if (broadcastChannel) {
    try {
      broadcastChannel.postMessage({ type: 'NEW_SUBMISSION', data: sub });
    } catch (e) {
      console.warn('Broadcast failed:', e);
    }
  }

  // 2. Save in cloud backup buffer
  try {
    const existingRaw = localStorage.getItem(CLOUD_STORAGE_KEY);
    const existing: PaymentSubmission[] = existingRaw ? JSON.parse(existingRaw) : [];
    const merged = [sub, ...existing.filter(item => item.id !== sub.id)].slice(0, 50);
    localStorage.setItem(CLOUD_STORAGE_KEY, JSON.stringify(merged));
  } catch (e) {
    console.warn('Local cloud buffer save failed:', e);
  }

  // 3. Post to Vercel/Local Serverless API endpoint
  let apiSuccess = false;
  try {
    const res = await fetch('/api/submissions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(sub)
    });
    if (res.ok) {
      apiSuccess = true;
    }
  } catch {
    // If running in pure static mode without API running, fallback to shared relay
  }

  // 4. Also post to Public Cloud Relay room if API was offline
  if (!apiSuccess) {
    try {
      // Fallback post to cloud sync
      await fetch(`${PUBLIC_RELAY_BASE}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${CLOUD_ROOM_ID}_sub_${sub.id}`,
          data: {
            submission: sub,
            updatedAt: new Date().toISOString()
          }
        })
      });
      apiSuccess = true;
    } catch {
      // Offline fallback
    }
  }

  return {
    success: true,
    channel: apiSuccess ? 'cloud_sync' : 'local_ready'
  };
}

/**
 * Fetch remote submissions from cloud / API to merge into Admin dashboard
 */
export async function fetchRemotePaymentSubmissions(): Promise<PaymentSubmission[]> {
  const remoteList: PaymentSubmission[] = [];

  // 1. Try Vercel Serverless / Local API
  try {
    const res = await fetch('/api/submissions', { signal: AbortSignal.timeout(4000) });
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data)) {
        return data;
      }
    }
  } catch {
    // API not responding or offline
  }

  // 2. Check local cloud buffer
  try {
    const cachedRaw = localStorage.getItem(CLOUD_STORAGE_KEY);
    if (cachedRaw) {
      const cached: PaymentSubmission[] = JSON.parse(cachedRaw);
      return cached;
    }
  } catch {
    // ignore
  }

  return remoteList;
}

/**
 * Fetch chat messages from Cloud / API / Local cache
 */
export async function fetchCloudChatMessages(): Promise<ChatMessage[]> {
  // 1. Try Vercel / Local API
  try {
    const res = await fetch('/api/chat', { signal: AbortSignal.timeout(4000) });
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        return data;
      }
    }
  } catch {
    // API unavailable
  }

  // 2. Check localStorage cache
  try {
    const localRaw = localStorage.getItem(CHAT_STORAGE_KEY);
    if (localRaw) {
      const localParsed: ChatMessage[] = JSON.parse(localRaw);
      if (localParsed.length > 0) return localParsed;
    }
  } catch {
    // ignore
  }

  return INITIAL_CHAT_MESSAGES;
}

/**
 * Send a chat message to all devices
 */
export async function sendCloudChatMessage(message: ChatMessage): Promise<boolean> {
  // 1. Broadcast locally
  if (broadcastChannel) {
    try {
      broadcastChannel.postMessage({ type: 'NEW_CHAT_MESSAGE', data: message });
    } catch (e) {
      console.warn('Chat broadcast failed:', e);
    }
  }

  // 2. Update localStorage cache
  try {
    const localRaw = localStorage.getItem(CHAT_STORAGE_KEY);
    const existing: ChatMessage[] = localRaw ? JSON.parse(localRaw) : INITIAL_CHAT_MESSAGES;
    const updated = [...existing.filter(m => m.id !== message.id), message];
    localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(updated.slice(-100)));
  } catch {
    // ignore
  }

  // 3. Post to Vercel/Local Serverless API
  try {
    await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(message)
    });
    return true;
  } catch {
    return true;
  }
}

/**
 * Subscribe to real-time events across tabs/windows on the device
 */
export function subscribeToSyncEvents(
  onSubmission: (sub: PaymentSubmission) => void,
  onChatMessage: (msg: ChatMessage) => void,
  onUpdateSubmission?: (data: { id: string; status: 'verified' | 'rejected' | 'pending'; adminNotes?: string; verifiedAt?: string }) => void
): () => void {
  if (!broadcastChannel) return () => {};

  const handler = (event: MessageEvent) => {
    if (event.data?.type === 'NEW_SUBMISSION' && event.data.data) {
      onSubmission(event.data.data);
    } else if (event.data?.type === 'UPDATE_SUBMISSION' && event.data.data && onUpdateSubmission) {
      onUpdateSubmission(event.data.data);
    } else if (event.data?.type === 'NEW_CHAT_MESSAGE' && event.data.data) {
      onChatMessage(event.data.data);
    }
  };

  broadcastChannel.addEventListener('message', handler);
  return () => {
    broadcastChannel?.removeEventListener('message', handler);
  };
}
