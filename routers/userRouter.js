//external import
const express= require('express') 
const router= express.Router();

//internal import
const {getUsers,addUser,removeUser} = require("../controllers/usersController")
const decorateHtmlResponse= require('../middlewares/common/decorateHtmlResponse')
const avatarUpload = require ("../middlewares/users/avatarUpload")
const {addUserValidators, addUserValidationHandler}  = require("../middlewares/users/usersValidator")
const {checkLogin}= require("../middlewares/common/checkLogIn")

//users in page
router.get("/" ,decorateHtmlResponse ("User"), checkLogin, getUsers)

//add user""
router.post("/", avatarUpload,addUserValidators,addUserValidationHandler, addUser )

//remove id and user
router.delete("/:id", removeUser)

module.exports= router;