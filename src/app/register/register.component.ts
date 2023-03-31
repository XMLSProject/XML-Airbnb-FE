import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRegisterService } from '../service/login-register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(loginRegisterService:LoginRegisterService,private router:Router){}
  
  registerForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,Validators.pattern('^[A-Z][a-zA-Z ]+$')
    ]),
    surname: new FormControl('', [
      Validators.required,Validators.pattern('^[A-Z][a-zA-Z ]+$')
    ]),
    username: new FormControl('', [
      Validators.required,Validators.pattern('^[a-zA-Z0-9.]*$')
    ]),
    password: new FormControl('', [
      Validators.required,Validators.pattern('^[a-zA-Z0-9@$!@%^&*() ]{4,}$')
    ]),
    email: new FormControl('', [
      Validators.required,Validators.email
    ])
  });

  register(){
    //console.log(this.registerForm.get('name')?.value);
    // loginRegisterService.registerUser(
      // this.registerForm.get('name')?.value,
      // this.registerForm.get('surname')?.value,
      // this.registerForm.get('username')?.value,
      // this.registerForm.get('password')?.value,
      // this.registerForm.get('email')?.value
    // )
  }

  redirectToLogin(){
    this.router.navigate(['/']);
  }

}
