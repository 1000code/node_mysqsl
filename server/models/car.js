const db = require("../Config/Connect");

module.exports.insertCar = async (data) => {
  const { color, type } = data;

  let result = 0;

  try {
    //   const sql = "INSERT INTO cars (color) VALUES (?, ?)";
    const sql = "INSERT INTO `cars`( `color`, `type`) VALUES (?, ?) ";
    const res = db.execute(sql, [color, type]);
    result = await res[0].insertId;
  } catch (error) {
    console.log(error);
  }

  return result;
};

module.exports.getAllCar = async () => {
  let result = "";
  try {
    let sql = "SELECT * FROM `cars`";
    let res = await db.execute(sql);

    result = res[0][0];
  } catch (error) {
    console.log(error);
  }

  return result;
};

module.exports.getOneCar = async (slug) => {
  let result = "";
  try {
    let sql = "SELECT * FROM `cars` WHERE id = ?";
    let res = await db.execute(sql, [slug]);

    result = res[0][0];
  } catch (error) {
    console.log(error);
  }

  return result;
};
