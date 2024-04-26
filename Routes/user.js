const express = require("express");
const router = express.Router();
const db = require("../Config/db");

//Create
router.post("/create", (req, res) => {
  const { fname, lname, username, password, avatar } = req.body;
  const query =
    "INSERT INTO users(fname, lname, username, password, avatar) VALUES (?,?,?,?,?)";
  db.query(
    query,
    [fname, lname, username, password, avatar],
    (err, results) => {
      res.json(results);
    }
  );
});

// Read
router.get("/users", (req, res) => {
  const query = "SELECT * FROM users";
  db.query(query, (err, results) => {
    res.json(results);
  });
});

// Read /:ID
router.get("/users/:id", (req, res) => {
  const { id } = req.params;
  const query = "SELECT * FROM users WHERE id = ?";
  db.query(query, id, (err, results) => {
    res.json(results);
  });
});

//Update
router.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { fname, lname, username, password, avatar } = req.body;
  const query =
    " UPDATE users SET fname=?,lname=?,username=?,password=?,avatar=? WHERE id=? ";
  db.query(
    query,
    [fname, lname, username, password, avatar, id],
    (err, results) => {
      if (err) throw err;
      res.send("User Updated Successfully");
    }
  );
});

//Delete
router.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM users WHERE id= ?";
  db.query(query, id, (err, results) => {
    res.send("User Delete Successfully!");
  });
});

module.exports = router;
