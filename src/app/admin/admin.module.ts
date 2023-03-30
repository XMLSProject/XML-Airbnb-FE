import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsListComponent } from './flights-list/flights-list.component';
import { Routes,RouterModule } from '@angular/router';
import { CreateFlightComponent } from './create-flight/create-flight.component';

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
    ]

  }]

@NgModule({
  declarations: [
    FlightsListComponent,
    CreateFlightComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
