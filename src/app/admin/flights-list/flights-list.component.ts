import { ImageLoader } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { FlightsService } from '../service/flights.service';
import { IListFlight } from './model/IListFlight';

@Component({
  selector: 'app-flights-list',
  templateUrl: './flights-list.component.html',
  styleUrls: ['./flights-list.component.css']
})
export class FlightsListComponent {

constructor(private router: Router,private flightService:FlightsService) {}

testFlight:IListFlight = {id:-1,date: new Date(2023,3,30,12,30,0),takingOff:"London",landing:"Belgrade",prize:200,
seats:300,freeSeats:14}
Flights:IListFlight[] = [this.testFlight];
public selectedFlight:IListFlight = <IListFlight>{};
public selectedIndex:number = -1;

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
    //if(this.selectedIndex != -1)
    //service.deleteFlight(this.selectedFlight.id);
  }

  createFlight(){
    this.router.navigate(["/admin/createFlight"])
  }

}
