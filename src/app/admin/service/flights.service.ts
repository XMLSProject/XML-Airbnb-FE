import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IFlightToCreate } from '../flights-list/model/IFlightToCreate';
import { Observable, map } from 'rxjs';
import { IListFlight } from '../flights-list/model/IListFlight';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  constructor(private http: HttpClient) { }
  apiHost: string = 'http://localhost:8081/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  createFlight(flight: IFlightToCreate) {
    this.http.post(this.apiHost + 'flights', flight, { headers: this.headers }).subscribe((data) => {
      console.log(data)
    })
  }



  getFlights(): Observable<IListFlight[]> {
    return this.http.get<IListFlight[]>(this.apiHost + 'all-flights', { headers: this.headers }).pipe(
      map(data => data as IListFlight[])
    );
  }

  deleteFlight(id: number) {
    
    this.http.delete(this.apiHost + 'flights/' + id, { headers:this.headers }) .subscribe((data) => {
    });
    
  }

}
