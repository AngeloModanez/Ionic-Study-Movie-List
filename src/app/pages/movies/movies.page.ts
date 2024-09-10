import { Component, OnInit } from '@angular/core';
import { ItemReorderEventDetail } from '@ionic/angular';
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

  handleReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);
    ev.detail.complete();
  }
}
