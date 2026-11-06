// Vercel Serverless Function: /api/check-status
// Instant unlock verification check for students

export default async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { id, email, phone, ref } = req.query || {};

  try {
    // Check against ntfy cloud pubsub or return status
    return res.status(200).json({
      found: false,
      status: 'pending',
      isUnlocked: false
    });
  } catch (e: any) {
    return res.status(500).json({ error: e.message });
  }
}
