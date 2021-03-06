const Authentication = require('./controllers/Authentication');
const Userapi = require('./controllers/Userapi');
const passportService = require('./services/passport');
const passport = require('passport');
const requireSignin = passport.authenticate('local',{session: false});
const requireAuth = passport.authenticate('jwt',{session: false});
const Articleapi = require('./controllers/Articleapi');

module.exports = function(app){
    app.post('/',Articleapi.getAllArticles); 
    app.post('/article/:id',Articleapi.getArticle);
    app.post('/deletearticle/:id',requireAuth,Articleapi.removeArticle);
    app.post('/user/:username',requireAuth,Userapi.profile);
    app.post('/publish',requireAuth, Articleapi.publish);
    app.post('/signup',Authentication.signup);
    app.post('/signin',requireSignin,Authentication.signin);
}