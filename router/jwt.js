const jwt = require("jsonwebtoken");
const secret = "0yhtinikgp4aksb6";

// 颁发token
exports.puslish = function (res, maxAge = 3600 * 24, info = {}) {
  const token = jwt.sign(info, secret, {
    expiresIn: maxAge,
  });
  console.log(token);
  res.header("authorization", token);
};

// 解析token
exports.verify = function (req) {
  let token = req.headers.authorization;
  if (!token) {
    return null;
  }

  token = token.split(" ");
  token = token.length === 1 ? token[0] : token[1];

  try {
    const result = jwt.verify(token, secret);
    return result;
  } catch {
    return null;
  }
};
