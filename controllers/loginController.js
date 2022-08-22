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
         const isValidPassword  = await bcrypt.compare(
          req.body.password, //plain text password to comparing with db pass
          user.password ) //database store password

          if(isValidPassword){
            const userObject =
            { username:user.name,
             email: user.email,
             mobile: user.mobile,
             role: "user"
             };
             //generate to token
             const token = jwt.sign(userObject,process.env.JWT_SECRET,{
            expiresIn:process.env.JWT_EXPIRY
            });

            //set cookie
             res.cookie(process.env.COOLI_NAME,
              token, {
                 maxAge:process.env.JWT_EXPIRY,
                 httpOnly:true,
                 signed: true,
                });

                res.locals.loggedInUser =userObject //after user log in admin can acces any information.
                 res.render("inbox"); //after log in to redirect inbox
            }else{
           throw createError("log in failed")
          }

       }else{
        throw createError("log in failed")
      }
    } catch (error) {
      res.render("index",
      {
        data:{
          username: req.body.username
        },
        errors: {
          common: {
            msg: err.message,
          },
        },
      });
    }
}

module.exports ={
    getLogin,login
}