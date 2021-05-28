const sequelize = require('./db');
const {
  DataTypes
} = require('sequelize');

const Comment = sequelize.define('Comment', {
  comment: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  blog_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  parent: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  user_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  website: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  reply_name: {
    type: DataTypes.STRING,
    allowNull: true,
  }

}, {
  createdAt: true,
  updatedAt: true,
});

module.exports = Comment;