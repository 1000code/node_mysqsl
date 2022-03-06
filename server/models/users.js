const db = require("./../database/database");

exports.insertUser = (data) => {
  const { username, password } = data;

  try {
    let query = "INSERT INTO `members` (`username`, `password`) VALUES (?,?)";
    db.execute(query, [username, password]);
    return "ບັນທຶກຂໍ້ມູນສຳເລັດ";
  } catch (error) {
    console.log(error);
  }
};
