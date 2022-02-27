const express = require("express");
const router = express.Router();
const {
  registerController,
  loginController,
} = require("./../controllers/AuthController");

// @route   localhost:8000/api/
router.post("/register", registerController);
router.post("/login", loginController);

module.exports = router;
