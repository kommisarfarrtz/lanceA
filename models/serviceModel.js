const db = require("../db.js");


// Get all Services showing their owner // 
exports.getAllServices = (callback) => {
    db.query("SELECT s.*, u.*,sub.name as nameS FROM services s, users u , sub_categories sub WHERE s.user_id = u.id and sub.id = s.sub_id", (err, results) => {
        if (err) {
            return callback(err);
        }
        const services = results.map(row => ({
            id: row.id,
            title: row.title,
            description: row.description,
            servicePicture: row.ServiceCoverPic,
            price: row.price,
            price_unit: row.price_unit,
            isActive: row.is_active,
            subCategorie: row.nameS,
            date: row.date,
            Owner:
                {
                    id: row.user_id,
                    name: row.name,
                    lastName: row.lastName,
                    email: row.email,
                    location: row.location,
                    isSeller: row.is_seller
                }
        }));
        callback(null, { services });
    });
};

exports.createService = (req, res, next) => {
    const { userId } = req.body;
    const { title, description, price, price_unit, sub_id } = req.body;
    db.query("INSERT INTO services (title, description, price, price_unit, sub_id, user_id) VALUES (?, ?, ?, ?, ?, ?)", [title, description, price, price_unit, sub_id, userId], (err, results) => {
        if (err) {
            return next(err);
        }
        res.status(201).send(`Service added with ID: ${results.insertId}`);
    });
};