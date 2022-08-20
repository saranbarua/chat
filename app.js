const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const path= require('path');
const cookieParser = require('cookie-parser');

const app= express();
dotenv.config();

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

//error handling

app.listen(process.env.PORT, () => {
    console.log(`Listening from port ${process.env.PORT} `)
})