const Models = require("./../models/users");

module.exports.Register = async (req, res) => {
  let result = await Models.Register(req.body);
};
