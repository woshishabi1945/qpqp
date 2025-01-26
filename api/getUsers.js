import { getUsers } from './logClick'; // 引入用户数据

export default function handler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).json(getUsers()); // 返回用户数据
  }

  // 返回不支持的请求类型
  return res.status(405).json({ error: 'Method Not Allowed' });
}
