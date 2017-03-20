import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class PostService {

  constructor(private http: Http) { }
  
 getPosts(){ 
  return this.http.get('home').map(res => res.json());
 }
 addPost(newPost){
 let headers = new Headers();
 headers.append('Content-Type', 'application/json');
 return this.http.post('newpost', newPost, {headers: headers}).map(res => res.json());
 }	
 addLink(newLink){
 let headers = new Headers();
 headers.append('Content-Type', 'application/json');
 return this.http.post('newpost', newLink, {headers: headers}).map(res => res.json()); 
 }
 deletePost(id){
 let headers = new Headers();
 headers.append('Content-Type', 'application/json');
 return this.http.delete('delete/'+id).map(res => res.json());
 }
 addVote(post, userID){
 const user = {
 id: userID
 }
 let headers = new Headers();
 headers.append('Content-Type', 'application/json');
 return this.http.post('upvote/'+post._id, user, {headers: headers}).map(res => res.json());
 }
 removeVote(post, userID){
 const user = {
 id: userID
 } 
 let headers = new Headers();
 headers.append('Content-Type', 'application/json');
 return this.http.post('downvote/'+post._id, user, {headers: headers}).map(res => res.json());
 }
 getPost(id){
 let headers = new Headers();
 headers.append('Content-Type', 'application/json');
 return this.http.get('post/'+id).map(res => res.json());
 }
 postComment(comment, id){
 let headers = new Headers();
 headers.append('Content-Type', 'application/json');
 return this.http.post('post/'+id, comment, {headers: headers}).map(res => res.json());
 }
 
 removeCommentVote(comment, userID){
 const id = {
 	voterID: userID
 }
 let headers = new Headers();
 headers.append('Content-Type', 'application/json');
 return this.http.post('commentdown/'+comment._id, id, {headers: headers}).map(res => res.json());
 }
 
 addCommentVote(comment, userID){
 const id = {
 	voterID: userID
 }
 let headers = new Headers();
 headers.append('Content-Type', 'application/json');
 return this.http.post('commentup/'+comment._id, id, {headers: headers}).map(res => res.json());
 }
}