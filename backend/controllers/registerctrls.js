const User = require("../model/user");

let registerCtrls = (req, res) => {
  //
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (user) {
        return res.status(409).json({ message: "Email already exists" });
      }
      const usersdb = new User(req.body);
      usersdb
        .save()
        .then((d) => {
          console.log(d);
          res.status(201).json({
            message: "User registered successfully",
            data: d,
          });
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json({
            message: "Error registering user",
            error: err,
          });
        });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: "Error checking user existence",
        error: err,
      });
    });
};

module.exports = registerCtrls;
// const user = new User(req.body);
// user
//   .save()
//   .then((d) => {
//     console.log(d);
//     res.status(201).json({
//       message: "User registered successfully",
//       data: d,
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//     res.status(500).json({
//       message: "Error registering user",
//       error: err,
//     });
//   });
