const express = require("express")
const router=express.Router()
const serviceController=require("../controllers/servicesController.js")

router.get("/", serviceController.getServices);

router.get("/category", serviceController.getServicesByCategory);



module.exports= router
