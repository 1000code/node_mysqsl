const express = require("express");
const router = express.Router();

const {
  validateLogin,
  validateRegister,
  userValidate,
} = require("../middleware/validator/AuthValidate");

const {
  registerController,
  loginController,
} = require("../controllers/AuthController");

// @route   localhost:3000/api/login
router.post("/login", validateLogin, userValidate, loginController);

// @route   localhost:3000/api/register
router.post("/register", validateRegister, userValidate, registerController);

module.exports = router;
