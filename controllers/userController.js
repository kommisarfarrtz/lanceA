const userModel = require("../models/userModel.js");

exports.getUsers = (req, res) => {
  userModel.getUsers((err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error retrieving data from database");
    } else {
      res.status(200).send(results);
    }
  });
}
exports.getUserById = (req, res) => {
  userModel.getUserById(req.params.id, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error retrieving data from database");
    } else {
      res.status(200).send(results);
    }
  });
}
exports.createUser = (req, res) => {
  userModel.createUser(req.body, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error saving data to database");
    } else {
      res.status(201).send("User created successfully");
    }
  });
}
exports.updateUser = (req, res) => {
  userModel.updateUser(req.params.id, req.body, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error updating data in database");
    } else {
      res.status(200).send("User updated successfully");
    }
  });
}
exports.deleteUser = (req, res) => {
  userModel.deleteUser(req.params.id, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error deleting data from database");
    } else {
      res.status(200).send("User deleted successfully");
    }
  });
}
