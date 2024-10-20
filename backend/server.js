const express = require("express");
const myRoute = require("./routes/myRoute");
const app = express();
require("dotenv").config();
//
app.use(express.static("frontend"));
app.use("/", myRoute);
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
