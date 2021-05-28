module.exports = function (req, res, next) {
  console.log(req.headers);
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "content-type, authorization,Accept-Encoding,Origin,Connection"
  );
  res.header("Access-Control-Allow-Method", "PUT,POST,GET,DELETE,OPTIONS");
  // res.header("Access-Control-Expose-Headers", "authorization");

  // res.header("Access-Control-Allow-Credentials", true);

  // if (req.method === "OPTIONS") {
  //   res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  //   res.header("Access-Control-Allow-Headers", "content-type, authorization");
  // }
  // res.header("Access-Control-Allow-Origin", "*");

  // res.header("Access-Control-Allow-Credentials", true);

  next();
};
