const passport = require('passport');
const requireAuth = passport.authenticate('jwt', {session: false});
const path = require('path');
const user = require('./routes/user');
const post = require('./routes/post');
const comment = require('./routes/comment');
const profile = require('./routes/profile');

module.exports = function(app) {
  
  app.get("/home", post.homeView);
  app.get("/profile/:id", profile.profileView);
  app.get("/post/:id", post.postView);
  app.post('/register', user.registerUser);
  app.post('/login', user.logUser);
  app.post('/newpost', post.addPost);
  app.post('/post/:id', post.postComments);
  app.post('/commentup/:id', comment.upVote);
  app.post('/commentdown/:id', comment.downVote);
  app.post('/upvote/:id', post.upVote);
  app.post('/downvote/:id', post.downVote);
  app.delete('/delete/:id', post.deletePost);
}