const userModel = require("../models/userModel.js");

exports.getUsers = (req, res) => {
  userModel.getUsers((err, results) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ error: "Error retrieving users from database" });
    }

    if (!results.length) {
      return res.status(404).json({ message: "No users found" });
    }

    return res.status(200).json(results);
  });
};

exports.getUserById = (req, res) => {
  userModel.getUserById(req.params.id, (err, results) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ error: "Error retrieving user from database" });
    }

    if (!results.length) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.status(200).json(results[0]); // Assuming the query returns an array
  });
};

exports.createUser = (req, res) => {
  const { name, lastName, email, password, location, is_seller } = req.body;

  if (!name || !lastName || !email || !password || !location) {
    return res.status(400).json({ error: "All required fields must be provided" });
  }

  userModel.createUser(req.body, (err, results) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ error: "Error creating user" });
    }

    return res.status(201).json({ message: "User created successfully", userId: results.insertId });
  });
};

exports.updateUser = (req, res, next) => {
  userModel.updateUser(req.params.id, req.body, (err, results) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ error: "Error updating user" });
    }

    if (results.affectedRows === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.status(200).json({ message: "User updated successfully" });
  });
};

exports.deleteUser = (req, res) => {
  userModel.deleteUser(req.params.id, (err, results) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ error: "Error deleting user" });
    }

    if (results.affectedRows === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.status(200).json({ message: "User deleted successfully" });
  });
};

exports.activateSeller = (req, res) => {
  userModel.activateSeller(req.params.id, (err, results) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ error: "Error activating seller" });
    }

    if (results.affectedRows === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.status(200).json({ message: "User activated as seller" });
  });
}
exports.deactivateSeller = (req, res) => {
  userModel.deactivateSeller(req.params.id, (err, results) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ error: "Error deactivating seller" });
    }

    if (results.affectedRows === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.status(200).json({ message: "User deactivated as seller" });
  });
}

exports.login = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password must be provided" });
  }

  userModel.login(email, password, (err, results) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ error: "Error logging in" });
    }

    if (!results.length) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.status(200).json({ message: "User logged in successfully", user: results[0] });
  });
};