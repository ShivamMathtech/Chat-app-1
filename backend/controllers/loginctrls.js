let loginCtrls = (req, res) => {
  res.status(200).json({
    message: "Login controls route",
  });
};

module.exports = loginCtrls;
