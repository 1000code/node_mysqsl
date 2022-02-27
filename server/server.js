const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
require("dotenv").config();
const { readdirSync } = require("fs");

// middleware
app.use(morgan("dev"));
app.use(cors());
// app.use(bodyParser.json({}));

// create the connection to database
const conn = mysql.createConnection(
  {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  },
  () => {
    console.log("Connect DB Success");
  }
);

// POST /api/ gets JSON bodies
app.post("/api/register", jsonParser, function (req, res) {
  const { username, password, email } = req.body;
  // execute will internally call prepare and query
  conn.execute(
    "INSERT INTO `members` (`username`, `email`, `password`) VALUES (?,?,?)",
    [username, email, password],
    function (err, results, fields) {
      if (err) {
        return res.json({ status: "500", msg: err });
      }
      res.json({ status: "200", msg: "Success" });
    }
  );
});

readdirSync("./routes").map((r) => {
  app.use("/api", require("./routes/" + r));
});

// ================== Run server ==============================
const port = process.env.PORT;
app.listen(port, () => {
  console.log("Server is running on port", port);
});
