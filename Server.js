const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const axios = require("axios");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
const port = 3000;

app.use(bodyParser.json({ limit: "10mb" }));
app.use(cors());

//connect DATABASE path1
// const  = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "mydb",
// });

// db.connect((err) => {
//   if (err) {
//     console.error("Error connected to MYSQL: ", err);
//   } else {
//     console.log("Connected to MYSQL");
//   }
// });

//connect DATABASE path2 แยกไฟล์
// const db = require("./Config/db");

//Routes
const { readdirSync } = require("fs");
readdirSync("./Routes").map((r) => app.use("/api", require("./Routes/" + r)));

app.listen(port, () => {
  console.log("Cors-Enable Web Server Listening On Port", port);
});
