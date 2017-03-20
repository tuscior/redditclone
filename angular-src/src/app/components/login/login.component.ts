import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ValidateService } from '../../services/validate.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username: string;
password: string;
  constructor(private authService: AuthService, private validateService: ValidateService, private flashMessage: FlashMessagesService, private router: Router) { }

  ngOnInit() {
  }
onLoginSubmit(){  
const user = {
	username: this.username,
	password: this.password
}

this.authService.authenticateUser(user).subscribe(data => {
	if(data.success){
		this.authService.storeData(data.token, data.user);
		this.flashMessage.show('You are logged in', {cssClass: 'alert-success', timeout: 3000});
		this.router.navigate(['/']);
	}
	else {
		this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout: 3000});
		this.router.navigate(['login']);
	}
});
}

}
