let users = []; // 存储用户点击数据

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name } = req.body;

    // 验证数据是否存在
    if (!name) {
      return res.status(400).json({ error: 'Name is required' });
    }

    // 保存点击记录
    users.push({ name, time: new Date().toLocaleString() });
    return res.status(200).json({ message: '点击已记录' });
  }

  // 返回不支持的请求类型
  return res.status(405).json({ error: 'Method Not Allowed' });
}

export const getUsers = () => users; // 导出用户数据供其他文件使用
