import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { MoviesService } from 'src/app/api/movies/movies.service';
import { Imovie } from 'src/app/api/movies/movie';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {
  @ViewChild('nameInput', { static: true }) inputNameRef: ElementRef;
 
  constructor(private moviesService:MoviesService) { }
  
  ngOnInit() {

    this.inputNameRef.nativeElement.setAttribute("style",`background-image:url(${this.movie.image_url});`);

 
   }
   
 
 @Input() movie:Imovie;


}
