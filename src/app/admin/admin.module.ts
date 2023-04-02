import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsListComponent } from './flights-list/flights-list.component';
import { Routes,RouterModule } from '@angular/router';
import { CreateFlightComponent } from './create-flight/create-flight.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {  MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from "@angular/forms";
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AuthInterception } from '../shared/model/auth.interceptor';
import { LoginLandingPageComponent } from '../shared/login-landing-page/login-landing-page.component';
import { RegisterComponent } from '../shared/register/register.component';
import { AuthGuard } from '../shared/model/auth.guard';

const routes: Routes = [
  {
    path: 'admin',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'flights',
        component: FlightsListComponent,
      },
      {
        path: 'createFlight',
        component: CreateFlightComponent,
      },
    ],
    data: {roles:['Admin']}
    
  }]

@NgModule({
  declarations: [
    FlightsListComponent,
    CreateFlightComponent,
    LoginLandingPageComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserModule,
    FormsModule,
    MatIconModule,
    MatSortModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    RouterModule.forChild(routes)
  ],
})
export class AdminModule { }
