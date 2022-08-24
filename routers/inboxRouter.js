//external import
const express= require('express') 
const router= express.Router();
const decorateHtmlResponse= require('../middlewares/common/decorateHtmlResponse')

//internal import
const {getInbox,
       searchUser,
       addConversation,
    getMessages,
   sendMessage  
}= require("../controllers/inboxController")
const {checkLogin}= require("../middlewares/common/checkLogIn")
const attachmentUpload = require("../middlewares/inbox/attachmentUpload");
//log in page
router.get("/" , decorateHtmlResponse ("Inbox"),checkLogin, getInbox)


// search user for conversation
router.post("/search", checkLogin, searchUser);

// add conversation
router.post("/conversation", checkLogin, addConversation);

// get messages of a conversation
router.get("/messages/:conversation_id", checkLogin, getMessages);

// send message
router.post("/message", checkLogin, attachmentUpload, sendMessage);


module.exports= router;