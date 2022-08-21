//external import
const express= require('express') 
const router= express.Router();
const decorateHtmlResponse= require('../middlewares/common/decorateHtmlResponse')

//internal import
const {getUsers} = require("../controllers/usersController")
//users in page
router.get("/" ,decorateHtmlResponse ("User"), getUsers)

module.exports= router;