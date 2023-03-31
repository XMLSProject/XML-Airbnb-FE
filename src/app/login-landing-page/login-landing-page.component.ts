import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, EMPTY } from 'rxjs';
import { LoggedIn } from '../model/logged-in';
import { LoginRegisterService } from '../service/login-register.service';

@Component({
  selector: 'app-login-landing-page',
  templateUrl: './login-landing-page.component.html',
  styleUrls: ['./login-landing-page.component.css']
})
export class LoginLandingPageComponent {

  constructor(private router: Router,private loginRegisterService:LoginRegisterService) {}

  public Username: string = "";
  public Password: string = "";
  public lgd:LoggedIn = {
    username: this.Username,
    password: this.Password
  }

  registerNavigate(){
    this.router.navigate(['/register']);
  }

  public logIn(){
   this.loginRegisterService.login(this.lgd)
  }
  updateData() {
    throw new Error('Method not implemented.');
  }

}
