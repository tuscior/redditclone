const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const postSchema = new Schema ({
	link: {type: String},
	title: {type: String, required: true},
	authorId: {type: String, required: true},
	content: {type: String},
	date: {type: String},
	votes: {type: String},
	votersID: {type: Array},
	comments: {type: String},
	author: {type: String, required: true}
});
const Post = mongoose.model('post', postSchema);
module.exports = Post;

module.exports.addPost = function(newPost, callback){
	newPost.save(callback);
}
module.exports.findOnePost = function(postID, callback){
	const query = {_id: postID};	
	Post.findOne(query, callback);
}
module.exports.addComment = function(postID, callback){
	const query = {_id: postID};
	Post.findOne(query, (err, post) => {
		if(err){callback(err)}
		if(post){
			let num = parseInt(post.comments);
			num += 1;
			post.comments = num.toString();
			post.save(callback);
		}	
	});
}

module.exports.addVote = function(post, userID, callback){
	let votes = parseInt(post.votes);
	votes += 1;
	post.votersID.push(userID);
	post.votes = votes;
	post.save();
	callback();
}

module.exports.downVote = function(post, userID, callback){
	let votes = parseInt(post.votes);
	votes -= 1;
	post.votersID.push(userID);
	post.votes = votes;
	post.save();
	callback();
}
module.exports.deletePost = function(Post, callback){
	Post.remove(callback);
}