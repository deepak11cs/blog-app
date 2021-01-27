const Users = require('../models/User');
// const Courses = require('../models/Course');
// const Package = require('../models/Package');
// const Coursecontent = require('../models/Coursecontent');
// const dbcCoursecontent = require('../dbc/Coursecontent.dbc'); 


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

// exports.coursesInPackage = (req,res,next)=>{
//     const id = req.body.id;
//     Package.findOne({_id: id},(err,data)=>{
//         if(err){
//             return next(err);
//         }
//         if(data){
//             res.json(data.courses);
//         }
        
//     });
// }

// exports.updatepackage = (req,res,next)=>{
//     const id = req.body.id;
//     const public = req.body.public;
//     Package.findOneAndUpdate({_id: id},{public: public},(err,data)=>{
//         if(err){
//             return next(err);
//         }
//         res.send(data);
//     });
// }

// exports.addcoursesinpackage = (req,res,next)=>{
//     const id = req.body.id;
//     console.log(req.body.id,req.body.course);
//     Package.findOneAndUpdate({_id: id},{$addToSet: {courses:req.body.course}},{useFindAndModify: false},(err,data)=>{
//         if(err){
//             return next(err);
//         }
//         res.send("course added");
//     });
    
// }

// exports.getcoursesnames = (req,res,next)=>{
//     var query = Courses.find({}).select({ "title": 1, "_id": 1});

//     query.exec(function (err, data) {
//         if (err) return next(err);
//         //console.log(data);
//         res.send(data);
//     });
// }

// exports.packageById = (req,res,next)=>{
//     const id = req.params.id;
//     Package.findOne({_id: id},(err,data)=>{
//         if(err){
//             return next(err);
//         }
        
//         res.json(data);
//     });
    
// }

// exports.getcourse = (req,res,next)=>{

//     Courses.findOne({_id: req.params.id},(err,data)=>{
//         if(err){
//             return next(err);
//         }
//         res.json(data);
//     })

// }

// exports.getcoursebyid = (req,res,next)=>{
    
//     Courses.findOne({_id: req.body.id},(err,data)=>{
//         if(err){
//             return next(err);
//         }
//         res.json(data);
//     })
// }

// exports.createpackage = function(req,res,next){
//     const title = req.body.title;
//     const dateCreated = new Date().toLocaleString();

//     Package.findOne({title: title},(err,data)=>{
//         if(err){
//             return next(err);
//         }
//         if(data){
//             return res.status(422).send({"error":"Package already exists"});
//         }
//         else{
//             const package = new Package({
//                 title,
//                 dateCreated
//             });
//             package.save((err)=>{
//                 if(err){
//                     return next(err);
//                 }
//                 res.send("Package created successfully");
//             })
//         }
//     });
// }

// exports.createcourse = function(req,res,next){
//     const title = req.body.title;
//     const instructor = req.body.instructor;
//     const type = req.body.type;
//     const dateCreated = new Date().toLocaleString();

//     Courses.findOne({title: title},(err,data)=>{
//         if(err){
//             return next(err);
//         }
//         if(data){
//             return res.status(422).send({"error":"Course already exists"});
//         }
//         else{
//             const course = new Courses({
//                 title,
//                 instructor,
//                 type,
//                 dateCreated
//             });
//             course.save((err)=>{
//                 if(err){
//                     return next(err);
//                 }
//                 res.send("Course created successfully");
//             })
//         }
//     });
// }