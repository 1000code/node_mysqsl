const db = require("../database/database");

exports.registerController = async (req, res) => {
  const { username, email, password } = req.body;
  res.send(
    "username: " + username + " email: " + email + " password: " + password
  );
};

exports.loginController = async (req, res) => {
  res.send("Login Controller");
};
