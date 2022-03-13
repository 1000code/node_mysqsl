const express = require("express");
const router = express.Router();

const CarController = require("../controllers/CarController");

// @route   localhost:3000/api/register
router.post("/car", CarController.insertCar);

// @route   localhost:3000/api/register
router.get("/car/all", CarController.getAllCar);

// @route   localhost:3000/api/register
router.get("/car/:id", CarController.getOneCar);

module.exports = router;
