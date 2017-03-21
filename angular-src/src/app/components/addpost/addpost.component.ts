import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {PostService} from '../../services/post.service';
import { AuthService } from '../../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {ValidateService} from '../../services/validate.service';



@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {

  constructor(private router: Router, private postService: PostService, private authService: AuthService, private flashMessage: FlashMessagesService, private validateService: ValidateService) { }
title: string;
content: string;
posts: any;
user: string;
textAreaValue: string;
author: string;
  ngOnInit() {
  }
addPost(){
  if(!this.authService.loggedIn()){
    this.flashMessage.show('Log in to add post', {cssClass: 'alert-success', timeout: 3000});
    return false;
  }
  this.user = this.authService.getID();
  this.author = this.authService.getUsername();
  const post = {
  title: this.title,
  content: this.textAreaValue,
  authorId: this.user,
  user: this.author
  }
  if(!this.validateService.validatePost(post)){
  this.flashMessage.show("Please fill all the field", {cssClass: 'alert-danger', timeout: 3000})
  return false;
  }
	this.postService.addPost(post).subscribe(data => {
	if(data.success){
  this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeout: 2000});
  this.router.navigate(['/']);
  }else {
  this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout: 2000});
  this.router.navigate(['/newpost']);
  }
	});

this.title = "";
this.textAreaValue = "";
}
doTextAreaValueChange(ev){
	this.textAreaValue = ev.target.value;
}

}
