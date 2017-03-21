import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import {Router} from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ValidateService } from '../../services/validate.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private postService: PostService, private authService: AuthService, private validateService: ValidateService, private flashMessage: FlashMessagesService, private router: Router, private route: ActivatedRoute) { }
post: any;
private sub: any;
id: any;
author: string;
comment: string;
  ngOnInit() {
  	this.sub = this.route.params.subscribe(params => {
  		this.id = params['id'];
    });
    this.postService.getPost(this.id).subscribe(post => {
       	this.post = post;
       }); 	
  }
  onCommentSubmit(){
  if(!this.authService.loggedIn()){
    this.flashMessage.show('Log in to add comment', {cssClass: 'alert-success', timeout: 3000});
    return false;
  }
  const author = this.authService.getUsername();
  const comment = {
  authorUsername: author,
  comment: this.comment,
  }
  this.postService.postComment(comment, this.id).subscribe(data => {
  	this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeout: 3000});
  	this.postService.getPost(this.id).subscribe(post => {
    this.post = post;
       }); 	  	
  });
  this.comment = "";
  }
decrementVotes(comment){
	let userID = this.authService.getID();
  if(!this.authService.loggedIn()){
    this.flashMessage.show('Log in to add vote', {cssClass: 'alert-success', timeout: 3000});
    return false;
  }
	if(this.validateService.alreadyVoted(comment, userID)){
	this.flashMessage.show('Already voted', {cssClass: 'alert-success', timeout: 3000});
	return false;
	}
	
	this.postService.removeCommentVote(comment, userID).subscribe(data => {
	this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeout: 3000});
    this.postService.getPost(this.id).subscribe(post => {
    this.post = post;
       });
	});	
}
incrementVotes(comment){
	let userID = this.authService.getID();
  if(!this.authService.loggedIn()){
    this.flashMessage.show('Log in to add vote', {cssClass: 'alert-success', timeout: 3000});
    return false;
  }
	if(this.validateService.alreadyVoted(comment,userID)){
	this.flashMessage.show('Already voted', {cssClass: 'alert-success', timeout: 3000});
	return false;
	}
	this.postService.addCommentVote(comment, userID).subscribe(data => {
		this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeout: 3000});
		this.postService.getPost(this.id).subscribe(post => {
       	this.post = post;
       });
	});
}
  }
