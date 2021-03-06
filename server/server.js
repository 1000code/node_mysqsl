const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
require("dotenv").config();
const { readdirSync } = require("fs");

// middleware
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// =========== import route ==================
readdirSync("./routes").map((r) => {
  app.use("/api", require("./routes/" + r));
});

// ================== Run server ==============================
const port = process.env.PORT || 5800;
app.listen(port, () => {
  console.log("Server is running on port", port);
});
