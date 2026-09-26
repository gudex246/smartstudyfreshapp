// Vercel Serverless Function: /api/videos
// Stores and syncs custom video masterclasses across desktop and mobile devices

interface VideoTutorialPayload {
  id: string;
  courseId: string;
  courseCode: string;
  title: string;
  description: string;
  videoUrl: string;
  duration: string;
  topic: string;
  instructor: string;
  isPremium: boolean;
  views?: number;
  addedAt?: string;
  storageType?: 'youtube' | 'gdrive' | 'direct' | 'server' | 'local_device';
}

// Global in-memory cache for serverless instances
let globalVideos: VideoTutorialPayload[] = [
  {
    id: 'vid-econ-1',
    courseId: 'econ-1011',
    courseCode: 'Econ 1011',
    title: 'Economics for Social: Demand, Supply & Market Equilibrium Calculations',
    description: 'Step-by-step solving of linear demand and supply equations, price ceiling shortages, price floor surpluses, and equilibrium price/quantity determination.',
    videoUrl: 'https://www.youtube.com/embed/juM2ROSLWSE',
    duration: '27:15',
    topic: 'Demand, Supply & Equilibrium',
    instructor: 'Guduru Alemayehu (Smart Study Tutorial)',
    isPremium: false,
    views: 1560,
    addedAt: '2025-09-22',
    storageType: 'youtube'
  },
  {
    id: 'vid-econ-2',
    courseId: 'econ-1011',
    courseCode: 'Econ 1011',
    title: 'Economics for Social: Elasticity of Demand & Consumer Utility Maximization',
    description: 'Mastering midpoint price elasticity formulas, cross-price elasticity for substitutes/complements, and equi-marginal utility conditions (MUx/Px = MUy/Py).',
    videoUrl: 'https://www.youtube.com/embed/6Z3h-fJ15pI',
    duration: '32:40',
    topic: 'Elasticity & Consumer Behavior',
    instructor: 'Guduru Alemayehu (Smart Study Tutorial)',
    isPremium: true,
    views: 1240,
    addedAt: '2025-09-26',
    storageType: 'youtube'
  },
  {
    id: 'vid-math-1',
    courseId: 'math-1011',
    courseCode: 'Math 1011',
    title: 'Mathematics for Natural: Limits, Continuity & Squeeze Theorem Proofs',
    description: 'Freshman midterm walkthrough: solving indeterminate forms (0/0), rationalizing radicals, trigonometric limits (sin x / x), and epsilon-delta intuition.',
    videoUrl: 'https://www.youtube.com/embed/fTskg5p_q_o',
    duration: '35:20',
    topic: 'Limits & Continuity',
    instructor: 'Guduru Alemayehu (Smart Study Tutorial)',
    isPremium: false,
    views: 2180,
    addedAt: '2025-09-20',
    storageType: 'youtube'
  },
  {
    id: 'vid-math-2',
    courseId: 'math-1011',
    courseCode: 'Math 1011',
    title: 'Mathematics for Natural: Derivatives by Definition & Chain Rule Masterclass',
    description: 'Computing first derivatives using difference quotients, product rule, quotient rule, and composite functions with trigonometric functions.',
    videoUrl: 'https://www.youtube.com/embed/rAof9Ld5sOg',
    duration: '42:10',
    topic: 'Derivatives & Applications',
    instructor: 'Guduru Alemayehu (Smart Study Tutorial)',
    isPremium: true,
    views: 1890,
    addedAt: '2025-09-21',
    storageType: 'youtube'
  },
  {
    id: 'vid-phys-1',
    courseId: 'phys-1011',
    courseCode: 'Phys 1011',
    title: 'General Physics: Vector Decomposition & 2D Kinematics Projectile Motion',
    description: 'Step-by-step vector algebra (dot and cross products), parabolic projectile trajectories, maximum range angles, and flight time computations.',
    videoUrl: 'https://www.youtube.com/embed/82b_14xXq3o',
    duration: '38:50',
    topic: 'Vectors & 2D Kinematics',
    instructor: 'Guduru Alemayehu (Smart Study Tutorial)',
    isPremium: false,
    views: 3120,
    addedAt: '2025-09-18',
    storageType: 'youtube'
  },
  {
    id: 'vid-phys-2',
    courseId: 'phys-1011',
    courseCode: 'Phys 1011',
    title: 'General Physics: Newton\'s Laws & Inclined Plane Friction Problems',
    description: 'Drawing free body diagrams, computing static vs kinetic friction coefficients, Atwood machine tension, and circular motion centripetal acceleration.',
    videoUrl: 'https://www.youtube.com/embed/kKKM8Y-u7ds',
    duration: '45:15',
    topic: 'Dynamics & Newton\'s Laws',
    instructor: 'Guduru Alemayehu (Smart Study Tutorial)',
    isPremium: true,
    views: 2470,
    addedAt: '2025-09-22',
    storageType: 'youtube'
  },
  {
    id: 'vid-logic-1',
    courseId: 'phil-1011',
    courseCode: 'Phil 1011',
    title: 'Logic & Critical Thinking: Identifying Informal Fallacies in Arguments',
    description: 'Recognizing fallacies of relevance (ad hominem, straw man, appeal to pity), fallacies of weak induction, and circular reasoning in Ethiopian university exams.',
    videoUrl: 'https://www.youtube.com/embed/v9qY8Qk9Ccs',
    duration: '29:40',
    topic: 'Informal Fallacies',
    instructor: 'Guduru Alemayehu (Smart Study Tutorial)',
    isPremium: false,
    views: 1950,
    addedAt: '2025-09-19',
    storageType: 'youtube'
  },
  {
    id: 'vid-psyc-1',
    courseId: 'psyc-1011',
    courseCode: 'Psyc 1011',
    title: 'General Psychology: Classical vs Operant Conditioning & Learning Theories',
    description: 'Pavlov\'s unconditioned and conditioned stimuli, Skinner\'s reinforcement schedules (fixed vs variable ratio), and cognitive learning paradigms.',
    videoUrl: 'https://www.youtube.com/embed/qG2SwE_6uVM',
    duration: '31:10',
    topic: 'Theories of Learning',
    instructor: 'Guduru Alemayehu (Smart Study Tutorial)',
    isPremium: true,
    views: 1680,
    addedAt: '2025-09-23',
    storageType: 'youtube'
  },
  {
    id: 'vid-geog-1',
    courseId: 'geog-1011',
    courseCode: 'Geog 1011',
    title: 'Geography of Ethiopia & Horn: Physiographic Divisions & Great Rift Valley',
    description: 'Comprehensive analysis of Western Highlands, Southeastern Lowlands, and the Afar Triangle formation with past university exam questions.',
    videoUrl: 'https://www.youtube.com/embed/Ede3y6mZqU8',
    duration: '34:25',
    topic: 'Physiography of Ethiopia',
    instructor: 'Guduru Alemayehu (Smart Study Tutorial)',
    isPremium: true,
    views: 1420,
    addedAt: '2025-09-24',
    storageType: 'youtube'
  },
  {
    id: 'vid-eng-1',
    courseId: 'fren-1011',
    courseCode: 'FLEn 1011',
    title: 'Communicative English 1: Active vs Passive Voice & Transitional Devices',
    description: 'Academic writing conventions, subject-verb agreement pitfalls, and modal verbs for university academic essays.',
    videoUrl: 'https://www.youtube.com/embed/x1Q5Q9Lp6Hw',
    duration: '26:50',
    topic: 'Grammar & Writing Skills',
    instructor: 'Guduru Alemayehu (Smart Study Tutorial)',
    isPremium: true,
    views: 1110,
    addedAt: '2025-09-25',
    storageType: 'youtube'
  }
];

