import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs'

import { User } from '../Models/user';
import { AppSettings } from '../appSettings';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
  ) { }
  

  getCurrentUser(): Observable<User> {
    return this.http.get<User>(AppSettings.apiUrl+"user")
    //.pipe(catchError(this.handleError('', {}) //implement an error handler
  }

  register(user: User) {
    return this.http.post(`${AppSettings.apiUrl}users/`+user.id, user);
  }
  
  /* error handerl
  private handleError(???)
  */
}