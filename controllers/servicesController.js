const servicesModel = require("../models/serviceModel.js");

exports.getServices = (req, res) => {
    servicesModel.getServices(req, res);
}

exports.getServicesByCategory = (req, res) => {
    servicesModel.getServicesByCategory(req, res);
}
