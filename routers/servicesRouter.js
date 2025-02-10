const express = require("express")
const router=express.Router()
const serviceController=require("../controllers/servicesController.js")

router.get("/", serviceController.getServices);

router.get("/category", serviceController.getServicesByCategory);
router.post("/:id", serviceController.createService);
router.delete("/:id", serviceController.deleteService);

<<<<<<< HEAD
router.post("/:id/:id/:id", serviceController.createCompletedService);
=======
router.post("/:idService/:idSeller/:idBuyer", serviceController.completedServices);
>>>>>>> 63f0c3f3f1b552cc22be3a27532b5fb63f754bf1




module.exports= router
