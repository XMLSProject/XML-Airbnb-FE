import { ImageLoader } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightsService } from '../service/flights.service';
import { IListFlight } from './model/IListFlight';

@Component({
  selector: 'app-flights-list',
  templateUrl: './flights-list.component.html',
  styleUrls: ['./flights-list.component.css']
})
export class FlightsListComponent implements OnInit{

constructor(private router: Router,private flightService:FlightsService) {}

Flights:IListFlight[] = [];
public selectedFlight:IListFlight = <IListFlight>{};
public selectedIndex:number = -1;


ngOnInit(): void {
  this.flightService.getFlights().subscribe((flights) => {
    this.Flights = flights; // prints the list of flights to the console
    this.Flights.forEach(flight => {
      flight.takeoff_date = new Date(Date.parse(flight.takeoff_date.toString()))
    });
  });
}

select(flight:IListFlight,ind:number){
  this.selectedFlight = flight;
  this.selectedIndex = ind;
}

@HostListener('click', ['$event'])
  onDivClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const cursorStyle = getComputedStyle(target).getPropertyValue('cursor');
  if (cursorStyle != 'pointer')
    this.selectedIndex = -1;
  }

  deleteFlight(){
    if(this.selectedIndex != -1)
      this.flightService.deleteFlight(this.selectedFlight.id);
    this.ngOnInit();
    
    
  }

  createFlight(){
    this.router.navigate(["/admin/createFlight"])
  }

}
