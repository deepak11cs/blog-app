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

    Article.find({})
    .populate('author',{name: 1})
    .exec((err,data)=>{

        if(err){
            return callback(err);
        }
        if(data){
            if(data.content)
                data.content = data.content.substring(0,20);
            console.log(data);
            return callback(null,data);
        }
        else{
            return callback(null,"No Articles found!");
        }

    });

}