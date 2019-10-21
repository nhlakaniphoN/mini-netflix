import { Injectable } from '@angular/core';
import {MOVIES} from './mock-movies';
import { Observable, of } from 'rxjs';
import { Imovie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }

  getMovies():Observable<Imovie[]>{

    return of(MOVIES);
    
  }
}
