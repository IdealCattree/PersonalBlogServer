require('./every_day');
require('./blog');
require('./comment');
require('./admin');
const sequelize = require('./db');
sequelize.sync({
  alter: true
}).then(() => {
  console.log('所有模型同步完成');
});