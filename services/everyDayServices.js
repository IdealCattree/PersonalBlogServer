const EveryDay = require('../models/every_day');

/**
 * 添加每日一句
 * @param {*} everyDayObj 
 */
exports.addEveryDay = async function (everyDayObj) {

  const ins = await EveryDay.create(everyDayObj);
  return ins.toJSON();
};


/**
 * 根据id 删除每日一句
 * @param {*} everyDayId 
 */
exports.delEveryDay = async function (everyDayId) {
  const result = await EveryDay.destroy({
    where: {
      id: everyDayId,
    }
  });
  return JSON.parse(JSON.stringify(result));
};

/**
 * 根据id修改每日一句
 * @param {*} id 
 * @param {*} everyDayObj 
 */
exports.updateEveryDay = async function (id, everyDayObj) {
  const result = await EveryDay.update(everyDayObj, {
    where: {
      id
    }
  });
  return JSON.parse(JSON.stringify(result));
};


/**
 * 查询每日一句 
 */
exports.selectEveryDay = async function () {
  const result = await EveryDay.findOne({
    attributes: ['content'],
    order: [
      ['id', 'DESC']
    ]
  });
  return JSON.parse(JSON.stringify(result));
};


/**
 * 查询全部评论
 */
exports.selectEveryDayAll = async function () {
  const result = await EveryDay.findAll({
    attributes: ['id', 'content', 'createdAt'],
    order: [
      ['id', 'desc']
    ]
  });

  return JSON.parse(JSON.stringify(result));
}