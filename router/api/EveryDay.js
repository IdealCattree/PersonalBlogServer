const express = require('express');
const EveryDayServer = require('../../services/everyDayServices');
const {
  asyncHandle
} = require('../getSendResult');
const route = express.Router();


/**
 * 查询全部每日一句
 */
route.get('/all', asyncHandle(async (req, res, next) => {
  return await EveryDayServer.selectEveryDayAll();
}))

/**
 * 查询每日一句
 */
route.get('/', asyncHandle(async (req, res, next) => {
  return await EveryDayServer.selectEveryDay();
}));

/**
 * 添加每日一句
 */
route.post('/', asyncHandle(async (req, res, next) => {
  const body = req.body.data;
  return await EveryDayServer.addEveryDay(body);
}));

/**
 * 根据id修改每日一句
 */
route.put('/:id', asyncHandle(async (req, res, next) => {
  const id = req.params.id;
  const body = req.body;
  return await EveryDayServer.updateEveryDay(id, body);
}));

/**
 * 根据id删除每日一句
 */
route.delete('/:id', asyncHandle(async (req, res, next) => {
  const id = req.params.id;
  return await EveryDayServer.delEveryDay(id);
}));


module.exports = route;