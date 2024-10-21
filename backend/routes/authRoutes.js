const express = require("express");
const loginCtrls = require("../controllers/loginctrls");
const authRoutes = express.Router();

authRoutes.post("/login", loginCtrls);

module.exports = authRoutes;
