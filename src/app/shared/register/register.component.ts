import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { LoginRegisterService } from '../service/login-register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private router: Router,private loginRegisterService:LoginRegisterService) {}
  
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
  
  public register(){
      const user:User = 
      {
      name :"" + this.registerForm.get('name')?.value ,
      surname :"" + this.registerForm?.get('surname')?.value,
      username :"" + this.registerForm?.get('username')?.value,
      password :"" + this.registerForm?.get('password')?.value ,
      email :"" + this.registerForm?.get('email')?.value
      } 
      this.loginRegisterService.register(user)
  }

  redirectToLogin(){
    this.router.navigate(['/']);
  }

}
