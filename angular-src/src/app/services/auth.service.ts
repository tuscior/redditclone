import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {tokenNotExpired} from 'angular2-jwt';


@Injectable()
export class AuthService {
authToken: any;
user: any;
  constructor(private http: Http) { }

registerUser(user){
	let headers = new Headers();
	headers.append('Content-Type', 'application/json');
	return this.http.post('register', user, {headers: headers})
	.map(res => res.json());
}
authenticateUser(user){
	let headers = new Headers();
	headers.append('Content-Type', 'application/json');
	return this.http.post('login', user, {headers: headers})
	.map(res => res.json());
}
storeData(token, user){
	localStorage.setItem('id_token', token);
	localStorage.setItem('user', JSON.stringify(user));	
	this.authToken = token;
	this.user = user;
}
getProfile(){
	let userStr = localStorage.getItem('user');
	let profile = JSON.parse(userStr);
	return this.http.get('profile/'+profile.id).map(res => res.json());
}
loggedIn(){
	let token = localStorage.getItem('id_token');
	if(token){
	return true;
	}
	else {return false}
}
logout(){
	this.authToken = null;
	this.user = null;
	localStorage.clear();
}
getID(){
	let userStr = localStorage.getItem('user');
	let profile = JSON.parse(userStr);
	return profile.id;
}
getUsername(){
	let userStr = localStorage.getItem('user');
	let profile = JSON.parse(userStr);
	return profile.username;
}
}
