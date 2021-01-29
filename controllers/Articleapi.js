const Article = require('../models/Article');
const dbcArticle = require('../dbc/Article.dbc');

exports.publish = function(req,res, next){
    console.log(req.user._id);
    dbcArticle.addArticle(req,(err,data)=>{
        if(err){
            return next(err);
        }
        return res.send(data);
    });
}

exports.getArticle = function(req,res,next){

    dbcArticle.getArticle(req,(err,data)=>{
        if(err)
            return next(err);
        return res.send(data);
    });

}

exports.getAllArticles = function(req,res,next){

    dbcArticle.getArticles(req,(err,data)=>{
        if(err){
            return next(err);
        }
        return res.send(data);
    });

}