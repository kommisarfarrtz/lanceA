const db = require("../db.js");

exports.getUsers = (callback) => {
  db.query("SELECT * FROM users", callback); 
};

exports.getUserById = (id, callback) => {
  db.query("SELECT * FROM users WHERE id=?", [id], callback);
}

exports.createUser = (user, callback) => {
  db.query("INSERT INTO users (name, email) VALUES (?, ?)", [user.name, user.email], callback);
}

exports.updateUser = (id, user, callback) => {
  db.query("UPDATE users SET name=?, age=?, email=? WHERE id=?", [user.name, user.age, user.email, id], callback);
}

exports.deleteUser = (id, callback) => {
  db.query("DELETE FROM users WHERE id=?", [id], callback);
}

