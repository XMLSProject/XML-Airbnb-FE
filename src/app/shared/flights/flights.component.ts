import { Flight } from 'src/app/admin/flights-list/model/FlightModel';
import { FlightService } from '../service/flight.service';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';



@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})

export class SearchFlightComponent implements AfterViewInit, OnInit {

  displayedColumns: string[] = ['takeoff_date', 'takeoff_time', 'takeoff_location', 'landing_location', 'capacity', 'available_seats', 'price'];


  public dataSource = new MatTableDataSource<Flight>();
  public flight: Flight = new Flight;
  public flights: Flight[] = [];

  constructor(private _liveAnnouncer: LiveAnnouncer, private flightService: FlightService) {}

  ngOnInit(): void {
    this.showAllFlights();
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
      console.log(this.flight.date);

    })
  }

  

  





}

