const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Post = require('./post');

const commentSchema = new Schema ({
	authorUsername: {type: String, required: true},
	comment: {type: String},
	postID: {type: String},
	date: {type: String},
	votersID: {type: Array},
	votes: {type: String}
});
const Comment = mongoose.model('comment', commentSchema);
module.exports = Comment;

module.exports.findOneComment = function(commentID, callback){	
	const id = commentID;
	Comment.findById(id, callback);
}

module.exports.addComment = function(newComment, callback){
	newComment.save(callback);
}
module.exports.addCommentVote = function(comment, voterID, callback){
let num = parseInt(comment.votes);
comment.votes = num+1;
comment.votersID.push(voterID);
comment.save(callback);
}
module.exports.downCommentVote = function(comment, voterID, callback){
let num = parseInt(comment.votes);
comment.votes = num-1;
comment.votersID.push(voterID);
comment.save(callback);

}