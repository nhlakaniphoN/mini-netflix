import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/api/movies/movies.service';
import { Imovie } from 'src/app/api/movies/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
   movies:Imovie[];
  constructor(private moviesService:MoviesService) { }

  ngOnInit() {
   this.moviesService.getMovies().subscribe(movies=>this.movies=movies);

  }

}
