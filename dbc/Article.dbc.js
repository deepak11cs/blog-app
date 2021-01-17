const Article = require('../models/Article');

exports.addArticle = (req,callback)=>{
    const title = req.body.title;
    const author = req.user._id;
    const tags = req.body.tags;
    const content = req.body.content;

    const article = new Article({
        title: title,
        author: author,
        tags: tags,
        content: content
    });
    article.save((err)=>{
        if(err){
            return callback(err);
        }
        return callback(null, "Successfully published the article");
    });
}

exports.getArticles = function(req,callback){

    Article.find({},{ content: 0})
    .populate('author',{name: 1 })
    .exec((err,data)=>{

        if(err){
            return callback(err);
        }
        if(data){
            return callback(null,data);
        }
        else{
            return callback(null,"No Articles found!");
        }

    });

}