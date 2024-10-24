const User = require("../model/user");
const jwt = require("jsonwebtoken");

require("dotenv").config();
let loginCtrls = (req, res) => {
  User.findOne({ name: req.body.fname })
    .then((d) => {
      if (d === null) {
        res.status(404).json({ message: "Invalid Credentials" });
      } else {
        let pswd = d.password;
        let your_pswd = req.body.password;
        if (your_pswd === pswd) {
          // Jwt Authentication
          //var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
          let payload = {
            name: req.body.fname,
          };
          var token = jwt.sign(payload, process.env.JWT_SECRET_KEY);
          res.status(200).json({
            token,
          });
        } else {
          res.status(401).json({ message: "Invalid Credentials" });
        }
      }
    })
    .catch((e) => {
      console.log(e);
      res.status(500).json({ message: "Internal server error" });
    });
};

module.exports = loginCtrls;
