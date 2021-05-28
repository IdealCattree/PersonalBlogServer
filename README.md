# PersonalServer

> 作者：@猫的树
> 联系方式：
> email: cjhaonan@163.com
> phone: 13933616583

> 项目链接：http://krislan.tech

## 技术栈：

Vue + Vue-Router + Vuex + ES6/7 + Scss + Axios + Nodejs + Express + Mysql + Sequelize

## 项目介绍

项目分为前后端两个部分，前端选用 `vue3.0`，并使用 `vue-cli` 脚手架 搭建，其中使用了 `vue-router` 处理路由，使用 `vuex` 处理数据
共享；后端使用 `nodejs` 搭建轻量级服务器，通过 `express` 框架为前端提供 `REST` 风格的接口，数据方面利用了 `mysql` 持久化
数据，并利用 `Sequelize` 库提供的接口操作数据库。

项目的前台包含了个人主页、文章列表、文章详情等模块，后台包含了**发布文章**、**发布每日格言**、**删除文章**、**登录**等功能，全部
由**本人**开发。

后端做了**跨域处理**、**jwt** 验证管理员等功能

## 项目运行

```
项目运行之前，请确保系统已经安装以下应用
1、node (14.0 及以上版本)
2、MySQL (开启状态)
3、使用Navicat运行SQL文件夹中的 my_blog.sql文件
```

```
// 先启动node服务器 
cd server

npm install

node index

// 启动用vite搭建的服务器
cd client

npm install

npm run dev
```

## 项目接口

1. **分页获取博客列表**

请求 URL：
`/api/blog`

请求方式：
`GET`

参数类型：query

| 参数  | 是否必选 | 类型   | 说明   |
| ----- | -------- | ------ | ------ |
| page  | Y        | Number | 页码   |
| limit | Y        | Number | 页容量 |

2. **获取全部博客**

请求 URL：
`/api/blog/all`

请求方式：
`GET`

3. **根据 id 获取博客**

请求 URL：
`/api/blog/:id`

请求方式：
`GET`

参数类型：param

| 参数 | 是否必选 | 类型   | 说明    |
| ---- | -------- | ------ | ------- |
| id   | Y        | Number | 博客 ID |

4. **获取每日格言**

请求 URL：
`/api/everyday`

请求方式：
`GET`

5. **获取全部每日格言**

请求 URL：
`/api/everyday/all`

请求方式：
`GET`

6. **发表评论**

请求 URL：
`/api/comment`

请求方式：
`POST`

参数类型：param

| 参数       | 是否必选 | 类型   | 说明                           |
| ---------- | -------- | ------ | ------------------------------ |
| parent     | Y        | String | 父评论的 id 如果是主评论则为-1 |
| blog_id    | Y        | String | 博客 ID                        |
| user_name  | Y        | String | 用户名                         |
| email      | Y        | String | 用户邮箱                       |
| comment    | Y        | String | 评论内容                       |
| website    | N        | String | 用户的个人网站                 |
| reply_name | N        | String | 回复对象的名称                 |

7. **根据博客 id 获取对应的评论**

请求 URL：
`/api/comment/:id`

请求方式：
`GET`

参数类型：param

| 参数    | 是否必选 | 类型   | 说明    |
| ------- | -------- | ------ | ------- |
| blog_id | Y        | String | 博客 ID |

8. **管理员登录**

请求 URL：
`/api/admin/login`

请求方式：
`POST`

参数类型：param

| 参数     | 是否必选 | 类型   | 说明       |
| -------- | -------- | ------ | ---------- |
| loginId  | Y        | String | 管理员账号 |
| loginPwd | Y        | String | 管理员密码 |

9. **token 验证 用 token 去请求用户信息**

请求 URL：
`/api/admin/whoami`

请求方式：
`GET`

10. **写博客**

请求 URL：
`/api/blog`

请求方式：
`POST`

参数类型：param

| 参数    | 是否必选 | 类型   | 说明     |
| ------- | -------- | ------ | -------- |
| title   | Y        | String | 博客标题 |
| tags    | Y        | String | 博客标签 |
| content | Y        | String | 博客内容 |

11. **写格言**

请求 URL：
`/api/everyday`

请求方式：
`POST`

参数类型：param

| 参数    | 是否必选 | 类型   | 说明     |
| ------- | -------- | ------ | -------- |
| content | Y        | String | 格言内容 |

12. **根据 id 删除博客**

请求 URL：
`/api/blog/:id`

请求方式：
`DELETE`

参数类型：param

| 参数   | 是否必选 | 类型   | 说明    |
| ------ | -------- | ------ | ------- |
| BlogId | Y        | String | 博客 Id |

13. **删除格言**

请求 URL：
`/api/everyday/:id`

请求方式：
`DELETE`

参数类型：param

| 参数    | 是否必选 | 类型   | 说明    |
| ------- | -------- | ------ | ------- |
| mottoId | Y        | String | 格言 Id |

14. **删除评论**

请求 URL：
`/api/comment/:id`

请求方式：
`DELETE`

参数类型：param

| 参数      | 是否必选 | 类型   | 说明    |
| --------- | -------- | ------ | ------- |
| commentId | Y        | String | 评论 Id |

15. **获取全部评论**

请求 URL：
`/api/comment/`

请求方式：
`GET`
