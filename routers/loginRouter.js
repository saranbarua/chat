//external import
const express= require('express') 
const router= express.Router();
const decorateHtmlResponse= require('../middlewares/common/decorateHtmlResponse')

//internal import
const {getLogin, login} = require("../controllers/loginController")
//log in page
router.get("/" , decorateHtmlResponse ("Login"), getLogin)

router.post("/", login)

module.exports= router;