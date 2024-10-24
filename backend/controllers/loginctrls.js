const User = require("../model/user");

let loginCtrls = (req, res) => {
  User.findOne({ name: req.body.fname })
    .then((d) => {
      console.log(d);
      if (d === null) {
        res.status(404).json({ message: "Invalid Credentials" });
      } else {
        let pswd = d.password;
        let your_pswd = req.body.password;
        if (your_pswd === pswd) {
          res.status(200).json({
            message: "User found",
            data: d,
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
