const createErrors = require('http-errors');

//404 not found handler
function notFoundHandler(req,res , next){
    
    next(createErrors(404, "Your req not found"))
}

//default error handler
function errorHandler(err,req,res , next){
    
    res.render('error')  //view file of views
}