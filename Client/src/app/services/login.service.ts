import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { User } from '../Models/user';
import { AppSettings } from '../appSettings';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  
  login(username: string, password: string) {
     return this.http.post<any>(`${AppSettings.apiUrl}login`, { username: username, password: password }, httpOptions)
       .pipe(map(user => {
        	if(user && user.token) {
            localStorage.setItem("currentUser", JSON.stringify(user));
          }
          return user;
      }));      
    
    }

    logout() {
      localStorage.removeItem("currentUser");
    }
 }