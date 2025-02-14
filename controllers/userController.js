const userModel = require("../models/userModel.js");
const { createError } = require("../middleware/errorHa.js");

const jwt = require('jsonwebtoken');

exports.getUsers = async (req, res, next) => {
  userModel.getUsers((err, results) => {
    if (err) return next(err);

    if (!results.length) {
      return next(createError(404, "No users found")); 
    }

    res.status(200).send(results); 
  });
};

exports.getUserById = (req, res, next) => {
  userModel.getUserById(req.params.id, (err, results) => {
    if (err) return next(err);

    if (!results.length) {
      return next(createError(404, "User not found"));
    }

    return res.status(200).send(results);
  });
};

exports.createUser = (req, res, next) => {
  const { name, lastName, email, password, location } = req.body;

  if (!name || !lastName || !email || !password || !location) {
    return next(createError(400, "All required fields must be provided"));
  }

  userModel.createUser(req.body, (err, results) => {
    if (err) return next(err);

    return res.status(201).send({ message: "User created successfully", userId: results.insertId });
  });
};

exports.updateUser = (req, res, next) => {
  userModel.updateUser(req.params.id, req.body, (err, results) => {
    if (err) return next(err);

    if (results.affectedRows === 0) {
      return next(createError(404, "User not found"));
    }

    return res.status(200).send("User updated successfully");
  });
};

exports.deleteUser = (req, res, next) => {
  userModel.deleteUser(req.params.id, (err, results) => {
    if (err) return next(err);

    if (results.affectedRows === 0) {
      return next(createError(404, "User not found"));
    }

    return res.status(200).send("User deleted successfully");
  });
};

exports.activateSeller = (req, res, next) => {
  userModel.activateSeller(req.params.id, (err, results) => {
    if (err) return next(err);

    if (results.affectedRows === 0) {
      return next(createError(404, "User not found"));
    }

    return res.status(200).send("User activated as seller");
  });
};

exports.deactivateSeller = (req, res, next) => {
  userModel.deactivateSeller(req.params.id, (err, results) => {
    if (err) return next(err);

    if (results.affectedRows === 0) {
      return next(createError(404, "User not found"));
    }

    return res.status(200).send("User deactivated as seller");
  });
};

exports.login = async (req, res, next) => {
    const { email, password } = req.body;

    // Check if email and password are provided
    if (!email || !password) {
        return next(createError(400, "Please provide email and password"));
    }

    userModel.getUserByEmail(email, async (err, user) => {
        if (err) return next(err);
        
        if (!user) {
            return next(createError(404, "User not found"));
        }

        // Simple password check
        if (password !== user.password) {
            return next(createError(400, "Wrong password or email"));
        }

        // Create token
        const token = jwt.sign(
            { userId: user.id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        // Remove password from user object
        const { password: _, ...userWithoutPassword } = user;

        res.status(200).json({
            success: true,
            message: "Login successful",
            user: userWithoutPassword,
            token
        });
    });
};

