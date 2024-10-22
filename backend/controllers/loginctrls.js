const User = require("../model/user");

let loginCtrls = (req, res) => {
  // Login logic here
  User.findOne({ email: req.body.email, password: req.body.password }).then(
    (user) => {
      if (!user)
        return res.status(401).json({ message: "Invalid credentials" });
      req.session.userId = user._id;
      res.json({ message: "Login successful", data: user });
    }
  );
  res.status(200).json({
    message: "Login controls route",
  });
};

module.exports = loginCtrls;
