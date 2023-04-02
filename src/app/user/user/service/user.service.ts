import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../model/ticket';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiHost: string = "http://localhost:8081/";
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
constructor(private http: HttpClient) { }

getUserTickets(): Observable<Ticket[]> {
  return this.http.get<Ticket[]>(this.apiHost + "my-tickets", { headers: this.headers})
}

}
