const sequelize = require('./db');
const {
  DataTypes
} = require('sequelize');

const Admin = sequelize.define('Admin', {
  admin_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  admin_pwd: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  admin_name: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  createdAt: true,
  updatedAt: true,
  deletedAt: '删除时间',
  paranoid: true,
});
module.exports = Admin;