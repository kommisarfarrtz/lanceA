const express = require("express")
const router=express.Router()
const adminController=require("../controllers/adminController.js")
const userController=require("../controllers/userController.js")
const servicesController=require("../controllers/servicesController.js")

router.get("users", userController.getUsers);
router.get("/services", servicesController.getServices);
router.delete("/services/:id", servicesControllerController.deleteService);
router.get("/category", adminController.getServicesByCategory);
router.post("/category", adminController.createCategory);
router.delete("/category/:id", adminController.deleteCategory);

