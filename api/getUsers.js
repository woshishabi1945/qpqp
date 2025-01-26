import fs from 'fs';
import path from 'path';

const filePath = path.resolve('./data/users.json');

export default function handler(req, res) {
  if (req.method === 'GET') {
    // 读取文件中的用户数据
    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, 'utf-8');
      const users = JSON.parse(fileData || '[]');
      return res.status(200).json(users);
    } else {
      return res.status(200).json([]); // 文件不存在，返回空数组
    }
  }

  return res.status(405).json({ error: 'Method Not Allowed' });
}
