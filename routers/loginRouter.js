//external import
const express= require('express') 
const router= express.Router();


//internal import
const {getLogin, login,logout} = require("../controllers/loginController")
const decorateHtmlResponse= require('../middlewares/common/decorateHtmlResponse')
const { doLoginValidators, doLoginValidationHandler,}= require("../middlewares/login/logInValidator")
const {redirectLoggedIn}= require("../middlewares/common/checkLogIn")

    const page_title ="Login"
    
//log in page
router.get("/" , decorateHtmlResponse (page_title),redirectLoggedIn, getLogin)

router.post("/", decorateHtmlResponse (page_title),
                     doLoginValidators,
                     doLoginValidationHandler, 
                     login)

//log out
router.delete("/", logout)

module.exports= router;