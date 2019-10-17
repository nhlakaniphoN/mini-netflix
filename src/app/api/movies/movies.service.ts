import { Injectable } from '@angular/core';
import {MOVIES} from './mock-movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }

  getMovies(){

    return MOVIES;
    
  }
}
