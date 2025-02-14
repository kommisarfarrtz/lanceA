const e = require("express");
const servicesModel = require("../models/serviceModel.js");
const createError = require("../middleware/middleware.js");

exports.getAllServices = async (req, res, next) => {
    servicesModel.getAllServices((err, results) => {
        if (err) return next(err);
    
        if (!results.services.length) {
        return next(createError(404, "No services found"));
        }
    
        res.status(200).send(results);
    });
    }