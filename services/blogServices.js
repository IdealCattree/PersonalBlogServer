const Blog = require('../models/blog');

/**
 * 添加一篇博客
 * @param {*} blogObj 
 */
exports.addBlog = async function (blogObj) {
  const ins = await Blog.create(blogObj);
  return ins.toJSON();
};

/**
 * 根据id查询博客
 * @param {*} blogId
 */
exports.selectBlogById = async function (blogId) {
  const result = await Blog.findByPk(blogId);
  return result.toJSON();
}

/**
 * 分页查询博客
 * @param {*} page 
 * @param {*} limit 
 */
exports.selectBlogByPage = async function (page = 1, limit = 5) {
  const result = await Blog.findAndCountAll({
    offset: (page - 1) * limit,
    limit: +limit,
    order: [
      ['id', 'DESC']
    ]
  });

  return {
    total: result.count,
    data: JSON.parse(JSON.stringify(result.rows)),
  }
}

/**
 * 查询全部博客
 */
exports.selectBlogAll = async function () {
  const result = await Blog.findAndCountAll({
    attributes: ['id', 'title', 'createdAt'],
    order: [
      ['createdAt', 'desc']
    ]
  });

  let data = JSON.parse(JSON.stringify(result.rows));
  data.forEach(item => {
    item.createdAt = item.createdAt.split('T')[0];
  });
  return {
    total: result.count,
    data: JSON.parse(JSON.stringify(data)),
  }
}

/**
 * 根据id修改博客
 * @param {*} id 
 * @param {*} blogObj 
 */
exports.updataBlog = async function (id, blogObj) {
  const result = await Blog.update(blogObj, {
    where: {
      id
    },
  });
  return JSON.parse(JSON.stringify(result));
};

/**
 * 浏览量 +1
 * @param {*} id 
 * @param {*} blogObj 
 */
exports.updateViews = async function (id, blogObj) {
  const result = await Blog.update(blogObj, {
    where: {
      id,
    }
  })
}

/**
 * like +1
 * @param {*} id 
 * @param {*} blogObj 
 */
exports.updateLikes = async function (id, blogObj) {
  await Blog.update(blogObj, {
    where: {
      id,
    }
  })
}

/**
 * 根据id删除博客
 * @param {*} id 
 */
exports.deleteBlog = async function (id) {
  const result = await Blog.destroy({
    where: {
      id
    }
  });
  return JSON.parse(JSON.stringify(result));
};