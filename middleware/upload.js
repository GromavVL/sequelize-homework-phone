const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, _file, cb) => {
    cb(null, 'public/image');
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `phone-${Date.now()}${ext}`);
  },
});

const fileFilter = (req, file, cb) => {
  const allowed = ['image/jpeg', 'image/png', 'image/webp'];
  if (allowed.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Дозволені лише зображення: jpg, png, webp'));
  }
};

module.exports = multer({ storage, fileFilter });
