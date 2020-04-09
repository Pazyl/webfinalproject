import { Component, OnInit } from '@angular/core';

import { Movie } from 'src/app/movie';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Movie[];
  popularMovies: Movie[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getMovies();
    this.getMostPopularMovies();
  }

  getMovies(): void {
    this.productService.getMovies()
      .subscribe(movies => this.movies = movies);
  }

  getMostPopularMovies(): void {
    this.productService.getMostPopularMovies()
      .subscribe(popularMovies => this.popularMovies = popularMovies);
  }
}
