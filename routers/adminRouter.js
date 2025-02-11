const express = require("express")
const router=express.Router()
const adminController=require("../controllers/adminController.js")
const userController=require("../controllers/userController.js")
const servicesController=require("../controllers/servicesController.js")

router.get("/users", userController.getUsers);
router.get("/services", servicesController.getServices);
router.delete("/services/:id", servicesController.deleteService);
router.get("/services/category", servicesController.getAllCategories);
router.post("/services/category", servicesController.createCategory);
router.delete("services/category/:id", servicesController.deleteCategory);

module.exports= router
