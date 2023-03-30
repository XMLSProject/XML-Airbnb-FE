import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-landing-page',
  templateUrl: './login-landing-page.component.html',
  styleUrls: ['./login-landing-page.component.css']
})
export class LoginLandingPageComponent {


  public Email: string = "";
  public Password: string = "";


  logIn(){
    //Login
    //this.toastr.error("Username or password not valid!")
    //this.toastService.success("Successfully logged in!")
  }

}
