const User = require('../models/user');
const Post = require('../models/post');

module.exports.profileView = (req,res) => {
const userID = req.params.id;	

User.find({_id: userID }, (err, user) => {
	if(err) return err;
	if(user){
		Post.find({authorId: userID}, (err,post) => {
			if(err) return err;
			if(post){
				res.json([user, post]);
			}
			else{
				res.json([user]);
			}
		});
	}
});
}

