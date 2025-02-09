const express = require("express")
const router=express.Router()
const userController=require("../controllers/userController.js")


router.get("/",userController.getUsers)
router.get("/:id",userController.getUserById)
router.post("/",userController.createUser)
router.put("/:id",userController.updateUser)
router.delete("/:id",userController.deleteUser)

router.put("/:id/activateSeller",userController.activateUser)
router.put("/:id/deactivateSeller",userController.deactivateUser)








module.exports= router