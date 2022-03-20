const db = require("../Config/Connect");
const bcrypt = require("bcrypt");
const saltRounds = 10;

exports.Register = async (data) => {
  const { username, password } = data;
  console.log(username);
};
