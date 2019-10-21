import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from 'src/app/api/movies/movies.service';
import { Imovie } from 'src/app/api/movies/movie';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {

 
  constructor(private moviesService:MoviesService) { }
  
  ngOnInit() {
   
 
   }
 
 @Input() movie:Imovie;

}
