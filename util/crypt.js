// 使用ase：128加密算法加密
const secret = Buffer.from('lzefeeyiou0wdfrk');
const crypto = require('crypto');

// 准备一个iv向量
const iv = Buffer.from('1h0zbvcbp9bvzxzf');


exports.encrypt = function (str) {
  const cry = crypto.createCipheriv('aes-128-cbc', secret, iv);

  let result = cry.update(str, "utf-8", "hex");
  result += cry.final("hex");
  return result;
}

exports.decrypt = function (str) {
  const decry = crypto.createDecipheriv('aes-128-cbc', secret, iv);
  let result = decry.update(str, "hex", "utf-8");
  result += decry.final("utf-8");
  return result;
}