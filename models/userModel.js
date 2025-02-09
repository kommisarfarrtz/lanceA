const db = require("../db.js");

exports.getUsers = (callback) => {
  db.query("SELECT * FROM users", callback); 
};

exports.getUserById = (id, callback) => {
  db.query("SELECT * FROM users WHERE id=?", [id], callback);
}

exports.createUser = (user, callback) => {
  db.query("INSERT INTO users (name,lastName,email,password,profile_picture,location,is_seller,stars) VALUES (?, ?,?,?,?,?,?,?)", [user.name,user.lastName, user.email,user.password,user.profile_picture,user.location,user.is_seller,user.stars], callback);
}

exports.updateUser = (id, user, callback) => {

  db.query("UPDATE users SET name=?,lastName=?,email=?,profile_picture=?,location=? WHERE id=?", [user.name,user.lastName, user.email,user.profile_picture,user.location, id], callback);

}

exports.deleteUser = (id, callback) => {
  db.query("DELETE FROM users WHERE id=?", [id], callback);
}

exports.activateUser = (id, callback) => {
  db.query("UPDATE users SET is_seller=1 WHERE id=?", [id], callback);
}


// i want when the isSeller is deactivated the stars to be 0 and services that he has to be deleted
exports.deactivateUser = (id, callback) => {
  db.beginTransaction((err) => {
    if (err) {
      return callback(err);
    }

    db.query("UPDATE users SET is_seller=0, stars=0 WHERE id=?", [id], (err, results) => {
      if (err) {
        return db.rollback(() => {
          callback(err);
        });
      }

      if (results.affectedRows === 0) {
        return db.rollback(() => {
          callback(new Error("User not found"));
        });
      }

      db.query("DELETE FROM services WHERE user_id=?", [id], (err, results) => {
        if (err) {
          return db.rollback(() => {
            callback(err);
          });
        }

        db.commit((err) => {
          if (err) {
            return db.rollback(() => {
              callback(err);
            });
          }

          callback(null, results);
        });
      });
    });
  });
};