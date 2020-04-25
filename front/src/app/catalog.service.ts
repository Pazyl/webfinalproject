import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Movie} from './movie';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  private path = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) {
  }

  getFind(str: string): Observable<Movie[]> {
    console.log(str);
    return this.http.get<Movie[]>(this.path + 'movies?' + str);
  }

  getAllFilms(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.path + 'movies');
  }

  deleteAnime(id): Observable<Movie[]> {
    return this.http.delete<Movie[]>(this.path + 'movies/' + id + '/');
  }
}
