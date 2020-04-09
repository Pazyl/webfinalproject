import { Component, OnInit } from '@angular/core';

import { Movie } from 'src/app/movie';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  animes: Movie[];
  movies: Movie[];
  serials: Movie[];
  index1 = 0;
  index2 = 4;
  lenght1;
  lenght2;
  lenght3;

  index12 = 0;
  index22 = 4;

  index13 = 0;
  index23 = 4;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.getAnimes();
    this.getMovies();
    this.getSerials();
  }

  getAnimes(): void {
    this.productService.getAnimes()
      .subscribe(animes => this.animes = animes);
    this.lenght1 = this.animes.length;
  }

  getMovies(): void {
    this.productService.getMovies()
      .subscribe(movies => this.movies = movies);
    this.lenght2 = this.movies.length;
  }

  getSerials(): void {
    this.productService.getSerials()
      .subscribe(serials => this.serials = serials);
    this.lenght3 = this.serials.length;
  }

  plus(n, m): void {
    if (this.index2 < this.lenght1) {
      this.index1 = n + 1;
      this.index2 = m + 1;
    }
  }

  minus(n, m): void {
    if (this.index1 > 0) {
      this.index1 = n - 1;
      this.index2 = m - 1;
    }
  }

  plus2(n, m): void {
    if (this.index22 < this.lenght2) {
      this.index12 = n + 1;
      this.index22 = m + 1;
    }
  }
  minus2(n, m): void {
    if (this.index12 > 0) {
      this.index12 = n - 1;
      this.index22 = m - 1;
    }
  }

  plus3(n, m): void {
    if (this.index23 < this.lenght3) {
      this.index13 = n + 1;
      this.index23 = m + 1;
    }
  }
  minus3(n, m): void {
    if (this.index13 > 0) {
      this.index13 = n - 1;
      this.index23 = m - 1;
    }
  }
}

