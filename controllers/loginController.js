function getLogin(req,res,next){
res.render("index",{
    title: "Log in page"
})
}

module.exports ={
    getLogin
}