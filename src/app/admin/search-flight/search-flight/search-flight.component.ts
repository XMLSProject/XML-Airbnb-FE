import { MatFormFieldModule } from '@angular/material/form-field';
import { Component } from '@angular/core';

export interface SearchFlightList {
  id:number;
  date:Date;
  takingOff:string;
  landing:string;
  seats:number;
  freeSeats:number;
  //price: number;
}

const ELEMENT_DATA: SearchFlightList[] = [
  {id:-1, date: new Date(2023,3,31, 12,30,0), takingOff:"London", landing:"Belgrade", seats:300, freeSeats:14},
  {id: 1, date: new Date(2023,4,30, 12,30,0), takingOff:"Sydney", landing:"Tokyo", seats:545, freeSeats:57},
  {id: 2, date: new Date(2023,5,22, 12,30,0), takingOff:"Lisabon", landing:"Los Angeles", seats:600, freeSeats:122},
  {id: 3, date: new Date(2023,1,10, 12,30,0), takingOff:"Paris", landing:"Berlin", seats:120, freeSeats:0},
];

@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.css']
})

export class SearchFlightComponent {
  searchDate: string = "";
  searchFrom: string = "";
  searchDestination: string = "";
  searchNumberPassengers: number = 0;


  displayedColumns: string[] = ['Date', 'Time', 'From', 'Destination', 'Seats', 'Free'];
  dataSource = ELEMENT_DATA;


  validateDate(input: string){
    const result = input.search(this.searchDate)
    console.log(result);
  }
}





