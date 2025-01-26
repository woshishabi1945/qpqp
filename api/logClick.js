import fs from 'fs';
import path from 'path';

const filePath = path.resolve('./data/users.json');

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'Name is required' });
    }

    // 读取现有数据
    let users = [];
    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, 'utf-8');
      users = JSON.parse(fileData || '[]');
    }

    // 添加新数据
    users.push({ name, time: new Date().toLocaleString() });

    // 保存到文件
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));

    return res.status(200).json({ message: '点击已记录' });
  }

  return res.status(405).json({ error: 'Method Not Allowed' });
}
