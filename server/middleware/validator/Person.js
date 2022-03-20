const { check, validationResult } = require("express-validator");

module.exports.Insert = [
  check("name")
    .trim()
    .notEmpty()
    .withMessage("ກະລຸນາປ້ອນຊື່")
    .not()
    .isNumeric()
    .withMessage("ຊື່ຜູ້ໃຊ້ຕ້ອງເປັນຕົວອັກສອນເທົ່ານັ້ນ")
    .isLength({ min: 3, max: 50 })
    .withMessage("ຊື່ຕ້ອງມີປະກອບດວ້ຍດ້ວຍຕົວອັກສອນ 3 ຫາ 50"),

  check("hiegth")
    .trim()
    .notEmpty()
    .withMessage("ກະລຸນາປ້ອນ ລວງສູງ")
    .isNumeric()
    .withMessage("ລວງສູງຕ້ອງເປັນຕົເລກເທົ່ານັ້ນ"),

  check("birtday").trim().notEmpty().withMessage("ກະລຸນາປ້ອນ ວດປ"),
];

// ========= update ===========
module.exports.Update = [
  check("id")
    .trim()
    .notEmpty()
    .withMessage("ກະລຸນາປ້ອນ ID")
    .isNumeric()
    .withMessage("ID ຕ້ອງເປັນຕົວເລກເທົ່ານັ້ນ"),
];

// ================================
module.exports.Check = (req, res, next) => {
  const result = validationResult(req).array();
  if (result.length > 0) {
    const error = result[0].msg;
    res.status(400).json({ success: false, msg: error });
  } else {
    return next();
  }
};
