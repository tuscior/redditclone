import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {PostService} from '../../services/post.service';
import { AuthService } from '../../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {ValidateService} from '../../services/validate.service';

@Component({
  selector: 'app-addlink',
  templateUrl: './addlink.component.html',
  styleUrls: ['./addlink.component.css']
})
export class AddlinkComponent implements OnInit {
link: string;
title: string;
user: string;
author: string;
  constructor(private router: Router, private postService: PostService, private authService: AuthService, private flashMessage: FlashMessagesService, private validateService: ValidateService) { }

  ngOnInit() {
  }
 addLink(){
  if(!this.authService.loggedIn()){
    this.flashMessage.show('Log in to add link', {cssClass: 'alert-success', timeout: 3000});
    return false;
  }
 this.author = this.authService.getUsername();
 this.user = this.authService.getID();
 const link = {
 	title: this.title,
 	link: this.link,
 	authorId: this.user,
  user: this.author
 }
 	if(!this.validateService.validateLink(link)){
 	this.flashMessage.show("Please fill all the field", {cssClass: 'alert-danger', timeout: 3000})
	return false;
 	}
  	this.postService.addLink(link).subscribe(data => {
	if(data.success){
 		 this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeout: 2000});
  		 this.router.navigate(['/']);
  	}
  else {
  		this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout: 2000});
  		this.router.navigate(['/newlink']);
  }
  	});
  	this.link = "";
  	this.title = "";
 } 

}
