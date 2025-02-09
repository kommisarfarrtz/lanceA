const express = require("express")
const router=express.Router()
const userController=require("../controllers/userController.js")


router.get("/",userController.getUsers)
router.get("/:id",userController.getUserById)
router.get("/:id",userController.getUserById)
router.post("/",userController.createUser)
router.put("/:id",userController.updateUser)
router.delete("/:id",userController.deleteUser)

router.put("login",userController.login)
router.put("logout",userController.logout)
router.put("register",userController.register)
router.put("updatePassword",userController.updatePassword) 

//authentification make this funcrionality
//router.get("/users",userController.getUsers)
//router.get("/users/:id",userController.getUserById)
//router.post("/users",userController.createUser)
//router.put("/users/:id",userController.updateUser)
//router.delete("/users/:id",userController.deleteUser)
//router.put("/login",userController.login)
//router.put("/logout",userController.logout)
//router.put("/register",userController.register)
// make the token of the user
//router.put("/updatePassword",userController.updatePassword)
//router.get("/users",userController.getUsers)
//router.get("/users/:id",userController.getUserById)



module.exports= router