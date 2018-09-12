import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { AppSettings } from '../appSettings';
import { Movie } from '../Models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(
    private http: HttpClient
  ) { }

  getAllMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(AppSettings.apiUrl+'movies')
  } 

  getMovieById(id:number): Observable<Movie> {
    return this.http.get<Movie>(AppSettings.apiUrl+`movie${id}`)
  }
}
