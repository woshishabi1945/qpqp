let users = []; // 内存存储（重启后清空）

export function getUsers() {
  return users; // 返回用户记录
}

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name } = req.body;
    if (!name) return res.status(400).json({ error: 'Name is required' });

    // 记录点击信息
    users.push({ name, time: new Date().toLocaleString() });
    return res.status(200).json({ message: '点击已记录' });
  }
  return res.status(405).json({ error: 'Method Not Allowed' });
}
