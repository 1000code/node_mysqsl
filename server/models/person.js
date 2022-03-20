const db = require("../Config/Connect");

module.exports.Insert = async (data) => {
  const { name, hiegth, birtday } = data;

  let result = 0;
  try {
    let sql =
      "INSERT INTO persons (`name`, `hiegth`, `birtday` ) VALUES(?,?,?)";

    const res = await db.execute(sql, [name, hiegth, birtday]);

    result = res[0].insertId;
  } catch (error) {
    console.log(error);
  }

  return result;
};

module.exports.Update = async (person) => {
  const { id, name, hiegth, birtday } = person;

  try {
    let sql =
      "UPDATE `persons` SET `name`=?, `hiegth`=?, `birtday`=? WHERE `id`= ?";

    await db.execute(sql, [name, hiegth, birtday, id]);
    return true;
  } catch (error) {
    console.log(error);
  }
};

module.exports.Remove = async (person) => {
  const { id } = person;

  try {
    let sql = "DELETE FROM `persons` WHERE `id`= ?";

    await db.execute(sql, [id]);
    return true;
  } catch (error) {
    console.log(error);
  }
};

// ========= get all
module.exports.getAll = async () => {
  let result = "";
  try {
    let sql = "SELECT * FROM `persons`";

    let res = await db.execute(sql);

    result = res[0][0];
  } catch (error) {
    console.log(error);
  }

  return result;
};

// get one
module.exports.getOne = async (person) => {
  const { id } = person;
  let result = "";
  try {
    let sql = "SELECT * FROM `persons` WHERE id=?";

    let res = await db.execute(sql, [id]);

    result = res[0][0];
  } catch (error) {
    console.log(error);
  }

  return result;
};
