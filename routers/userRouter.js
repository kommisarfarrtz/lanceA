const express = require("express")
const router=express.Router()
const userController=require("../controllers/userController.js")


router.get("/",userController.getUsers)
router.get("/:id",userController.getUserById)
router.post("/",userController.createUser)
router.put("/:id",userController.updateUser)
router.put("/:id/activateSeller",userController.activateSeller)
router.put("/:id/deactivateSeller",userController.deactivateSeller)
router.delete("/:id",userController.deleteUser)


module.exports= router