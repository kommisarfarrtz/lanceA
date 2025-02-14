const express = require("express");
const router = express.Router();
const serviceController = require("../controllers/servicesController.js");


// Service routes
router.get("/", serviceController.getAllServices);
router.post("/:subCatId/:userId", serviceController.createService);
router.delete("/:id", serviceController.deleteService);
router.get("/subCategory/:id", serviceController.getServiceBySubCategoryId);
router.get("/:id", serviceController.getServiceById);

// Sub-category routes
router.get("/subCategory", serviceController.getAllSubCategories);
router.get("/subCategory/:id", serviceController.getSubCategoryById);
router.get("/subCategory/:CategorieId", serviceController.getSubCategoriesByCategoryId);

// Approval routes
router.post("/:idService/:idSeller/:idBuyer", serviceController.approvedServices);
router.put("/:idService/:idSeller/:idBuyer", serviceController.UpdateapprovedServices);


// Image routes
router.delete("/images/:id", serviceController.deleteImages);
/* mizelet mana3rafesh kifeh besh ngedhom ( will be fixed soon V2 )
router.put("/images/:id", serviceController.updateImages);
router.put("/:id", serviceController.updateService); */

// Category routes
router.get("/allCategories", serviceController.getAllCategories);
router.get("/categories/:id", serviceController.getCategoriesById);

module.exports = router; 