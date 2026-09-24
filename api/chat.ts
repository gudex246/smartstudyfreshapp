// Vercel Serverless Function: /api/chat
// Stores and broadcasts community chat messages across mobile devices and students

interface ChatMessagePayload {
  id: string;
  senderName: string;
  senderRole: 'student' | 'admin';
  senderEmail?: string;
  university?: string;
  channel: 'general' | 'physics' | 'math' | 'logic' | 'geog-econ' | 'admin-help';
  text: string;
  timestamp: string;
  avatarColor?: string;
  likes?: number;
}

let globalChatMessages: ChatMessagePayload[] = [
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

export default function handler(req: any, res: any) {
  // CORS Headers for multi-device & mobile support
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    const channel = req.query?.channel;
    if (channel) {
      const filtered = globalChatMessages.filter(m => m.channel === channel);
      return res.status(200).json(filtered);
    }
    return res.status(200).json(globalChatMessages);
  }

  if (req.method === 'POST') {
    try {
      const message = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
      if (!message || !message.text || !message.senderName) {
        return res.status(400).json({ error: 'Missing message content or sender' });
      }

      const formatted: ChatMessagePayload = {
        id: message.id || 'msg-' + Date.now(),
        senderName: message.senderName,
        senderRole: message.senderRole || 'student',
        senderEmail: message.senderEmail,
        university: message.university || 'Freshman Student',
        channel: message.channel || 'general',
        text: message.text.slice(0, 1000), // Protect against large payload
        timestamp: message.timestamp || new Date().toISOString(),
        avatarColor: message.avatarColor || 'bg-indigo-600',
        likes: 0
      };

      globalChatMessages.push(formatted);
      if (globalChatMessages.length > 500) {
        globalChatMessages = globalChatMessages.slice(-500);
      }

      return res.status(200).json({ success: true, message: formatted });
    } catch (e: any) {
      return res.status(500).json({ error: 'Failed to post message', message: e.message });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
