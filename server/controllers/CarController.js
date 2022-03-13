const Model = require("../models/car");

module.exports.insertCar = async (req, res) => {
  const i = await Model.insertCar(req.body);
  if (i) {
    res.send("ບັນທຶກສຳເລັດ");
  } else {
    res.send("ຜິດພາດລອງອີກຄັ້ງ");
  }
};

module.exports.getAllCar = async (req, res) => {
  let data = await Model.getAllCar();
  res.send(data);
};

module.exports.getOneCar = async (req, res) => {
  let data = await Model.getOneCar(req.body.id);
  res.send(data);
};
