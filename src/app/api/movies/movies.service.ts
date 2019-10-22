import { Injectable } from '@angular/core';
import {MOVIES} from './mock-movies';
import { Observable, of } from 'rxjs';
import { Imovie } from './movie';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
let query=gql`{
  movies{
     id
     title
     image_url
     year
     details{
         title
         revenue
         genres{
                 id
                 name
          }
         
     }
  }
}`;

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private apolo:Apollo) { }

  getMovies():Observable<any>{

    return this.apolo.watchQuery({query}).valueChanges;
    
  }
}
