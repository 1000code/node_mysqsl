const models = require("../models/person");

module.exports.Insert = async (req, res) => {
  let result = await models.Insert(req.body);

  if (result) {
    res.send("ບັນທຶກສຳເລັດ");
  } else {
    res.send("ຜິດພາດ ລອງອີກຄັ້ງ");
  }
};

module.exports.Change = async (req, res) => {
  let result = await models.Update(req.body);
  if (result) {
    res.send("ອັບເດດຂໍ້ມູນສຳເລັດ");
  } else {
    res.send("ຜິດພາດ ລອງອີກຄັ້ງ");
  }
};

module.exports.Remove = async (req, res) => {
  let result = await models.Remove(req.body);
  if (result) {
    res.send("ລົບຂໍ້ມູນສຳເລັດ");
  } else {
    res.send("ຜິດພາດ ລອງອີກຄັ້ງ");
  }
};

module.exports.Remove = async (req, res) => {
  let result = await models.Remove(req.body);
  if (result) {
    res.send("ລົບຂໍ້ມູນສຳເລັດ");
  } else {
    res.send("ຜິດພາດ ລອງອີກຄັ້ງ");
  }
};

// get data

module.exports.getAll = async (req, res) => {
  let result = await models.getAll();
  if (result) {
    res.send(result);
  } else {
    res.send("ຜິດພາດ ລອງອີກຄັ້ງ");
  }
};

module.exports.getOne = async (req, res) => {
  let result = await models.getOne(req.body);
  if (result) {
    // res.send(result);

    jwt.sign(
      { foo: "bar" },
      exp,
      privateKey,
      { algorithm: "RS256" },
      function (err, token) {
        if (err) throw Error;
        res.send(token);
      }
    );
  } else {
    res.send("ຜິດພາດ ລອງອີກຄັ້ງ");
  }
};
