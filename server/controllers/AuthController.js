const { insertUser } = require("./../models/users");

exports.login = (req, res) => {
  const { username, email, password } = req.body;
  res.send("hello, login");
};

exports.register = async (req, res) => {
  let result = insertUser(req.body);
  res.send(result);
};
