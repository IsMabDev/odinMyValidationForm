const express = require('express')
const router = express.Router()

const userController = require("../controllers/userController")
router.use(express.urlencoded({ extended: true }));

router.get("/", userController.usersListsGet)
router.get("/create", userController.addUserGet)
router.post("/create", userController.addUserPost)
router.post("/:id/delete", userController.deleteUserPost)
router.get ("/:id/update",userController.updateUserGet)
router.post("/:id/update",userController.updateUserPost)
module.exports=router