// external imports
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const createError = require("http-errors");

//import inernal

const User = require("../models/People");

function getLogin(req,res,next){
res.render("index")
}

//do login
async function login(req,res,next){
    try {
       //find a user who has this email/username
       const user = await User.findOne({
         $or: [{email:req.body.username} ,{mobile:req.body.username}]
       })  
       if(user & user._id){
  
       }else{

       }
    } catch (error) {
        
    }
}

module.exports ={
    getLogin
}