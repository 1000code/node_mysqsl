const db = require("../database/database");
const { check, validationResult } = require("express-validator");

exports.loginController = (req, res) => {
  const { username, email, password } = req.body;
  res.send("login");
};

exports.registerController = async (req, res) => {
  const { username, email, password } = req.body;
  res.send(
    "username: " + username + " email: " + email + " password: " + password
  );
};
