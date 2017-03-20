import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

validateRegister(user){
if(user.name == "" || user.username == "" || user.password == "" || user.email == ""){
		return false;
}else{
	return true;
	}		
}
validateEmail(email){
var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);	
}
validateLogin(user){
	if(user.username == "" || user.password == ""){
	return false;
}

}
validateLink(link){
	if(link.link == ""){
	return false;
	}
	else {
	return true;
	}
}
validatePost(post){
let content = post.content;
	if(content == ""){
	return false;
	}
	else {
	return true;
	}
}
alreadyVoted(post, user){
return post.votersID.some(voter => {
		return voter == user;
	});
}
}