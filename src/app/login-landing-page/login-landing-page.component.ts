import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  registerNavigate(){
    this.router.navigate(['/register']);
  }

  logIn(){
    //Login
    //this.toastr.error("Username or password not valid!")
    //this.toastService.success("Successfully logged in!")
  }

}
