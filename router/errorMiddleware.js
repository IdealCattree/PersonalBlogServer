const {
  getErr
} = require('./getSendResult');
module.exports = (err, req, res, next) => {
  if (err) {
    err = err instanceof Error ? err.message : err;
    res.status(500).send(getErr(err))
  } else {
    next();
  }
}