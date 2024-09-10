import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.page.html',
  styleUrls: ['./movies-details.page.scss'],
})
export class MoviesDetailsPage implements OnInit {
  isModalOpen = false;

  movie: Movie = {} as Movie;

  constructor(private service: MovieService,
    private ActivatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const id = this.ActivatedRoute.snapshot.params['id'];

    if (id) {
      this.service.getMovieById(id).subscribe({
        next: movie => this.movie = movie
      })
    }
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

}
