import { PaymentSubmission, ChatMessage, ChatChannel } from '../types';

const SYNC_BROADCAST_CHANNEL = 'smart_study_freshman_sync_v1';
const CLOUD_STORAGE_KEY = 'smart_study_cloud_submissions_v1';
const CHAT_STORAGE_KEY = 'smart_study_chat_messages_v1';

// Cross-device Global PubSub & CDN storage for instant receipt sync across all phones & PCs
export const NTFY_SUBMISSIONS_TOPIC = 'https://ntfy.sh/smartstudy_subs_guduru29';
export const NTFY_RECEIPTS_TOPIC = 'https://ntfy.sh/smartstudy_receipts_guduru29';

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
  const host = typeof window !== 'undefined' ? window.location.origin : 'https://smart-study-freshman.vercel.app';
  const receiptImgUrl = sub.screenshotUrl && !sub.screenshotUrl.startsWith('data:')
    ? `\n🖼 *Receipt Link:* ${host}${sub.screenshotUrl}`
    : '';

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
    receiptImgUrl,
    `━━━━━━━━━━━━━━━━━━━━━`,
    `📎 *Please verify my 300 ETB payment and activate full access!*`
  ].filter(Boolean).join('\n');

  const encoded = encodeURIComponent(message);
  return `https://t.me/share/url?url=${encodeURIComponent(host)}&text=${encoded}`;
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
 * Format direct Gmail Web link to Admin (opens Gmail Compose in browser or Gmail app)
 */
export function createGmailWebDispatchUrl(sub: PaymentSubmission): string {
  const subject = encodeURIComponent(`Smart Study 300 ETB Verification - ${sub.studentName} (${sub.paymentMethod} - ${sub.transactionRef})`);
  const receiptImgUrl = sub.screenshotUrl && !sub.screenshotUrl.startsWith('data:')
    ? `• Payment Screenshot Link: ${typeof window !== 'undefined' ? window.location.origin : ''}${sub.screenshotUrl}\n`
    : '';

  const body = encodeURIComponent(
    `Hello Admin Guduru Alemayehu,\n\nI have completed my 300 ETB payment for the Smart Study Freshman Tutorial Full Package.\n\n` +
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
    receiptImgUrl +
    `==============================\n\n` +
    `NOTE: My payment receipt screenshot is attached / linked above.\n\n` +
    `Please verify my payment in the admin portal to activate my full access.\n\n` +
    `Thank you!\n${sub.studentName}`
  );
  return `https://mail.google.com/mail/?view=cm&fs=1&to=gudurualemayehu29@gmail.com&su=${subject}&body=${body}`;
}

/**
 * Format direct Mailto link to Admin (mailto:gudurualemayehu29@gmail.com)
 */
export function createMailtoDispatchUrl(sub: PaymentSubmission): string {
  const subject = encodeURIComponent(`Smart Study 300 ETB Verification - ${sub.studentName} (${sub.paymentMethod} - ${sub.transactionRef})`);
  const receiptImgUrl = sub.screenshotUrl && !sub.screenshotUrl.startsWith('data:')
    ? `• Payment Screenshot Link: ${typeof window !== 'undefined' ? window.location.origin : ''}${sub.screenshotUrl}\n`
    : '';

  const body = encodeURIComponent(
    `Hello Admin Guduru Alemayehu,\n\nI have completed my 300 ETB payment for the Smart Study Freshman Tutorial Full Package.\n\n` +
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
    receiptImgUrl +
    `==============================\n\n` +
    `NOTE: My payment receipt screenshot is attached / linked above.\n\n` +
    `Please verify my payment in the admin portal to activate my full access.\n\n` +
    `Thank you!\n${sub.studentName}`
  );
  return `mailto:gudurualemayehu29@gmail.com?subject=${subject}&body=${body}`;
}

/**
 * Convert base64 data URL to binary Blob
 */
function dataUrlToBlob(dataUrl: string): Blob | null {
  try {
    const parts = dataUrl.split(',');
    if (parts.length < 2) return null;
    const mimeMatch = parts[0].match(/:(.*?);/);
    const mime = mimeMatch ? mimeMatch[1] : 'image/jpeg';
    const binary = atob(parts[1]);
    const array = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      array[i] = binary.charCodeAt(i);
    }
    return new Blob([array], { type: mime });
  } catch {
    return null;
  }
}

