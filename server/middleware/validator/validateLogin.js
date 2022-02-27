const { check } = require("express-validator");

exports.validateLogin = [
  check("username")
    .trim()
    .notEmpty()
    .withMessage("ກະລຸນາປ້ອນຊື່")
    .isLength({ min: 3, max: 30 })
    .withMessage("ຊື່ຕ້ອງມີປະກອບດວ້ຍດ້ວຍຕົວອັກສອນ 3 ຫາ 20"),

  check("email")
    .trim()
    .notEmpty()
    .withMessage("ກະລຸນາປ້ອນ ອີເມວ")
    .normalizeEmail()
    .withMessage("ອີເມວ ບໍ່ຖືກຕ້ອງ"),

  check("password")
    .trim()
    .notEmpty()
    .withMessage("ກະລຸນາປ້ອນ ລະຫັດຜ່ານ")
    .isLength({ min: 8, max: 30 })
    .withMessage("ລະຫັດຜ່ານຕ້ອງປະກອບດວ້ຍຕົວອັກສອນ 8 ຂຶ້ນໄປ"),
];
