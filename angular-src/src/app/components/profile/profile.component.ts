import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {PostService} from '../../services/post.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
title: string;
link: string;
upvotes: number;
id: number;
posts: any;
profile: Array<String>;
profilePosts: Array<String>;

  constructor(private authService: AuthService, private postService: PostService, private flashMessage: FlashMessagesService, private router: Router) { }

  ngOnInit() {
  this.authService.getProfile().subscribe(data => {
  this.profile = data;
  });
  }
onDeleteClick(id){
  this.postService.deletePost(id).subscribe(data => {
  if(data.success){
    this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeout: 3000});
    this.router.navigate(['/']);
    }
    else{
    this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout: 3000});
    this.router.navigate(['/']);
    }
  });
}

}
