const Article = require('../models/Article');

exports.addArticle = (req,callback)=>{
    const title = req.body.title;
    const author = req.user._id;
    const tagslist = req.body.tags;
    console.log(tagslist);
    const content = req.body.content;
    if(title === undefined || title==='' || title.length <=4){
        return callback("Title is required (atleast 4 characters)");
    }
    if(tagslist.length==0){
        return callback("Tags can not be empty");
    }
    if(content === undefined || content==='' || content.length <=4){
        return callback("Title is required (atleast 4 characters)");
    }
    const preview = content.substring(0,150);

    const article = new Article({
        title: title,
        author: author,
        tags: tagslist,
        content: content,
        preview: preview
    });
    console.log(article);
    article.save((err)=>{
        if(err){
            return callback(err);
        }
        return callback(null, "Successfully published the article");
    });
}

exports.getArticle = function(req,callback){
    Article.findOne({_id: req.params.id})
    .populate('author',{name: 1})
    .exec((err,data)=>{
        if(err)
            return callback(err);
        if(data)
            return callback(null,data);
        else
            return callback(null,"incorrect id");
    });
}

exports.getArticles = function(req,callback){

    Article.find({},{content: 0})
    .populate('author',{name: 1})
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