import { Flight } from './../admin/flights-list/model/FlightModel';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  apiHost: string = "http://localhost:8081/";
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getAllFlights(): Observable<Flight[]> {
    return this.http.get<Flight[]>(this.apiHost + 'all-flights', {headers: this.headers});
  }

  searchFlights(takeOffDate: any = "", takeOff: string = "", destination: string = "", numberOfPassengers: number = 0): Observable<Flight[]> {
    return this.http.get<Flight[]>(this.apiHost + "search", {params: new HttpParams().set('takeoffDate', takeOffDate).set('takeoffLocation', takeOff).set('landingLocation', destination)
    .set('passengerCount', numberOfPassengers)});
  }

}
