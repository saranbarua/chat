//external import
const express= require('express') 
const router= express.Router();

//internal import
const {getLogin} = require("../controllers/loginController")
//log in page
router.get("/" , getLogin)

module.exports= router;