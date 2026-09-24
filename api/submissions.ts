// Vercel Serverless Function: /api/submissions
// Stores and syncs student payment submissions across mobile devices and admin dashboard

interface SubmissionPayload {
  id: string;
  studentName: string;
  studentEmail: string;
  studentPhone: string;
  paymentMethod: 'CBE' | 'Telebirr';
  accountOrPhoneUsed?: string;
  transactionRef: string;
  amount: number;
  screenshotUrl: string;
  submittedAt: string;
  status: 'pending' | 'verified' | 'rejected';
  verifiedAt?: string;
  adminNotes?: string;
  syncCode?: string;
}

// In-memory runtime cache for serverless environment
let globalSubmissions: SubmissionPayload[] = [
  {
    id: 'pay-demo-blen',
    studentName: 'Blen Tsegaye',
    studentEmail: 'student.sample@smartstudy.edu.et',
    studentPhone: '0911223344',
    paymentMethod: 'Telebirr',
    accountOrPhoneUsed: '0953201048',
    transactionRef: 'TL-98421035',
    amount: 300,
    screenshotUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80',
    submittedAt: new Date(Date.now() - 3600000 * 3).toISOString(),
    status: 'verified',
    verifiedAt: new Date(Date.now() - 3600000 * 2).toISOString(),
    adminNotes: 'Payment confirmed on Telebirr 0953201048. Access activated.',
    syncCode: 'SS-849102'
  },
  {
    id: 'pay-demo-dawit',
    studentName: 'Dawit Bekele',
    studentEmail: 'dawit.b@freshman.edu.et',
    studentPhone: '0922334455',
    paymentMethod: 'CBE',
    accountOrPhoneUsed: '1000521750255',
    transactionRef: 'FT24089921',
    amount: 300,
    screenshotUrl: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=600&q=80',
    submittedAt: new Date(Date.now() - 3600000 * 1).toISOString(),
    status: 'pending',
    adminNotes: 'Awaiting admin review from gudurualemayehu29@gmail.com',
    syncCode: 'SS-904128'
  }
];

export default function handler(req: any, res: any) {
  // CORS Headers for multi-device & mobile support
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    return res.status(200).json(globalSubmissions);
  }

  if (req.method === 'POST') {
    try {
      const submission = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
      if (!submission || !submission.id || !submission.studentName) {
        return res.status(400).json({ error: 'Missing required submission fields' });
      }

      // Check if already exists, else prepend
      const existingIdx = globalSubmissions.findIndex(s => s.id === submission.id);
      if (existingIdx >= 0) {
        globalSubmissions[existingIdx] = { ...globalSubmissions[existingIdx], ...submission };
      } else {
        globalSubmissions.unshift(submission);
      }

      // Limit memory list size
      if (globalSubmissions.length > 200) {
        globalSubmissions = globalSubmissions.slice(0, 200);
      }

      // 📱 Mobile Notification to Admin: If Vercel env has TELEGRAM_BOT_TOKEN & TELEGRAM_CHAT_ID
      const botToken = process.env.TELEGRAM_BOT_TOKEN;
      const chatId = process.env.TELEGRAM_CHAT_ID;
      if (botToken && chatId) {
        try {
          const alertMsg = [
            `🔔 *NEW 300 ETB PAYMENT SUBMITTED!*`,
            `━━━━━━━━━━━━━━━━━━━━`,
            `👤 *Student:* ${submission.studentName}`,
            `📱 *Phone:* ${submission.studentPhone}`,
            `📧 *Email:* ${submission.studentEmail}`,
            `🏦 *Method:* ${submission.paymentMethod}`,
            `🔢 *Txn Ref:* ${submission.transactionRef}`,
            `🔑 *Sync Code:* ${submission.syncCode || 'N/A'}`,
            `💰 *Amount:* 300 ETB`,
            `🕒 *Time:* ${new Date(submission.submittedAt).toLocaleString()}`,
            `━━━━━━━━━━━━━━━━━━━━`,
            `⚡ Check Admin Panel or call student: tel:${submission.studentPhone}`
          ].join('\n');

          fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              chat_id: chatId,
              text: alertMsg,
              parse_mode: 'Markdown'
            })
          }).catch((err) => console.warn('Telegram bot dispatch notice:', err));
        } catch (tgErr) {
          console.warn('Failed to dispatch telegram notification:', tgErr);
        }
      }

      return res.status(200).json({ success: true, submission });
    } catch (e: any) {
      return res.status(500).json({ error: 'Failed to save submission', message: e.message });
    }
  }

  if (req.method === 'PATCH') {
    try {
      const { id, status, adminNotes, verifiedAt } = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
      const target = globalSubmissions.find(s => s.id === id);
      if (target) {
        if (status) target.status = status;
        if (adminNotes !== undefined) target.adminNotes = adminNotes;
        if (verifiedAt) target.verifiedAt = verifiedAt;
        return res.status(200).json({ success: true, target });
      }
      return res.status(404).json({ error: 'Submission not found' });
    } catch (e: any) {
      return res.status(500).json({ error: 'Failed to update submission', message: e.message });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
