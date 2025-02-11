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
