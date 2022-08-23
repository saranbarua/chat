//external import
const express= require('express') 
const router= express.Router();
const decorateHtmlResponse= require('../middlewares/common/decorateHtmlResponse')

//internal import
const {getInbox} = require("../controllers/inboxController")
const {checkLogin}= require("../middlewares/common/checkLogIn")
//log in page
router.get("/" , decorateHtmlResponse ("Inbox"),checkLogin, getInbox)

module.exports= router;