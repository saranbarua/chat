//external import
const express= require('express') 
const router= express.Router();

//internal import
const {getUsers} = require("../controllers/usersController")
//users in page
router.get("/" , getUsers)

module.exports= router;