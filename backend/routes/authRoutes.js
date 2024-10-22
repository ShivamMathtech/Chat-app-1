const express = require("express");
const loginCtrls = require("../controllers/loginctrls");
const registerCtrls = require("../controllers/registerctrls");
const authRoutes = express.Router();

authRoutes.post("/login", loginCtrls);
authRoutes.post("/register", registerCtrls);

module.exports = authRoutes;
