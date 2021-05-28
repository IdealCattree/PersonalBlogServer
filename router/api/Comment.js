const commentServer = require('../../services/commentServices');
const {
  asyncHandle
} = require('../getSendResult');
const express = require('express');
const route = express.Router();

/**
 * 根据blog_id查询评论
 */
route.get('/:id', asyncHandle(async (req, res, next) => {
  const id = req.params.id;
  return await commentServer.selectComment(id);
}));

/**
 * 添加评论
 */
route.post('/', asyncHandle(async (req, res, next) => {
  const body = req.body.data;
  return await commentServer.addComment(body);
}));

/**
 * 查询全部评论
 */
route.get('/', asyncHandle(async (req, res, next) => {
  return await commentServer.selectCommentAll();
}));


/**
 * 根据id删除评论
 */
route.delete('/:id', asyncHandle(async (req, res, next) => {
  const id = req.params.id;
  return await commentServer.deleteCommentById(id)
}))



module.exports = route;