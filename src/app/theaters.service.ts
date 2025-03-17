import { Injectable } from '@angular/core';
import { Movies, MovieSchedule } from './description';
import { BehaviorSubject } from 'rxjs';
import data from '../assets/data/theaters.json'

@Injectable({
  providedIn: 'root'
})
export class TheatersService {

  private movieTheaterData!: MovieSchedule;

  constructor() {
    this.movieTheaterData = data.movieSchedule;
  }

  getMovies() {
    return this.movieTheaterData.movies;
  }

  private selectedMovieSubject = new BehaviorSubject<Movies | undefined>(undefined); 
  selectedMovie$ = this.selectedMovieSubject.asObservable();

  selectMovie(movie: Movies): void {
    this.selectedMovieSubject.next(movie);
  }

}

