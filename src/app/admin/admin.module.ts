import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsListComponent } from './flights-list/flights-list.component';
import { Routes,RouterModule } from '@angular/router';
import { CreateFlightComponent } from './create-flight/create-flight.component';
import { SearchFlightComponent } from './search-flight/search-flight/search-flight.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from "@angular/forms";

const routes: Routes = [
  {
    path: 'admin',
    children: [
      {
        path: 'flights',
        component: FlightsListComponent,
      },
      {
        path: 'createFlight',
        component: CreateFlightComponent,
      },
      {
        path: 'searchFlight',
        component: SearchFlightComponent
      },
    ],
    
  }]

@NgModule({
  declarations: [
    FlightsListComponent,
    CreateFlightComponent,
    SearchFlightComponent,
    SearchFlightComponent
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
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
