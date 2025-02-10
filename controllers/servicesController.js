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
<<<<<<< HEAD

exports.createCompletedService = (req, res) => {
    servicesModel.createCompletedService(req, res);
=======
exports.completedServices = (req, res) => {
    servicesModel.completedServices(req, res);
>>>>>>> 63f0c3f3f1b552cc22be3a27532b5fb63f754bf1
}