const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb",
});

db.connect((err) => {
  if (err) {
    console.error("Error connected to MYSQL: ", err);
  } else {
    console.log("Connected to MYSQL");
  }
});

module.exports = db;
