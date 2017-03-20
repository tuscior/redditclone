import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PostService } from './services/post.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {FlashMessagesModule} from 'angular2-flash-messages';
import { AddpostComponent } from './components/addpost/addpost.component';
import { AddlinkComponent } from './components/addlink/addlink.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {AuthService} from './services/auth.service';
import {ValidateService} from './services/validate.service';
import { ProfileComponent } from './components/profile/profile.component';
import { PostComponent } from './components/post/post.component';

const appRoutes: Routes = [
{path: '', component: HomeComponent},
{path: 'post/:id', component: PostComponent},
{path: 'newpost', component: AddpostComponent},
{path: 'register', component: RegisterComponent},
{path: 'login', component: LoginComponent},
{path: 'profile', component: ProfileComponent},
{path: 'newlink', component: AddlinkComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddpostComponent,
    AddlinkComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
    ProfileComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule
  ],
  providers: [PostService, AuthService, ValidateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
