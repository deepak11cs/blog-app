const Users = require('../models/User');


exports.profile = function(req,res,next){
    //res.json(req.user);
    Users.findOne({name: req.params.username})
    .populate('articles',{content: 0})
    .exec((err,data)=>{
        if(err){
            return next(err);
        }
        if(data){
            return res.json(data);
        }
        else{
            return next();
        }
    });
}
