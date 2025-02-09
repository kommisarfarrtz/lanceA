const userModel = require("../models/userModel.js");

exports.getUsers = (req, res) => {
    userModel.getUsers((err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json(results);
    });
  };