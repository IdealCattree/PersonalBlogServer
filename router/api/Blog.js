const express = require('express');
const route = express.Router();
const {
  asyncHandle
} = require('../getSendResult');
const blogServer = require('../../services/blogServices');

/**
 * 分页查询文章接口
 */
route.get('/', asyncHandle(async (req, res, next) => {
  const page = req.query.page || 1;
  const limit = req.query.limit || 5;
  const result = await blogServer.selectBlogByPage(page, limit);
  return result;
}));

/**
 * 查询所有博客
 */
route.get('/all', asyncHandle(async (req, res, next) => {
  return await blogServer.selectBlogAll();
}));

/**
 * 根据博客id查询
 */
route.get('/:id', asyncHandle(async (req, res, next) => {
  const id = req.params.id;
  const result = await blogServer.selectBlogById(id);

  if (result) {
    const views = result.views + 1;
    const like = parseInt(views / 5) > 10 ? parseInt(views / 5) + Math.floor(Math.random() * 10) : 0;
    await blogServer.updateViews(id, {
      views
    });

    await blogServer.updateLikes(id, {
      like
    })
  }

  return result;
}));

/**
 * 添加博客的接口
 */
route.post('/', asyncHandle(async (req, res, next) => {
  let body = req.body.data;
  const reg = /，/g
  body.tags.replace(reg, ',');
  body.views = 0;
  body.like = 0;

  return blogServer.addBlog(body);
}));

/**
 * 根据id修改博客
 */
route.put('/:id', asyncHandle(async (req, res, next) => {
  const id = req.params.id;
  const body = req.body;
  return blogServer.updataBlog(id, body);
}));


/**
 * 根据id删除博客
 */
route.delete('/:id', asyncHandle(async (req, res, next) => {
  const id = req.params.id;
  return blogServer.deleteBlog(id);
}));



module.exports = route;