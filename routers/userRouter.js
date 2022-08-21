//external import
const express= require('express') 
const router= express.Router();

//internal import
const {getUsers} = require("../controllers/usersController")
const decorateHtmlResponse= require('../middlewares/common/decorateHtmlResponse')
const avatarUpload = require ("../middlewares/users/avatarUpload")
const {addUserValidators, addUserValidationHandler}  = require("../middlewares/users/usersValidator")

//users in page
router.get("/" ,decorateHtmlResponse ("User"), getUsers)

//add user""
router.post("/", avatarUpload,addUserValidators,addUserValidationHandler )

module.exports= router;