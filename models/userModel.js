const db = require("../db.js");

exports.getUsers = (callback) => {
  db.query("SELECT * FROM users", callback); // Fix the query assignment asba3
};
exports.getUserById = (id, callback) => {
  db.query("SELECT * FROM users WHERE id=?", [id], callback);
}
exports.createUser = (user, callback) => {
  db.query("INSERT INTO users (name, email) VALUES (?, ?)", [user.name, user.email], callback);
}
exports.updateUser = (id, user, callback) => {
  db.query("UPDATE users SET name=?, email=? WHERE id=?", [user.name, user.email, id], callback);
}
exports.deleteUser = (id, callback) => {
  db.query("DELETE FROM users WHERE id=?", [id], callback);
}

