function getUsers(req,res,next){
    res.render("users",{
        title: "users  page"
    })
    }
    
    module.exports ={
        getUsers
    }