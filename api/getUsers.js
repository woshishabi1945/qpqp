import { getUsers } from './logClick'; // 从 logClick.js 引入 getUsers 函数

export default function handler(req, res) {
  if (req.method === 'GET') {
    const users = getUsers(); // 获取用户记录
    return res.status(200).json(users);
  }
  return res.status(405).json({ error: 'Method Not Allowed' });
}
