/**
 * 包装一下获取成功的数据
 * @param {*} result
 */
exports.getResult = function (result) {
  return {
    code: 200,
    msg: "获取成功",
    data: result,
  };
};

/**
 * 包装一下查询失败的消息
 * @param {*} err
 * @param {*} errCode
 */
exports.getErr = function (err = "server internal error", errCode = 500) {
  return {
    code: errCode,
    msg: err,
  };
};

exports.asyncHandle = handle => {
  return async (req, res, next) => {
    try {
      const result = await handle(req, res, next);
      // console.log(res);
      res.status(200).send(exports.getResult(result));
    } catch (err) {
      next(err);
    }
  };
};
