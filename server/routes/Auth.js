const express = require("express");
const router = express.Router();

const {
  validateLogin,
  validateRegister,
  userValidate,
} = require("../middleware/validator/AuthValidate");

// const AuthController = require("../controllers/AuthController");

const AuthController = require("../controllers/AuthController");

// @route   localhost:3000/api/register
router.post("/login", AuthController.login);

// @route   localhost:3000/api/register
router.get("/register", AuthController.register);

module.exports = router;
