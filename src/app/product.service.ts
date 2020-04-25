import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Movie } from './movie';
import { Catalog } from './catalog';
import { Comment } from './comment';
import { News } from './News';

// import { MOVIES } from './mock-movies';
// import { CATALOGS } from './mock-catalogs';
// import { COMMENTS } from './mock-comments';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private path = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) { }

  getAnimes(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.path + 'catalogs/' + 1 + '/movies/');
  }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.path + 'catalogs/' + 2 + '/movies/');
  }

  getSerials(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.path + 'catalogs/' + 3 + '/movies/');
  }

  getTop100(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.path + 'movies/top_ten/');
  }

  getMostPopularAnimes(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.path + 'movies/' + 1 + '/mostPopular/');
  }
  getMostPopularMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.path + 'movies/' + 2 + '/mostPopular/');
  }
  getMostPopularSerials(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.path + 'movies/' + 3 + '/mostPopular/');
  }

  getFinishedReleases(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.path + 'movies/FinishedReleases/');
  }

  getAnimeOrMovieOrSerial(api: string, id: number): Observable<Movie> {
    return this.http.get<Movie>(this.path + 'movies/' + id + '/');
  }

  getCatalogs(): Observable<Catalog[]> {
    return this.http.get<Catalog[]>(this.path + 'catalogs/');
  }

  getCatalog(id: number): Observable<Catalog> {
    return this.http.get<Catalog>(this.path + 'catalogs/' + id + '/');
  }

  getComments(id: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.path + 'movies/' + id + '/comments/');
  }

  // changeViewCount(id: number) {
  //   return of(MOVIES.find(movie => movie.id === id));
  // }
}


// FUNCTION//

// function sortByRating(a, b) {
//   return (a.rating - b.rating);
// }
//
// function sortByViewCount(a, b) {
//   return (a.viewCount - b.viewCount);
// }