/**
 * Upload screenshot to global multi-device CDN
 */
export async function uploadReceiptToCloud(dataUrl: string, subId: string): Promise<string | null> {
  if (!dataUrl || !dataUrl.startsWith('data:')) {
    return dataUrl || null;
  }
  try {
    const blob = dataUrlToBlob(dataUrl);
    if (!blob) return null;

    const res = await fetch(NTFY_RECEIPTS_TOPIC, {
      method: 'POST',
      headers: {
        'Filename': `receipt-${subId}.jpg`,
        'Title': `Payment Receipt ${subId}`
      },
      body: blob
    });
    if (res.ok) {
      const data = await res.json();
      if (data && data.attachment && data.attachment.url) {
        return data.attachment.url;
      }
    }
  } catch (err) {
    console.warn('Cloud receipt upload failed, fallback to local', err);
  }
  return null;
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

  // 3. Send PATCH to Local API endpoint
  try {
    await fetch('/api/submissions', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, ...updates })
    });
  } catch (e) {
    console.warn('API PATCH submission failed:', e);
  }

  // 4. Broadcast to Global multi-device sync topic
  try {
    await fetch(NTFY_SUBMISSIONS_TOPIC, {
      method: 'POST',
      headers: {
        'Title': `Verified: ${id}`,
        'Tags': 'white_check_mark'
      },
      body: JSON.stringify({ type: 'UPDATE_SUBMISSION', data: { id, ...updates } })
    });
  } catch (err) {
    console.warn('Global update broadcast failed:', err);
  }

  return true;
}

/**
 * Publish a new payment submission to all sync channels (Broadcast, LocalStorage, Local API, and Global Cloud Relay)
 */
export async function dispatchPaymentSubmissionToCloud(sub: PaymentSubmission): Promise<{ success: boolean; channel: string; updatedSubmission: PaymentSubmission }> {
  let finalSub: PaymentSubmission = { ...sub };

  // 1. Broadcast locally for multi-tab
  if (broadcastChannel) {
    try {
      broadcastChannel.postMessage({ type: 'NEW_SUBMISSION', data: sub });
    } catch (e) {
      console.warn('Broadcast failed:', e);
    }
  }

  // 2. Upload screenshot to Global CDN if base64 so ANY device worldwide can view it
  if (finalSub.screenshotUrl && finalSub.screenshotUrl.startsWith('data:')) {
    try {
      const cloudUrl = await uploadReceiptToCloud(finalSub.screenshotUrl, finalSub.id);
      if (cloudUrl) {
        finalSub.screenshotUrl = cloudUrl;
      }
    } catch {}
  }

  // 3. Post to Local API endpoint
  let apiSuccess = false;
  try {
    const res = await fetch('/api/submissions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(finalSub)
    });
    if (res.ok) {
      const resJson = await res.json();
      if (resJson && resJson.submission) {
        if (!finalSub.screenshotUrl.startsWith('http') && resJson.submission.screenshotUrl) {
          const origin = typeof window !== 'undefined' ? window.location.origin : '';
          finalSub.screenshotUrl = resJson.submission.screenshotUrl.startsWith('http')
            ? resJson.submission.screenshotUrl
            : `${origin}${resJson.submission.screenshotUrl}`;
        }
      }
      apiSuccess = true;
    }
  } catch {}

  // 4. Publish to global multi-device sync topic (for cross-phone/PC sync)
  try {
    await fetch(NTFY_SUBMISSIONS_TOPIC, {
      method: 'POST',
      headers: {
        'Title': `300 ETB Payment: ${finalSub.studentName}`,
        'Tags': 'moneybag,mortar_board'
      },
      body: JSON.stringify({ type: 'SUBMISSION', data: finalSub })
    });
  } catch (err) {
    console.warn('Global pubsub broadcast failed:', err);
  }

  // 5. Save in local backup buffer
  try {
    const existingRaw = localStorage.getItem(CLOUD_STORAGE_KEY);
    const existing: PaymentSubmission[] = existingRaw ? JSON.parse(existingRaw) : [];
    const merged = [finalSub, ...existing.filter(item => item.id !== finalSub.id)].slice(0, 50);
    localStorage.setItem(CLOUD_STORAGE_KEY, JSON.stringify(merged));
  } catch (e) {
    console.warn('Local cloud buffer save failed:', e);
  }

  return {
    success: true,
    channel: apiSuccess ? 'cloud_sync' : 'local_ready',
    updatedSubmission: finalSub
  };
}

