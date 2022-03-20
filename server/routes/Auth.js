const express = require("express");
const router = express.Router();

// @import Validate
const Validate = require("../middleware/validator/AuthValidate");

// @import Controller
const Controller = require("../controllers/AuthController");

// @route   localhost:3000/api/register
router.post(
  "/register",
  Validate.Register,
  Validate.Check,
  Controller.Register
);

// @route   localhost:3000/api/login

module.exports = router;
