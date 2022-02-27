const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const {
  validateRegister,
  userValidate,
} = require("../middleware/validator/validateRegister");

const {
  registerController,
  loginController,
} = require("../controllers/AuthController");

// @route   localhost:3000/api/login
router.post("/login", validateRegister, loginController);

// @route   localhost:3000/api/register
router.post("/register", validateRegister, userValidate, registerController);

module.exports = router;
