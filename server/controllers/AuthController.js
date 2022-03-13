const { insertUser } = require("./../models/users");
const Model = require("./../models/car");
const db = require("./../database/database");

exports.loginController = (req, res) => {
  const { username, email, password } = req.body;
  res.send("hello, login");
};

exports.registerController = async (req, res) => {
  let result = insertUser(req.body);
  res.send(result);
};

exports.insertCar = async (req, res) => {
  const i = await Model.modelCar(req.body);
  if (i) {
    res.send("ບັນທຶກສຳເລັດ");
  } else {
    res.send("ຜິດພາດລອງອີກຄັ້ງ");
  }
};

exports.getCar = async (req, res) => {
  let data = await Model.getCar();
  res.send(data);
};

exports.getOneCar = async (req, res) => {
  let data = await Model.getOneCar(req.body.slug);
  res.send(data);
};
