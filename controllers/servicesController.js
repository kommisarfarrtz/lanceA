const e = require("express");
const servicesModel = require("../models/serviceModel.js");

exports.getServices = (req, res) => {
    servicesModel.getServices(req, res);
}

exports.getServicesByCategory = (req, res) => {
    servicesModel.getServicesByCategory(req, res);
}

exports.createService = (req, res) => {
    servicesModel.createService(req, res);
}

exports.deleteService = (req, res) => {
    servicesModel.deleteService(req, res);
}
exports.approvedServices = (req, res) => {
    servicesModel.approvedServices(req, res);
}
exports.addImages = (req, res) => {
    servicesModel.addImages(req, res);
}
exports.getReviews = (req, res) => {
    servicesModel.getReviews(req, res);
}

exports.getAllCategories = (req, res) => {
    servicesModel.getAllCategories(req, res);
}
exports.createCategory = (req, res) => {
    servicesModel.createCategory(req, res);
}
exports.deleteCategory = (req, res) => {
    servicesModel.deleteCategory(req, res);
}

