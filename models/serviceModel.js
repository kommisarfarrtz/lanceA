const db = require("../db.js");

exports.getServices = (req, res) => {
    const { name, user } = req.query;
    let query = "SELECT services.*, users.id AS user_id, users.name AS user_name, users.email AS user_email FROM services JOIN users ON services.user_id = users.id";
    let queryParams = [];

    if (name || user) {
        query += " WHERE";
        if (name) {
            query += " services.name = ?";
            queryParams.push(name);
        }
        if (user) {
            if (name) query += " AND";
            query += " users.name = ?";
            queryParams.push(user);
        }
    }

    db.query(query, queryParams, (err, results) => {
        if (err) {
            console.error("Database error:", err);
            return res.status(500).json({ error: "Error retrieving services from database" });
        }

        if (!results.length) {
            return res.status(404).json({ message: "No services found" });
        }

        const services = results.map(result => {
            const { id, name, description, user_id, user_name, user_email, ...rest } = result;
            return {
                ...rest,
                id,
                name,
                description,
                owner: {
                    id: user_id,
                    name: user_name,
                    email: user_email
                }
            };
        });

        return res.status(200).json(services);
    });
};

exports.getServicesByCategory = (req, res) => {
    const query = `
        SELECT 
            categories.id AS category_id, 
            categories.name AS category_name, 
            services.id AS service_id, 
            services.title AS service_title, 
            services.description AS service_description, 
            services.serviceCoverpic AS service_coverpic, 
            services.price AS service_price, 
            services.created_at AS service_created_at, 
            services.price_unit AS service_price_unit, 
            users.id AS user_id, 
            users.name AS user_name, 
            users.email AS user_email 
        FROM categories 
        LEFT JOIN services ON categories.id = services.category_id 
        LEFT JOIN users ON services.user_id = users.id
    `;

    db.query(query, (err, results) => {
        if (err) {
            console.error("Database error:", err);
            return res.status(500).json({ error: "Error retrieving services from database" });
        }

        if (!results.length) {
            return res.status(404).json({ message: "No services found" });
        }

        const categories = results.reduce((acc, result) => {
            const { category_id, category_name, service_id, service_title, service_description, service_coverpic, service_price, service_created_at, service_price_unit, user_id, user_name, user_email } = result;

            if (!acc[category_id]) {
                acc[category_id] = {
                    id: category_id,
                    name: category_name,
                    services: []
                };
            }

            if (service_id) {
                acc[category_id].services.push({
                    id: service_id,
                    title: service_title,
                    description: service_description,
                    coverpic: service_coverpic,
                    price: service_price,
                    created_at: service_created_at,
                    price_unit: service_price_unit,
                    seller: {
                        id: user_id,
                        name: user_name,
                        email: user_email
                    }
                });
            }

            return acc;
        }, {});

        return res.status(200).json(Object.values(categories));
    });
};
