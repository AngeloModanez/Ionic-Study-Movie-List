import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  movies: Movie[] = [];

  constructor(private service: MovieService) { }

  ngOnInit() {
    this.loadMovies();
  }

  loadMovies() {
    this.service.getMovies().subscribe({
      next: movies => this.movies = movies
    });
  }
}
