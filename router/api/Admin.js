const adminServer = require('../../services/adminServives');
const express = require('express');
const {
  asyncHandle
} = require('../getSendResult');
const cryptor = require('../../util/crypt');
const jwt = require('../jwt');
const route = express.Router();


// route.post('/', asyncHandle(async (req, res, next) => {
//   const body = req.body;
//   adminServer.addAdmin(body);
// }))


route.post('/login', asyncHandle(async (req, res, next) => {

  const loginId = req.body.loginId;
  const loginPwd = req.body.loginPwd;


  const result = await adminServer.login(loginId, loginPwd);
  // console.log(result);
  // 判断是否登录成功 如果成功则在res对象的cookie中 加入一个cookie给客户端 
  if (result) {

    // 使用cookie颁发token
    // const value = cryptor.encrypt(result.id.toString());  //给cookie的值进行加密
    // res.cookie("token", value, {
    //   path: "/",
    //   domain: "localhost",
    //   maxAge: 7 * 24 * 3600 * 1000,
    // });
    // res.header("authorization", value);

    // 使用jwt
    jwt.puslish(res, undefined, {
      id: result.id,
    })

  }
  return result;
}));

route.get('/whoami', asyncHandle(async (req, res, next) => {
  const id = req.userId;
  return adminServer.getAdminById(id);
}))



module.exports = route;