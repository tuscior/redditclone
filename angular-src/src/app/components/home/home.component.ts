import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import {Router} from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ValidateService } from '../../services/validate.service';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

constructor(private postService: PostService, private authService: AuthService, private validateService: ValidateService, private flashMessage: FlashMessagesService, private router: Router){ }
ngOnInit() {
	this.postService.getPosts().subscribe(posts => {
		this.posts = posts;
		console.log(posts);
	});
  }
title: string;
link: string;
upvotes: number;
id: number;
posts: any;
post: any;

incrementVotes(post){
	if(!this.authService.loggedIn()){
		this.flashMessage.show('Log in to add vote', {cssClass: 'alert-success', timeout: 3000});
		return false;
	}
	let userID = this.authService.getID();
	if(this.validateService.alreadyVoted(post,userID)){
	this.flashMessage.show('Already voted', {cssClass: 'alert-success', timeout: 3000});
	return false;
	}
	this.postService.addVote(post, userID).subscribe(data => {
		this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeout: 3000});
		this.postService.getPosts().subscribe(posts => {
		this.posts = posts;
		});
		
	});
}
decrementVotes(post){
	if(!this.authService.loggedIn()){
		this.flashMessage.show('Log in to add vote', {cssClass: 'alert-success', timeout: 3000});
		return false;
	}
	let userID = this.authService.getID();
	if(this.validateService.alreadyVoted(post, userID)){
	this.flashMessage.show('Already voted', {cssClass: 'alert-success', timeout: 3000});
	return false;
	}
	this.postService.removeVote(post, userID).subscribe(data => {
		this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeout: 3000});
		this.postService.getPosts().subscribe(posts => {
		this.posts = posts;
		});
	});	
	}
onSelectPost(post){
this.router.navigate(['post/', post._id]);
	}
}
