//external import
const express= require('express') 
const router= express.Router();

//internal import
const {getInbox} = require("../controllers/inboxController")
//log in page
router.get("/" , getInbox)

module.exports= router;