const express = require("express");
const myRoute = express.Router();

myRoute.get("/", (req, res) => {
  const dirname = __dirname;
  let path = dirname;
  let index = path.indexOf("\\backend");
  let slicedPath = path.slice(0, index);
  res.sendfile(slicedPath + "/frontend/index.html");
  //   console.log(__dirname + "/frontend/index.html");
});

module.exports = myRoute;
