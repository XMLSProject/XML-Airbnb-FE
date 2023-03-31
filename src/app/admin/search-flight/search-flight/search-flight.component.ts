import {LiveAnnouncer} from '@angular/cdk/a11y';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

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
  {id: 1, date: new Date(2023,4,30, 12,20,0), takingOff:"Sydney", landing:"Tokyo", seats:545, freeSeats:57},
  {id: 2, date: new Date(2023,5,22, 11,30,0), takingOff:"Lisabon", landing:"Los Angeles", seats:600, freeSeats:122},
  {id: 3, date: new Date(2023,1,10, 15,30,0), takingOff:"Paris", landing:"Berlin", seats:120, freeSeats:0},
];

@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.css']
})

export class SearchFlightComponent implements AfterViewInit {

  searchFlights: string = "";
  displayedColumns: string[] = ['date', 'time', 'takingOff', 'landing', 'seats', 'freeSeats'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  validateSearch(input: string){
    const result = input.search(this.searchFlights)
    console.log(result);
  }


  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }



}

