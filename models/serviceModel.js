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
exports.createService = (req, res) => {
    const { id } = req.params;
    const { title, description, serviceCoverpic, price, price_unit, category_id } = req.body;

    if (!id) {
        return res.status(400).json({ error: "User ID is required in the URL" });
    }

    console.log("Creating service for User ID:", id);

    db.query(
        "INSERT INTO services (title, description, serviceCoverpic, price, price_unit, user_id, category_id) VALUES (?, ?, ?, ?, ?, ?, ?)",
        [title, description, serviceCoverpic, price, price_unit, id, category_id],
        (err) => {
            if (err) {
                console.error("Database error:", err);
                return res.status(500).json({ error: "Error creating service" });
            }

            return res.status(201).json({ message: "Service created successfully" });
        }
    );
};

exports.deleteService = (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ error: "Service ID is required in the URL" });
    }

    db.query("DELETE FROM services WHERE id = ?", [id], (err, results) => {
        if (err) {
            console.error("Database error:", err);
            return res.status(500).json({ error: "Error deleting service" });
        }

        return res.status(200).json({ message: "Service deleted successfully" });
    });
};

exports.getServiceById = (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ error: "Service ID is required in the URL" });
    }

    const query = `
        SELECT 
            services.*, 
            users.name AS user_name,
            users.lastName AS user_lastName, 
            users.email AS user_email, 
            users.profile_picture AS user_profilepic 
        FROM services 
        JOIN users ON services.user_id = users.id 
        WHERE services.id = ?
    `;

    db.query(query, [id], (err, results) => {
        if (err) {
            console.error("Database error:", err);
            return res.status(500).json({ error: "Error retrieving service from database" });
        }

        if (!results.length) {
            return res.status(404).json({ message: "Service not found" });
        }

        const { id, title, description, serviceCoverpic, price, price_unit, user_id, category_id, created_at, user_name, user_email, user_profilepic , user_lastName } = results[0];

        return res.status(200).json({
            id,
            title,
            description,
            coverpic: serviceCoverpic,
            price,
            price_unit,
            user_id,
            category_id,
            created_at,
            owner: {
                name: user_name,
                lastname : user_lastName,
                email: user_email,
                profilepic: user_profilepic
            }
        });
    });
};

exports.approvedServices = (req, res) => {
    const { idService, idSeller, idBuyer } = req.params;

    if (!idService || !idSeller || !idBuyer) {
        return res.status(400).json({ error: "Missing required parameters" });
    }

    console.log(`Marking service ${idService} as completed by seller ${idSeller} for buyer ${idBuyer}`);

    db.query("INSERT INTO completed_services (service_id, seller_id, buyer_id) VALUES (?, ?, ?)", [idService, idSeller, idBuyer], (err, result) => {
        if (err) {
            console.error("Database error:", err);
            return res.status(500).json({ error: "Error updating service status" });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: "Service not found or unauthorized action" });
        }

        return res.status(200).json({ message: "Service marked as pending successfully" });
    });
};

exports.addImages = (req, res) => {
    const { id } = req.params;
    const { images } = req.body;

    if (!id) {
        return res.status(400).json({ error: "Service ID is required in the URL" });
    }

    if (!images || !images.length) {
        return res.status(400).json({ error: "No images provided" });
    }

    console.log(`Adding ${images.length} images to service ${id}`);

    db.query("INSERT INTO service_images (service_id, service_img) VALUES ?", [images.map(image => [id, image])], (err) => {
        if (err) {
            console.error("Database error:", err);
            return res.status(500).json({ error: "Error adding images to service" });
        }

        return res.status(201).json({ message: "Images added to service successfully" });
    });
};

exports.getReviews = (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ error: "Service ID is required in the URL" });
    }

    db.query("SELECT * FROM reviews WHERE service_id = ?", [id], (err, results) => {
        if (err) {
            console.error("Database error:", err);
            return res.status(500).json({ error: "Error retrieving reviews from database" });
        }

        if (!results.length) {
            return res.status(404).json({ message: "No reviews found" });
        }

        return res.status(200).json(results);
    });
}

exports.getAllCategories = (req, res) => {
    db.query("SELECT * FROM categories", (err, results) => {
        if (err) {
            console.error("Database error:", err);
            return res.status(500).json({ error: "Error retrieving categories from database" });
        }

        if (!results.length) {
            return res.status(404).json({ message: "No categories found" });
        }

        return res.status(200).json(results);
    });
}

exports.deleteCategory = (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ error: "Category ID is required in the URL" });
    }

    db.query("DELETE FROM categories WHERE id = ?", [id], (err, results) => {
        if (err) {
            console.error("Database error:", err);
            return res.status(500).json({ error: "Error deleting category" });
        }

        if (results.affectedRows === 0) {
            return res.status(404).json({ message: "Category not found" });
        }

        return res.status(200).json({ message: "Category deleted successfully" });
    });
}

exports.createCategory = (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ error: "Category name is required" });
    }

    db.query("INSERT INTO categories (name) VALUES (?)", [name], (err) => {
        if (err) {
            console.error("Database error:", err);
            return res.status(500).json({ error: "Error creating category" });
        }

        return res.status(201).json({ message: "Category created successfully" });
    });
}

exports.deleteImages = (req, res) => {
<<<<<<< HEAD
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ error: "Service ID is required in the URL" });
    }

    db.query("DELETE FROM service_images WHERE service_id = ?", [id], (err, results) => {
=======
    const { service_id } = req.params;

    if (!service_id) {
        return res.status(400).json({ error: "Service ID is required in the URL" });
    }

    db.query("DELETE FROM service_images WHERE service_id = ?", [service_id], (err, results) => {
>>>>>>> 3b1b325da53a4bcefe4239fa529a45551f83e1ab
        if (err) {
            console.error("Database error:", err);
            return res.status(500).json({ error: "Error deleting images" });
        }

        return res.status(200).json({ message: "Images deleted successfully" });
    });
<<<<<<< HEAD
}
=======
};
>>>>>>> 3b1b325da53a4bcefe4239fa529a45551f83e1ab
