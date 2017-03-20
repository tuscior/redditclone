const express = require('express');
const Post = require('../models/post');
let date = new Date();
const Comment = require('../models/comment');

exports.upVote = (req, res) => {
const commentID = req.params.id;
const voterID = req.body.voterID;
Comment.findOneComment(commentID, (err, comment) => {
	if(err) return err;
	if(comment){
		Comment.addCommentVote(comment, voterID, (err, success) => {
			if(err) return err;
			res.json({msg: "Vote added"});
		});
	}
});
}
exports.downVote = (req, res) => {
const commentID = req.params.id;
const voterID = req.body.voterID;
Comment.findOneComment(commentID, (err, comment) => {
	if(err) return err;
	if(comment){
		Comment.downCommentVote(comment, voterID, (err, success) => {
			if(err) return err;
			res.json({msg: "Vote added"})
		});
	}
});
}