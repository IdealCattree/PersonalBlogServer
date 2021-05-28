const sequelize = require('./db');
const {
  DataTypes
} = require('sequelize');

const Blog = sequelize.define('Blog', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT('LONG'),
    allowNull: false,
  },
  tags: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  views: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  like: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  createdAt: true,
  updatedAt: true,
});

module.exports = Blog;