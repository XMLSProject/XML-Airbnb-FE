import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-flight',
  templateUrl: './create-flight.component.html',
  styleUrls: ['./create-flight.component.css']
})
export class CreateFlightComponent {
  
  constructor(private router:Router){}

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

  }

  redirectToFlights(){
    this.router.navigate(['/admin/flights']);
  }
}
