import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginLandingPageComponent } from './shared/login-landing-page/login-landing-page.component';
import { RegisterComponent } from './shared/register/register.component';
import { FlightsComponent } from './shared/flights/flights.component';

const routes: Routes = [
  { path: '', component: LoginLandingPageComponent },
  { path: 'login', component: LoginLandingPageComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'flights', component: FlightsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
