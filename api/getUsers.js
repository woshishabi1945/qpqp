let users = require('./logClick').users; // 引用用户记录

export default function handler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).json(users);
  }
  return res.status(405).json({ error: 'Method Not Allowed' });
}