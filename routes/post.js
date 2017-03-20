const express = require('express');
const Post = require('../models/post');
const Comment = require('../models/comment');
const User = require('../models/user');

function formatAMPM() {
let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
const ampm = hours >= 12 ? 'pm' : 'am';
hours = hours % 12;
hours = hours ? hours : 12; // the hour '0' should be '12'
minutes = minutes < 10 ? '0'+minutes : minutes;
let strTime = hours + ':' + minutes + ' ' + ampm;
return strTime;
}

function getTime(){
let date = new Date();	
const year = date.getFullYear();
const day = date.getDate();
let month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
let monthName = month[date.getMonth()];
let strDate = day + ' ' + monthName + ' ' +  year
return strDate;
}


exports.addPost = (req,res) => {
let user = req.body.user;
const time =  getTime() + ' at ' + formatAMPM();


const newPost = new Post ({
link: req.body.link,
title: req.body.title,
authorId: req.body.authorId,
content: req.body.content,
date: time,
votes: 0,
votersID: [],
comments: 0,
author: user
});

Post.addPost(newPost, (err, post) => {
	if(err){
		res.json({success: false, msg:"Failed to add post"});
	}else {
		res.json({success: true, msg:"Post added"});
	}
});

}
exports.postComments = (req,res) => {
const time =  getTime() + ' at ' + formatAMPM();
const postID = req.params.id;	
const newComment = new Comment({
	authorUsername: req.body.authorUsername,
	comment: req.body.comment,
	postID: postID,
	date: time,
	votes: 0,
	votersID: []
	});
Post.findOnePost(postID, (err,post) => {
	if(err){return err}
	if(post){
		Post.addComment(post, (err, success) => {
			if(err) return err;
			
		});
	}	
});
Comment.addComment(newComment, (err,comment) => {
	if(err){
		res.json({success: false, msg:"Failed to add comment"});
	}else {
		res.json({success: true, msg:"Comment added"});
	}
});
}

exports.upVote = (req, res) => {
const postID = req.params.id;
const userID = req.body.id;
Post.findOnePost(postID, (err, post) => {
if(err){return err}
if(post){
	Post.addVote(post, userID, (err, post, next) => {
		if(err) {return err}
		res.json({msg: "Vote added"});
	});
}	
});

}
exports.downVote = (req, res) => {
const postID = req.params.id;
const userID = req.body.id;
Post.findOnePost(postID, (err, post) => {
if(err){return err}
if(post){
	Post.downVote(post, userID, (err, post, next) => {
		if(err) {return err}
		res.json({msg: "Vote added"});	
	});
}	
});

}

exports.deletePost = (req, res) => {
const postID = req.params.id;

Post.findOnePost(postID, (err, post) => {
if(err) return err;
if(post){
	Post.deletePost(post, (err, post) => {
		if(err) return err;
		if(post) {
			res.send({success: true, msg: "Post deleted successfully"});
		}
	});
}	
});
}

exports.homeView = (req,res) => {
let pageOptions = {
	page: req.query.page || 0,
	limit: req.query.limit || 35 
}	
Post.find({})
	.sort({
		date: "desc"
	})
	.skip(pageOptions.page*pageOptions.limit)
	.limit(pageOptions.limit)
	.exec((err, posts) => {
		if(err) return err;
		if(posts){
			res.json(posts);
		}
	})	
}

exports.postView = (req,res) => {
const id = req.params.id;
Post.find({_id: id}, (err, post) => {
	if(err) return err;
	if(post){
		Comment.find({postID: id}, (err, comment) => {
			if(err) return err;
			if(comment){
				res.json([post, comment]);
			}else {
				res.json([post,comment]);
			} 
		});
	} else {
		res.status(500).json({msg: "Post deesnt exist"});
	}
});
}