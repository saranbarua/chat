//internal import
const {notFoundHandler, errorHandler} = require("./middlewares/common/errorHandler")
const loginRouter = require('./routers/loginRouter')
const inboxRouter = require('./routers/inboxRouter')
const usersRouter = require('./routers/userRouter')
const moment = require("moment");

//external import
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const path= require('path');
const http = require("http");
const cookieParser = require('cookie-parser');

const app= express();
dotenv.config();
const server = http.createServer(app);
// socket creation
const io = require("socket.io")(server);
global.io = io;

// set comment as app locals
app.locals.moment = moment;

//database connection
mongoose.connect(process.env.DB_CONNECTION,{
    useNewUrlparser: true,
    useUnifiedTopology: true
}).then(()=> console.log('Db connected'))
.catch(err => console.log(err));

//request parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//set view eengine
app.set("view engine", "ejs");


//set static folder
app.use(express.static(path.join(__dirname, "public")))

//path cookies
app.use(cookieParser(process.env.COOKIE_SECRET));

//router handling
app.use("/" , loginRouter)
app.use("/user" , usersRouter)
app.use("/inbox" , inboxRouter)
//404 not found handler
app.use(notFoundHandler);

//common error handling
app.use(errorHandler);


app.listen(process.env.PORT, () => {
    console.log(`Listening from port ${process.env.PORT} `)
})