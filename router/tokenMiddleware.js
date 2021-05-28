const {
  getErr
} = require('./getSendResult');
const {
  pathToRegexp
} = require('path-to-regexp');

const cryptor = require('../util/crypt');

const jwt = require('./jwt');



const needTokenApi = [
  {
    method: 'POST',
    path: "/api/everyday"
  },
  {
    method: 'PUT',
    path: '/api/everyday/:id'
  }, 
  {
    method: 'DELETE',
    path: '/api/everyday/:id'
  },
  {
    method: 'GET',
    path: '/api/admin/whoami'
  },
  {
    method: 'POST',
    path: '/api/blog',
  },
  {
    method: 'PUT',
    path: '/api/blog/:id'
  },
  {
    method: 'DELETE',
    path: '/api/blog/:id'
  }
]

module.exports = (req, res, next) => {
  //判断是否需要验证cookie
  const apis = needTokenApi.filter(api => {
    const reg = pathToRegexp(api.path);
    return req.method === api.method && reg.test(req.path);
  });
  if (apis.length === 0) { // 如果apis为0则u不需要验证
    next();
    return;
  }

  // cookie验证
  // let token = req.cookies.token;
  // if (!token) {
  //   token = req.headers.authorization;

  // }

  // if (!token) {
  //   // 没有登陆过 
  //   handleNonToken(req, res, next);
  //   return;
  // }

  // try {
  //   const userId = cryptor.decrypt(token); // 对cookie进行解密验证
  //   req.userId = userId;
  // } catch (err) {
  //   res.status(403).send('cookie值无效，验证失败');
  // }


  // jwt验证
  const result = jwt.verify(req);
  if (result) {
    // 验证通过
    req.userId = result.id;
    next();
  } else {
    handleNonToken(req, res, next);
  }


}


function handleNonToken(req, res, next) {
  res.status(403).send(getErr('you dont have any token to access the api', 403));
}