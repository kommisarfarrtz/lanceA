const db = require("../db.js");

exports.getUsers = (callback) => {
  db.query("SELECT * FROM users", callback); 
};

exports.getUserById = (id, callback) => {
  db.query("SELECT * FROM users WHERE id=?", [id], callback);
}

exports.createUser = (user, callback) => {
  db.query(
    "INSERT INTO users (name, lastName, email, password, profile_picture, location, is_seller, stars) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", 
    [user.name,user.lastName,user.email,user.password,user.profile],callback);
}

exports.updateUser = (id, user, callback) => {

  db.query("UPDATE users SET name=?, age=?, email=? WHERE id=?", [user.name, user.age, user.email, id], callback);
}

exports.deleteUser = (id, callback) => {
  db.query("DELETE FROM users WHERE id=?", [id], callback);
}

