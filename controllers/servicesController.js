const e = require("express");
const servicesModel = require("../models/serviceModel.js");
exports.getAllServices = async (req, res, next) => 
{
    servicesModel.getAllServices((err, results) => {
        if (err) 
        {
            return next(err);
        }
    
        if (!results.services.length) 
        {
        return next(createError(404, "No services found"));
        }
    
        res.status(200).send(results);
    });
};

exports.createService = async (req, res, next) => {
    const { subCatId, userId } = req.params;
    const { title, description, serviceCoverpic, price, price_unit, images } = req.body;

    servicesModel.createService(
        { userId, title, description, serviceCoverpic, price, price_unit, subCatId, images }, 
        (err, results) => {
            if (err) return next(err);
            res.status(201).send({ message: "Service created successfully", serviceId: results.serviceId });
        }
    );
};

exports.deleteService = async (req, res, next) =>
{
    const {id} = req.params;
    servicesModel.deleteService(id, (err, results) => {
        if (err) 
        {
            return next(err);
        }

        if (results.affectedRows === 0) 
        {
            return next(createError(404, "Service not found"));
        }

        res.status(200).send("Service deleted successfully");
    });
};

exports.getServiceBySubCategoryId = async (req, res, next) => {
    const { id } = req.params;
    servicesModel.getServiceBySubCategoryId(id, (err, results) => {
        if (err) {
            return next(err);
        }

        if (!results.services.length) {
            res.status(404).send({ message: "service not found" });
        }

        res.status(200).send(results);
    });
};

exports.getServiceById = async (req, res, next) => {
    const { id } = req.params;
    servicesModel.getServiceById(id, (err, results) => {
        if (err) {
            return next(err);
        }

        if (!results.services.length) {
            res.status(404).send({ message: "service not found" });
        }

        res.status(200).send(results);
    });
};

exports.updateService = async (req, res, next) => {
};

exports.getAllSubCategories = async (req, res, next) => {
    servicesModel.getAllSubCategories((err, results) => {
        if (err) 
        {
            return next(err);
        }
    
        if (!results.services.length) 
        {
        return next(createError(404, "No sub-Categories found"));
        }
    
        res.status(200).send(results);
    });
};

exports.getSubCategoryById = async (req, res, next) => {
    const { id } = req.params;
    servicesModel.getSubCategoryById(id, (err, results) => {
        if (err) {
            return next(err);
        }

        if (!results.subCategory) {
            res.status(404).send({ message: "Sub-category not found" });
        }

        res.status(200).send(results);
    });
};

exports.getSubCategoriesByCategoryId = async (req, res, next) => {
    const { CategorieId } = req.params;
    servicesModel.getSubCategoriesByCategoryId(CategorieId, (err, results) => {
        if (err) {
            return next(err);
        }

        if (!results.subCategories.length) {
            res.status(404).send({ message: "No sub-categories found" });
        }

        res.status(200).send(results);
    });
};

exports.approvedServices = async (req, res, next) => {
    const { idService, idSeller, idBuyer } = req.params;
    servicesModel.approvedServices(idService, idSeller, idBuyer, (err, results) => {
        if (err) {
            return next(err);
        }

        res.status(200).send({ message: "Service approved successfully" });
    });
}

exports.UpdateapprovedServices = async (req, res, next) => {
    const { idService, idSeller, idBuyer } = req.params;
    servicesModel.UpdateapprovedServices(idService, idSeller, idBuyer, (err, results) => {
        if (err) {
            return next(err);
        }

        res.status(200).send({ message: "Service updated successfully" });
    });
}

exports.deleteImages = async (req, res, next) => {
    const { id } = req.params;
    servicesModel.deleteImages(id, (err, results) => {
        if (err) {
            return next(err);
        }

        res.status(200).send({ message: "Image deleted successfully" });
    });
}

exports.getAllCategories = async (req, res, next) => {
    servicesModel.getAllCategories((err, results) => {
        if (err) {
            return next(err); // Ensure we stop execution on error
        }

        if (!results.categories.length) {
            return res.status(404).send({ message: "No categories found" }); // Prevent further execution
        }

        res.status(200).send(results);
    });
};

exports.getCategoriesById = async (req, res, next) => {
    const { id } = req.params;
    servicesModel.getCategoriesById(id, (err, results) => {
        if (err) {
            return next(err);
        }

        if (!results.categories.length) {
            res.status(404).send({ message: "Category not found" });
        }

        res.status(200).send(results);
    });
}