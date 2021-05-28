const express = require('express');
const multer = require('multer');
const path = require('path');
const route = express.Router();


const storage = multer.diskStorage({
  // 设置文件夹名字
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, '../../public', 'upload'));
  },
  // 设置文件名字
  filename: function (req, file, cb) {
    const timeStamp = Date.now();
    const randomStamp = Math.random().toString(36).slice(-8);
    const ext = path.extname(file.originalname);
    const filename = `${timeStamp}${randomStamp}${ext}`
    cb(null, filename);
  }
})

const upload = multer({
  storage,
  limits: {
    fileSize: 1 * 1024 * 1024,
  }
})


route.post('/', upload.single('img'), (req, res, next) => {
  const url = `/upload/${req.file.filename}`;
  res.status(200).send({
    code: 200,
    msg: "",
    url
  });
});


module.exports = route;