import { Injectable } from '@angular/core';
import { Genre, Movie } from './description';
import data from '../assets/data/movie.json';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private actionData!: Genre;
  private thrillerData!: Genre;

  constructor() { }

  actionCard(): Genre {
    this.actionData = data.action;
    this.actionData.movies = data.action.movies;
    return this.actionData;
  }

  thrillerCard(): Genre {
    this.thrillerData = data.thriller;
    this.thrillerData.movies = data.thriller.movies;
    return this.thrillerData;
  }
}
