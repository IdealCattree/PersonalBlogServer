const express = require("express");
const path = require("path");
const history = require("connect-history-api-fallback");
const app = express();
const cookieParser = require("cookie-parser");

// app.use(history());

/**
 * 服务器渲染静态页面中间件
 */
app.use(express.static(path.resolve(__dirname, "../public")));

// 加入cookie中间件
app.use(cookieParser());

// 加入token中间件 用于解析cookie
app.use(require("./tokenMiddleware"));

/**
 * 做跨域处理
 */
app.use(require("./corsMiddleware"));

/**
 * 自动解析json 中间件
 */
app.use(
  express.json({
    extended: true,
  })
);

/**
 * 自动解析 urlencoded中间件
 */
app.use(
  express.urlencoded({
    extended: true,
  })
);

// 操作每日一句api
app.use("/api/everyday", require("./api/EveryDay"));

// 操作博客api
app.use("/api/blog", require("./api/Blog"));

// 文件上传api
app.use("/api/upload", require("./api/upload"));

// 操作评论api
app.use("/api/comment", require("./api/Comment"));

// 处理错误中间件
app.use(require("./errorMiddleware"));

// 管理员api
app.use("/api/admin", require("./api/Admin"));

app.listen(9527, () => {
  console.log("server listen on 9527");
});
