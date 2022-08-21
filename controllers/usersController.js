//external import
const bcrypt = require("bcrypt")


function getUsers(req,res,next){
    res.render("users")
    }
    
// add users function
async function addusers(req,res, next){
   let newUser;
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
   
  if(req.files && req.files.length >0){
    newUser = new User ({
      ...req.body,  //fetch req body
      avatar : req.files[0].filename,
      password: hashedPassword,
    })
 }
    else{
        newUser = new User ({
            ...req.body,  //fetch req body
            password: hashedPassword,
         })

    }
    
  }



    module.exports ={
        getUsers, addusers,
    }