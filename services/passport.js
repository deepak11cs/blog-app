const passport = require('passport');
const User = require('../models/User'); 
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

//create local strategy 
const localOptions = {usernameField: "name"};
const localLogin = new LocalStrategy(localOptions,function(name,password,done){
    
    User.findOne({name: name},(err,data)=>{
        
        if(err){
            return done(err);
        }

        if(!data){

            return done(null,false);
        }
        //compare passwords
        data.comparePassword(password, function(err,isMatch){

            if(err){
                return done(err);
            }
            if(!isMatch){
                return done(null,false);
            }
            return done(null,data);
        })
    });
});




const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.secret
};

//create jwt strategy
const jwtLogin = new JwtStrategy(jwtOptions, (payload, done)=>{
     
    User.findById(payload.sub, (err,user)=>{
        if(err){
            return done(err, false);
        }
        if(user){
            //console.log(user);
            done(null,user);

        }
        else{
            done(null,false);
        }
    });
});

//tell passport to use this strategy

passport.use(jwtLogin);
passport.use(localLogin);