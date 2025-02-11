const express = require("express")
const router=express.Router()
const userController=require("../controllers/userController.js")
const servicesController=require("../controllers/servicesController.js")

router.get("users", userController.getUsers);
router.get("/services", servicesController.getServices);
router.delete("/services/:id", servicesController.deleteService);
router.post("/category", servicesController.createCategory);
router.delete("/category/:id", servicesController.deleteCategory);

module.exports= router