export default function handler(req: any, res: any) {
  // CORS Headers for multi-device & mobile support
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // GET: return all videos
  if (req.method === 'GET') {
    return res.status(200).json(globalVideos);
  }

  // POST / PUT: add or update a video tutorial or batch sync
  if (req.method === 'POST' || req.method === 'PUT') {
    try {
      const payload = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
      
      // If payload is an array, batch replace / merge
      if (Array.isArray(payload)) {
        for (const item of payload) {
          if (item && item.id) {
            const idx = globalVideos.findIndex(v => v.id === item.id);
            if (idx >= 0) {
              globalVideos[idx] = { ...globalVideos[idx], ...item };
            } else {
              globalVideos.unshift(item);
            }
          }
        }
        return res.status(200).json({ success: true, count: globalVideos.length, videos: globalVideos });
      }

      if (!payload || !payload.id || !payload.title || !payload.videoUrl) {
        return res.status(400).json({ error: 'Missing required video fields: id, title, videoUrl' });
      }

      const existingIdx = globalVideos.findIndex(v => v.id === payload.id);
      if (existingIdx >= 0) {
        globalVideos[existingIdx] = { ...globalVideos[existingIdx], ...payload };
      } else {
        globalVideos.unshift(payload);
      }

      return res.status(200).json({ success: true, video: payload });
    } catch (e: any) {
      return res.status(400).json({ error: e.message || 'Invalid JSON payload' });
    }
  }

  // DELETE: delete a video by query param id or body
  if (req.method === 'DELETE') {
    try {
      const url = new URL(req.url, 'http://localhost:3000');
      const id = url.searchParams.get('id') || req.body?.id;
      if (!id) {
        return res.status(400).json({ error: 'Missing video id to delete' });
      }
      globalVideos = globalVideos.filter(v => v.id !== id);
      return res.status(200).json({ success: true, deletedId: id });
    } catch (e: any) {
      return res.status(400).json({ error: e.message });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
