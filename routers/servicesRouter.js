const express = require("express")
const router=express.Router()
const serviceController=require("../controllers/servicesController.js")

router.get("/", serviceController.getServices);

router.get("/category", serviceController.getServicesByCategory);
router.post("/:id", serviceController.createService);
router.delete("/:id", serviceController.deleteService);

router.post("/:idService/:idSeller/:idBuyer", serviceController.approvedServices);

router.post("/images/:id", serviceController.addImages);



module.exports= router
