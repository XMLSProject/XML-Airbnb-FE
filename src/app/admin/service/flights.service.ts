import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IFlightToCreate } from '../flights-list/model/IFlightToCreate';

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

}
