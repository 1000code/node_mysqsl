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
router.post("/car", AuthController.insertCar);

// @route   localhost:3000/api/register
router.get("/car/all", AuthController.getCar);

// @route   localhost:3000/api/register
router.get("/car/:id", AuthController.getOneCar);

module.exports = router;
