const express = require("express")
const router=express.Router()
const serviceController=require("../controllers/servicesController.js")

router.get("/", serviceController.getServices);

router.get("/category", serviceController.getServicesByCategory);
router.post("/:id", serviceController.createService);
router.delete("/:id", serviceController.deleteService);

router.post("/:idService/:idSeller/:idBuyer", serviceController.approvedServices);

router.post("/images/:id", serviceController.addImages);

router.get("/reviews/id", serviceController.getReviews);

router.get("/AllCategories", serviceController.getAllCategories);

router.delete("/deleteImages/:service_id", serviceController.deleteImages);


module.exports= router
