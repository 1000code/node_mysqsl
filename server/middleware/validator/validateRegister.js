const { check, validationResult } = require("express-validator");

exports.validateRegister = [
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

  check("password_confirm")
    .trim()
    .notEmpty()
    .withMessage("ກະລຸນາປ້ອນ ລະຫັດຜ່ານ")
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("ລະຫັດຜ່ານບໍ່ກົງກັນ");
      }
      return true;
    }),
];

exports.userValidate = (req, res, next) => {
  const result = validationResult(req).array();
  if (!result.length) return next();
  const error = result[0].msg;
  res.status(400).json({ success: false, msg: error });
};
