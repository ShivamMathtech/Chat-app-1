const User = require("../model/user");

let loginCtrls = (req, res) => {
  User.find({ fname: req.body.name, password: req.body.password }).then(
    (user) => {
      if (user === null) {
        res.status(403).json({
          message: "User not found",
        });
      } else {
        res.status(200).json({
          message: "Login successful",
          data: user,
        });
      }
    }
  );
};

module.exports = loginCtrls;
