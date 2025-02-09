const db = require("../db.js");

exports.getUsers = (callback) => {
  db.query("SELECT * FROM users", callback); // Fix the query assignment asba3
};