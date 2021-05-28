const Comment = require('../models/comment');

/**
 * 添加一条评论
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.addComment = async function (commentObj) {
  const ins = await Comment.create(commentObj)
  return ins.toJSON();
}

/**
 * 根据blogId查询评论 
 * 如果blogId为-1则是关于页面的评论
 * @param {*} blogId 
 */
exports.selectComment = async function (blogId) {
  const result = await Comment.findAndCountAll({
    attributes: ['id', 'comment', 'blog_id', 'parent', 'user_name', 'createdAt', 'website', 'reply_name'],
    where: {
      blog_id: blogId,
    },
    order: [
      ['id', 'DESC'],
    ],
  });
  let data = JSON.parse(JSON.stringify(result.rows));
  data.forEach(item => {
    item.createdAt = item.createdAt.split('T')[0];
  });
  return {
    total: result.count,
    data
  }
};

/**
 * 查询全部评论
 */
exports.selectCommentAll = async function () {
  const result = await Comment.findAll({
    attributes: ['id', 'comment', 'user_name', 'createdAt']
  });

  return JSON.parse(JSON.stringify(result));
};

/**
 * 根据id删除评论
 * @param {*} commentId 
 */
exports.deleteCommentById = async function (commentId) {
  const result = await Comment.destroy({
    where: {
      id: commentId,
    }
  });
  return JSON.parse(JSON.stringify(result));
}