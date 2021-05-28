const {
  Sequelize
} = require('sequelize');

const sequelize = new Sequelize('my_blog', 'root', '000708', {
  host: 'localhost',
  dialect: 'mysql', // 使用的数据库
});

module.exports = sequelize;