const { DataTypes } = require('sequelize');
const sequelize = require('./db');

const EveryDay = sequelize.define('EveryDay', {
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  createdAt: true,
  updatedAt: true,
})

module.exports = EveryDay;