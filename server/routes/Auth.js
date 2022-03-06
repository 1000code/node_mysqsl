const express = require("express");
const router = express.Router();

const {
  validateLogin,
  userValidate,
} = require("../middleware/validator/AuthValidate");

const {
  registerController,
  loginController,
} = require("../controllers/AuthController");

// @route   localhost:3000/api/login
router.post("/login", validateLogin, userValidate, loginController);

// @route   localhost:3000/api/register
router.post("/register", registerController);

module.exports = router;
