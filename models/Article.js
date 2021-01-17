const Mongoose = require('mongoose');
const User = require('./User');
const Schema = Mongoose.Schema;

const articleSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    author: {
        required: true,
        type: Mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    tag: {
        type: [String]
    },
    content: {
        type: String,
        required: true
    }
});
articleSchema.pre('save',function(next){
    const article = this;
    User.updateOne(
        {_id: article.author},
        {$push: {
            articles: article._id
        }},
        (err)=>{
            if(err){
                return next(err);
            }
            next();
        }
    );
});

const model = Mongoose.model('Article',articleSchema);

module.exports = model;