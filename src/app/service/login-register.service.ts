import { Injectable } from '@angular/core';
import { catchError, EMPTY, Observable } from 'rxjs';
import { LoggedIn } from '../model/logged-in';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class LoginRegisterService {
  toastService: any;
  errorMessage?: string;
  validForm?: boolean;

 
  constructor(private http: HttpClient) { }
  apiHost: string = 'http://localhost:8081/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch(Error) {
      return null;
    }
  }
  login(login: LoggedIn) {
    this.http.post(this.apiHost + 'login', login, { headers:this.headers }) .subscribe((data) => {
      localStorage.setItem("token",data.toString())
      const tokenInfo = this.getDecodedAccessToken(data.toString())
    });
    
    // return this.http.post<LoggedIn>(this.apiHost + '/login', login, { headers: this.headers });
  }
}