/**
 * Fetch remote submissions from both Global Cloud Relay & Local API
 */
export async function fetchRemotePaymentSubmissions(): Promise<PaymentSubmission[]> {
  const map = new Map<string, PaymentSubmission>();

  // 1. Fetch from Global Multi-Device Topic (sync across all phones & PCs)
  try {
    const resGlobal = await fetch(`${NTFY_SUBMISSIONS_TOPIC}/json?poll=1&since=24h`, {
      signal: AbortSignal.timeout(4500)
    });
    if (resGlobal.ok) {
      const text = await resGlobal.text();
      const lines = text.trim().split('\n');
      for (const line of lines) {
        if (!line.trim()) continue;
        try {
          const item = JSON.parse(line);
          let parsedMsg: any = null;

          // If ntfy converted large payload to attachment, fetch and parse JSON file
          if (item && item.attachment && item.attachment.url && (item.attachment.name?.endsWith('.json') || item.attachment.type?.includes('json'))) {
            try {
              const attRes = await fetch(item.attachment.url, { signal: AbortSignal.timeout(3500) });
              if (attRes.ok) {
                parsedMsg = await attRes.json();
              }
            } catch {}
          }

          if (!parsedMsg && item && item.message) {
            try {
              parsedMsg = JSON.parse(item.message);
            } catch {}
          }

          if (parsedMsg && parsedMsg.type === 'SUBMISSION' && parsedMsg.data && parsedMsg.data.id) {
            const prev = map.get(parsedMsg.data.id);
            if (!prev || (prev.status !== 'verified' && parsedMsg.data.status === 'verified') || (!prev.screenshotUrl && parsedMsg.data.screenshotUrl)) {
              map.set(parsedMsg.data.id, parsedMsg.data);
            }
          } else if (parsedMsg && parsedMsg.type === 'UPDATE_SUBMISSION' && parsedMsg.data && parsedMsg.data.id) {
            const existing = map.get(parsedMsg.data.id);
            if (existing) {
              map.set(parsedMsg.data.id, { ...existing, ...parsedMsg.data });
            }
          }
        } catch {}
      }
    }
  } catch (err) {
    console.warn('Global sync poll notice:', err);
  }

  // 2. Fetch from Local Server API
  try {
    const res = await fetch('/api/submissions', {
      signal: AbortSignal.timeout(4000),
      cache: 'no-store'
    });
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data)) {
        for (const sub of data) {
          const existing = map.get(sub.id);
          if (!existing) {
            map.set(sub.id, sub);
          } else if (sub.status === 'verified' || (!existing.screenshotUrl && sub.screenshotUrl)) {
            map.set(sub.id, { ...existing, ...sub });
          }
        }
      }
    }
  } catch {}

  // 3. Fallback to localStorage buffer
  try {
    const cachedRaw = localStorage.getItem(CLOUD_STORAGE_KEY);
    if (cachedRaw) {
      const cached: PaymentSubmission[] = JSON.parse(cachedRaw);
      for (const sub of cached) {
        if (!map.has(sub.id)) {
          map.set(sub.id, sub);
        }
      }
    }
  } catch {}

  return Array.from(map.values()).sort(
    (a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()
  );
}

/**
 * Subscribe to real-time submission events via SSE for instant multi-device arrival
 */
export function subscribeToRemoteSubmissions(onUpdate: (data: any) => void): () => void {
  let es: EventSource | null = null;
  try {
    es = new EventSource(`${NTFY_SUBMISSIONS_TOPIC}/sse`);
    es.onmessage = async (event) => {
      try {
        const item = JSON.parse(event.data);
        if (item && item.attachment && item.attachment.url && (item.attachment.name?.endsWith('.json') || item.attachment.type?.includes('json'))) {
          try {
            const attRes = await fetch(item.attachment.url);
            if (attRes.ok) {
              const payload = await attRes.json();
              onUpdate(payload);
              return;
            }
          } catch {}
        }

        if (item && item.message) {
          try {
            const payload = JSON.parse(item.message);
            onUpdate(payload);
          } catch {}
        }
      } catch {}
    };
  } catch (err) {
    console.warn('SSE subscription failed, falling back to polling', err);
  }

  return () => {
    if (es) {
      es.close();
    }
  };
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
