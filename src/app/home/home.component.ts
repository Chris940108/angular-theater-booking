import { Component, inject } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Genre, Movie, Movies, MovieSchedule} from '../description';
import { TheatersService } from '../theaters.service';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  movies: Movies[] = [];
  selectedMovie?: Movies;
  actionInfo!: Genre;
  thrillerInfo!: Genre;

  constructor(
    private moviesService: MoviesService, 
    private theatersService: TheatersService
  ){}


  ngOnInit():void{
  this.actionInfo = this.moviesService.actionCard();
  this.thrillerInfo = this.moviesService.thrillerCard();
  this.movies = this.theatersService.getMovies();
  }

  bookingForm(title: String): void {
    this.selectedMovie = this.movies.find((movie) => movie.title === title);
    if (this.selectedMovie) {
      this.theatersService.selectMovie(this.selectedMovie); 
    }
  }

}
