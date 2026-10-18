const express = require('express');
const app = express();

// تحديد المنفذ (Port)
const port = process.env.PORT || 3000;

// مسار رئيسي (عند فتح الرابط الأساسي)
app.get('/', (req, res) => {
  res.send('مرحباً بك! خادم Express يعمل بنجاح 🚀');
});

// مسار آخر يرجع بيانات بصيغة JSON (مفيد لتجارب الـ API)
app.get('/api/test', (req, res) => {
  res.json({
    status: 'success',
    message: 'هذه بيانات تجريبية من الباك إند',
    developer: 'جاهز للعمل!'
  });
});

// تشغيل الخادم
app.listen(port, () => {
  console.log(`الخادم شغال ويستمع على المنفذ ${port}`);
});
