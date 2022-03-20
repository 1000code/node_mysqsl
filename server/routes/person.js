const express = require("express");
const router = express.Router();

// === import validate
const { check, validationResult } = require("express-validator");

const db = require("../Config/Connect");

// import controller
const controllers = require("../controllers/personController");

// import validate
const validate = require("../middleware/validator/Person");

// @route   localhost:3000/api/person
router.post("/person", validate.Insert, validate.Check, controllers.Insert);
router.put(
  "/person/update",
  validate.Update,
  validate.Check,
  controllers.Change
);
router.delete("/person/remove", controllers.Remove);
router.get("/person/all", controllers.getAll);
router.get("/person/one", controllers.getOne);

module.exports = router;
