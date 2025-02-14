const express = require("express");
const router = express.Router();
const serviceController = require("../controllers/servicesController.js");

// Service routes
router.get("/", serviceController.getAllServices);
router.post("/:userId", serviceController.createService);
/*router.delete("/:id", serviceController.deleteService);
router.put("/:id", serviceController.updateService);
router.get("/subCategory/:id", serviceController.getServiceBySubCategoryId);
router.get("/seller/:id", serviceController.getServiceBySellerId);
router.get("service/id", serviceController.getServiceById);

// Sub-category routes
router.get("/subCategory", serviceController.getAllSubCategories);
router.get("/subCategory/:id", serviceController.getSubCategoryById);
router.get("/subCategory/:CategorieId", serviceController.getSubCategoriesByCategoryId);

// Approval routes
router.post("/:idService/:idSeller/:idBuyer", serviceController.approvedServices);

// Image routes
router.post("/images/:id", serviceController.addImages);
router.delete("/images/:id", serviceController.deleteImages);
router.put("/images/:id", serviceController.updateImages);

// Category routes
router.get("/allCategories", serviceController.getAllCategories);
router.get("/categories/:id", serviceController.getCategoriesById);*/

module.exports = router; 