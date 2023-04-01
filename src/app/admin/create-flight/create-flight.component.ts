import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IFlightToCreate } from '../flights-list/model/IFlightToCreate';
import { FlightsService } from '../service/flights.service';

@Component({
  selector: 'app-create-flight',
  templateUrl: './create-flight.component.html',
  styleUrls: ['./create-flight.component.css']
})
export class CreateFlightComponent {
  
  constructor(private router:Router, private flightsService: FlightsService){}

  public selectedDate:Date = new Date();
  public disebleDateAndTime:boolean = true;
  public selectedTime:string = '';
  
  createFlightForm = new FormGroup({
    takeoff: new FormControl('', [
       Validators.required,Validators.pattern('^[a-zA-Z ]+$')
     ]),
    landing: new FormControl('', [
       Validators.required,Validators.pattern('^[a-zA-Z ]+$')]),
     price: new FormControl('', [
       Validators.required,Validators.min(1),Validators.max(100)
     ]),
     capacity: new FormControl('', [
       Validators.required,Validators.min(1),Validators.max(100)
     ]),
    
  });

  lostFoucs(){
    if(this.selectedTime != '')
      this.disebleDateAndTime = false;
  }

  createFlight(){
    const [hours, minutes] = this.selectedTime.split(":").map(Number)
    const newDate = new Date(this.selectedDate);
    newDate.setHours(hours)
    newDate.setMinutes(minutes)

    const flightToCreate: IFlightToCreate = {
      takeoff_date: newDate,
      takeoff_location: "" + this.createFlightForm.get('takeoff')?.value,
      landing_location: "" + this.createFlightForm.get('landing')?.value,
      price: parseFloat("" + this.createFlightForm.get('price')?.value),
      capacity: parseInt("" + this.createFlightForm.get('capacity')?.value, 10)
    };

    this.flightsService.createFlight(flightToCreate)

    
  }

  redirectToFlights(){
    this.router.navigate(['/admin/flights']);
  }
}
