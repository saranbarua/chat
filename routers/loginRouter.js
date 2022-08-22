//external import
const express= require('express') 
const router= express.Router();


//internal import
const {getLogin, login} = require("../controllers/loginController")
const decorateHtmlResponse= require('../middlewares/common/decorateHtmlResponse')
const { doLoginValidators,
    doLoginValidationHandler,}= require("../middlewares/login/logInValidator")
    
//log in page
router.get("/" , decorateHtmlResponse ("Login"), getLogin)

router.post("/",  doLoginValidators,
                 doLoginValidationHandler, 
                 login)

module.exports= router;