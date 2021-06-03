const User = require('../models/User');
const jwt = require('jwt-simple');
const config = require('../config');
require('dotenv');

function tokenForUser(user){
    const timestamp = new Date().getTime();
    return jwt.encode({sub: user._id, iat: timestamp},config.secret);
}

exports.signup = function(req,res,next){
    console.log(req.body);
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;  
    const age = req.body.age;
    User.findOne({name: name},(err,data)=>{
        if(err){
            
            next(err);
        }
        if(data){

            return res.status(422).send({error: 'Username is in use'});
        }
        else{
            const user = new User({
                email: email,
                password: password,
                name: name,
                age: age
            });
            user.save((err)=>{
                if(err){
                    if(err.name === "MongoError" && err.code === 11000){
                
                        return res.status(500).send({error: 'Email is in use'});
                    }
                    return next(err);
                }
                res.json({token: tokenForUser(user) ,username: req.body.name});
            });
        }
    });
}

exports.signin = (req,res,next)=>{
    console.log(req); 
    res.json({token: tokenForUser(req.user), username: req.user.name});
    
}