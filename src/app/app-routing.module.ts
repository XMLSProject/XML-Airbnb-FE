import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginLandingPageComponent } from './login-landing-page/login-landing-page.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component: LoginLandingPageComponent },
  { path: 'login', component: LoginLandingPageComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
