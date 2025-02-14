const db = require("../db.js");

// Get all Services with their owner // (done)
exports.getAllServices = (callback) => {
    db.query("SELECT s.*, u.*,sub.name as nameS FROM services s, users u , sub_categories sub WHERE s.user_id = u.id and sub.id = s.sub_id", (err, results) => {
        if (err) {
            return callback(err);
        }
        const services = results.map(row => ({
            id: row.id,
            title: row.title,
            description: row.description,
            servicePicture: row.serviceCoverpic,
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

// Create a new service // (done) 
exports.createService = (service, callback) => {
    db.query(
        "INSERT INTO services (user_id, title, description, serviceCoverpic, price, price_unit, sub_id) VALUES (?, ?, ?, ?, ?, ?, ?)", 
        [service.userId, service.title, service.description, service.serviceCoverpic, service.price, service.price_unit, service.subCatId], 
        (err, result) => {
            if (err) {
                return callback(err);
            }

            const serviceId = result.insertId;
            if (service.images && Array.isArray(service.images) && service.images.length > 0) {
                const values = service.images.map(image => [serviceId, image]);

                db.query("INSERT INTO service_images (service_id, service_img) VALUES ?", [values], (err) => {
                    if (err) {
                        console.error("Database error:", err);
                        return callback(err);
                    }

                    return callback(null, { message: "Service and images created successfully", serviceId });
                });
            } else {
                return callback(null, { message: "Service created successfully", serviceId });
            }
        }
    );
};

// Delete a service // (done)
exports.deleteService = (id, callback) => {
    db.query("DELETE FROM services WHERE id = ?", [id], callback);
};

// Get all services by sub-category id // (done)
exports.getServiceBySubCategoryId = (id, callback) => {
    db.query("SELECT * FROM services WHERE sub_id = ? and is_active=1", [id], (err, results) => {
        if (err) {
            return callback(err);
        }

        const services = results.map(row => ({
            id: row.id,
            title: row.title,
            description: row.description,
            servicePicture: row.serviceCoverpic,
            price: row.price,
            price_unit: row.price_unit,
            date: row.created_at
        }));
        callback(null, { services });
    });
};

// Get a service by id // (done)
exports.getServiceById = (id, callback) => {
    db.query("SELECT s.*, u.*,sub.name as nameS FROM services s, users u , sub_categories sub WHERE s.user_id = u.id and sub.id = s.sub_id and s.id= ?", [id], (err, results) => {
        if (err) {
            return callback(err);
        }
        const services = results.map(row => ({
            id: row.id,
            title: row.title,
            description: row.description,
            servicePicture: row.serviceCoverpic,
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

// Get all sub-categories // (done)
exports.getAllSubCategories = (callback) => {
    db.query("SELECT * FROM sub_categories", (err, results) => {
        if (err) {
            return callback(err);
        }

        const subCategories = results.map(row => ({
            id: row.id,
            name: row.name,
            categoryId: row.category_id
        }));
        callback(null, { subCategories });
    });
};

// Get all sub-categories by category id // (done)
exports.getSubCategoryById = (id, callback) => {
    db.query("SELECT * FROM sub_categories WHERE id = ?", [id], (err, results) => {
        if (err) {
            return callback(err);
        }

        if (results.length === 0) {
            return callback(null, { message: "Sub-category not found" });
        }

        const subCategory = results.map(row => ({
            id: row.id,
            name: row.name,
            categoryId: row.category_id
        }))[0];
        callback(null, { subCategory });
    });
};

// Get all sub-categories by category id // (done)
exports.getSubCategoriesByCategoryId = (id, callback) => {
    db.query("SELECT * FROM sub_categories WHERE category_id = ?", [id], (err, results) => {
        if (err) {
            return callback(err);
        }

        if (results.length === 0) {
            return callback(null, { message: "No sub-categories found" });
        }

        const subCategories = results.map(row => ({
            id: row.id,
            name: row.name,
            categoryId: row.category_id
        }));
        callback(null, { subCategories });
    });
};

// Approve services // (done)
exports.approvedServices = (idService, idSeller, idBuyer, callback) => {
        db.query("INSERT INTO approved_services (service_id, seller_id, buyer_id) VALUES (?, ?, ?)", [idService, idSeller, idBuyer], (err) => {
            if (err) {
                return callback(err);
            }

            callback(null, { message: "Service approved successfully" });
        });
}

// Update approved services // (done)
exports.UpdateapprovedServices = (idService, idSeller, idBuyer, callback) => {
    db.query("UPDATE approved_services SET status = 'completed' WHERE service_id = ? and seller_id = ? and buyer_id = ?", [idService, idSeller, idBuyer], (err) => {
        if (err) {
            return callback(err);
        }

        callback(null, { message: "Service Completed bye" });
    });
}

// Delete images // (done)
exports.deleteImages = (id, callback) => {
    db.query("DELETE FROM service_images WHERE service_id = ?", [id], callback);
};

// get all categories // (done)
exports.getAllCategories = (callback) => {
    db.query("SELECT * FROM categories", (err, results) => {
        if (err) {
            return callback(err);
        }

        const categories = results.map(row => ({
            id: row.id,
            name: row.name
        }));
        callback(null, { categories });
    });
};

// get category by id // (done)
exports.getCategoriesById = (id, callback) => {
    db.query("SELECT * FROM categories WHERE id = ?", [id], (err, results) => {
        if (err) {
            return callback(err);
        }

        if (results.length === 0) {
            return callback(null, { message: "Category not found" });
        }

        const category = results.map(row => ({
            id: row.id,
            name: row.name
        }))[0];
        callback(null, { category });
    });
};

// Update a service // (not done)
exports.updateService = (id, service, callback) => {
};

