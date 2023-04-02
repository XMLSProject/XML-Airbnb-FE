import { Flight } from 'src/app/admin/flights-list/model/FlightModel';
import { FlightService } from '../service/flight.service';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


// const ELEMENT_DATA: Flight[] = [
//   {id:"1", date: "12.02.2023", time: "12:20", takingOff:"London", landing:"Belgrade", price: 1200.5, seats:300, freeSeats:43},
//   {id:"2", date: "11.02.2020", time: "22:33", takingOff:"Belgrade", landing:"Rome", price: 2000, seats:150, freeSeats:55},
//   {id:"3", date: "18.08.2022", time: "16:17", takingOff:"Istanbul", landing:"Los Angeles", price: 1500, seats:200, freeSeats:120},
//   {id:"4", date: "31.07.2023", time: "12:10", takingOff:"Paris", landing:"Novi Sad", price: 2322.4, seats:620, freeSeats:99},
//   {id:"5", date: "15.05.2023", time: "19:15", takingOff:"Bercy", landing:"Cincinati", price: 20.05, seats:900, freeSeats:1},
// ];
export interface Flights {
  id:number;
  date:Date;
  takingOff:string;
  landing:string;
  seats:number;
  freeSeats:number;
  //price: number;
}

const ELEMENT_DATA: Flights[] = [
  {id:-1, date: new Date(2023,3,31, 12,30,0), takingOff:"London", landing:"Belgrade", seats:300, freeSeats:14},
  {id: 1, date: new Date(2023,4,30, 12,20,0), takingOff:"Sydney", landing:"Tokyo", seats:545, freeSeats:57},
  {id: 2, date: new Date(2023,5,22, 11,30,0), takingOff:"Lisabon", landing:"Los Angeles", seats:600, freeSeats:122},
  {id: 3, date: new Date(2023,1,10, 15,30,0), takingOff:"Paris", landing:"Berlin", seats:120, freeSeats:0},
];

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})

export class SearchFlightComponent implements AfterViewInit, OnInit {

  displayedColumns: string[] = ['takeoff_date', 'landing_date', 'takeoff_location', 'landing_location', 'capacity', 'available_seats', 'price'];


  public dataSource = new MatTableDataSource<Flight>();
  public flight: Flight = new Flight;
  public flights: Flight[] = [];
  public selectedFlight = new Flight;
  public amountOfTickets = 0;
  public btnDisable = true;

  constructor(private _liveAnnouncer: LiveAnnouncer, private flightService: FlightService) {}

  ngOnInit(): void {
    this.showAllFlights();
    if (localStorage.getItem('role') == "User") {
      this.btnDisable = false
    }
  }

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }


  announceSortChange(sortState: Sort) { //za sortiranje
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  public showAllFlights(): void{
    this.flightService.getAllFlights().subscribe(res => {
      this.flights = res;
      this.dataSource.data = this.flights;
      console.log(this.flights);
    })
  }


  public searchFlights(): void{ //ovo znaci ako ne unesemo nista od parametara, prosledi ove vrednosti
    this.flightService.searchFlights(this.flight.date, this.flight.takingOff, this.flight.landing, this.flight.seats).subscribe(res => {
      this.flights = res;
      this.dataSource.data = this.flights;
      console.log(res);

    })
  }

  public selectFlight(flight: Flight) {
    this.selectedFlight = flight;
    console.log(this.selectedFlight)
  }

  public buyTickets(selectedFlight: Flight, amount: number) {
    const token = localStorage.getItem('token')
    localStorage.setItem('token', "" + token)
    if (selectedFlight.id == "") {
      console.log("Odaberi let")
    } else if (amount === 0) {
      console.log("Odaberi karte")
    } else {

      this.flightService.buyTickets(selectedFlight.id, amount)
    }
    window.location.reload()
  }

}

