import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Movie } from './movie';
import { Catalog } from './catalog';
import { Comment } from './comment';

import { MOVIES } from './mock-movies';
import { CATALOGS } from './mock-catalogs';
import { COMMENTS } from './mock-comments';

@Injectable({ providedIn: 'root' })
export class ProductService {

  constructor() { }

  getAnimes(): Observable<Movie[]> {
    return of(MOVIES.filter(anime => anime.catalogType === 'anime'));
  }
  getMovies(): Observable<Movie[]> {
    return of(MOVIES.filter(movie => movie.catalogType === 'movies'));
  }
  getSerials(): Observable<Movie[]> {
    return of(MOVIES.filter(serial => serial.catalogType === 'serials'));
  }

  getTop100(): Observable<Movie[]> {
    return of(MOVIES.sort(sortByRating).reverse());
  }

  getMostPopularAnimes(): Observable<Movie[]> {
    return of(MOVIES.filter(popularAnimes => popularAnimes.catalogType === 'anime').sort(sortByRating).reverse().slice(0, 10));
  }
  getMostPopularMovies(): Observable<Movie[]> {
    return of(MOVIES.filter(popularAnimes => popularAnimes.catalogType === 'movies').sort(sortByRating).reverse().slice(0, 10));
  }
  getMostPopularSerials(): Observable<Movie[]> {
    return of(MOVIES.filter(popularAnimes => popularAnimes.catalogType === 'serials').sort(sortByRating).reverse().slice(0, 10));
  }

  getFinishedReleases(): Observable<Movie[]> {
    return of(MOVIES.filter(finishedReleases => finishedReleases.status === 'Завершен').sort(sortByViewCount).reverse());
  }

  getAnimeOrMovieOrSerial(api: string, id: number): Observable<Movie> {
      return of(MOVIES.find(anime => anime.id === id && anime.catalogType === api));
  }

  getCatalogs(): Observable<Catalog[]> {
    return of(CATALOGS);
  }

  getCatalog(id: number): Observable<Catalog> {
    return of(CATALOGS.find(catalog => catalog.id === id));
  }

  getComments(id: number): Observable<Comment[]> {
    return of(COMMENTS.filter(comment => comment.movieID === id));
  }

  changeViewCount(id: number) {
    return of(MOVIES.find(movie => movie.id === id));
  }
}


// FUNCTION//

function sortByRating(a, b) {
  return (a.rating - b.rating);
}

function sortByViewCount(a, b) {
  return (a.viewCount - b.viewCount);
}
