const userModel = require("../models/userModel.js");
const errorHandler = require("../middleware/errorHandler.js");

exports.getUsers = (req, res) => {
  userModel.getUsers((err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error retrieving data from database");
    } else {
      res.status(200).json(results);
    }
  });
};

exports.getUserById = (req, res) => {
  userModel.getUserById(req.params.id, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error retrieving data from database");
    } else {
      res.status(200).json(results);
    }
  });
};

exports.createUser = (req, res) => {
  userModel.createUser(req.body, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error creating user ");
    } else {
      res.status(201).send("User created successfully");
    }
  });
};

exports.updateUser = (req, res, next) => {
  userModel.updateUser(req.params.id, req.body, (err, results) => {
    if (err) {
      return next(err);
    } else {
      res.status(200).send("User updated successfully");
    }
  });
};

exports.deleteUser = (req, res) => {
  userModel.deleteUser(req.params.id, (err, results) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).send("Error deleting user");
    }
    
    if (results.affectedRows === 0) {
      return res.status(404).send("User not found");
    }

    return res.status(200).send("User deleted successfully");
  });
};
