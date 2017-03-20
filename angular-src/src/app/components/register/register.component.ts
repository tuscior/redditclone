import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router'
import {ValidateService} from '../../services/validate.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
username: String;
password: String;
email: String;
  constructor(private authService: AuthService, private router: Router, private flashMessage: FlashMessagesService, private validateService: ValidateService) { }

  ngOnInit() {
  }
 onRegisterSubmit(){
 const user = {
	username: this.username,
	email: this.email,
	password: this.password
 }
 if(!this.validateService.validateRegister(user)){
	this.flashMessage.show("Please fill all fields", {cssClass: 'alert-danger', timeout: 3000})
	return false;
}
if(!this.validateService.validateEmail(user.email)){
	this.flashMessage.show("Please fill email properly", {cssClass: 'alert-danger', timeout: 3000})
	return false;
}
 this.authService.registerUser(user).subscribe(data => {
	if(data.success){
	this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeout: 2000});
	this.router.navigate(['/']);
	}else {
	this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout: 2000});
	this.router.navigate(['/register']);
	}
});
} 

}
