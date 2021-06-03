const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    articles: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Article"
    }]
});

userSchema.pre('save',function(next){
    const user = this;
    bcrypt.genSalt(10,function(err,salt){
        if(err){
            return next(err);
        }
        bcrypt.hash(user.password,salt,null,function(err,hash){
            if(err){
                return next(err);
            }
            user.password = hash;
            next();
        });
    });
});

userSchema.methods.comparePassword = function(candidatePassword, callback){
    
    bcrypt.compare(candidatePassword,this.password,function(err,isMatch){
        if(err){
            return callback(err);
        }
        callback(null, isMatch);
    });
}

const model = mongoose.model('User',userSchema);
module.exports = model;