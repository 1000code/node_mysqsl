const { insertUser } = require("./../models/users");

exports.loginController = (req, res) => {
  const { username, email, password } = req.body;
  res.send("hello, login");
};

exports.registerController = async (req, res) => {
  let result = insertUser(req.body);
  res.send(result);
};
