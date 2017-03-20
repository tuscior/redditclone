const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;

const config = require('../config/database');

mongoose.Promise = Promise;

const userSchema = new Schema({
	username: {type: String, required: true, unique: true},
	password: {type: String, required: true},
	email: {type: String, required: true, unique: true}
});

const User = mongoose.model('User', userSchema);
module.exports = User;


module.exports.addUser = function(newUser, callback){
	bcrypt.genSalt(10, (err,salt) => {
		if(err){throw err}
		bcrypt.hash(newUser.password, salt, (err,hash) => {
			newUser.password = hash;
			newUser.save(callback);
		});
	});
}
module.exports.findUser = function(id, callback){
	User.findOne({_id: id}, callback);
}

module.exports.getUser = (username, callback) => {
	User.findOne({username: username}, callback);
}

module.exports.comparePass = (password, hashPass, callback) => {
	bcrypt.compare(password, hashPass, (err, isMatch) => {
		if(err) throw err;
		callback(null, isMatch);
	});
}