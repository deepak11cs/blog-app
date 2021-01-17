const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
require('dotenv').config();


try{
    mongoose.connect(process.env.DB_URI, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true},()=>{
        console.log("connected to database");
    });
}catch(err){
    console.log("User database connection error "+err);
}

app.use(morgan('combined'));
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

routes(app);

app.get("/",(req,res)=>{
    res.send("User connected successfully");
});

const port = process.env.PORT || 3090;
app.listen(port,(err)=>{
    if(!err){
        console.log('listening on port ',port);
    }
});