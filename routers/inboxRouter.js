//external import
const express= require('express') 
const router= express.Router();
const decorateHtmlResponse= require('../middlewares/common/decorateHtmlResponse')

//internal import
const {getInbox} = require("../controllers/inboxController")
//log in page
router.get("/" , decorateHtmlResponse ("Inbox"), getInbox)

module.exports= router;