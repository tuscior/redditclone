const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');

exports.registerUser = (req,res) => {
let user = new User({
username: req.body.username,
password: req.body.password,
email: req.body.email
});
User.addUser(user, (err, user) => {
	if(err){
		res.json({success: false, msg: "Failed to register new user"});
	} else {
		res.json({success: true, msg: "User added"});
	}
});
};

exports.logUser = (req,res) => {
	const username = req.body.username;
	const password = req.body.password;
	User.getUser(username, (err, user) => {
      if(err){
      	return err;
      }
      if(user == null){
      	res.json({success: false, msg: "User does not exist"});
      }
     	else {
     		User.comparePass(password, user.password, (err, isMatch) => {
     		if(err){
     			return err;
     		}
     		else if(isMatch){
     			const token = jwt.sign(user, config.secret, {
					expiresIn: 604800
				});
				res.json({
					token: token,
					success: true,
					user: {
						username: user.username,
						email: user.email,
						id: user._id
					}
				});
     		}
     		 else {
     			res.json({success: false, msg: "Invalid password"});
     		}
     	});
     }
	});
}