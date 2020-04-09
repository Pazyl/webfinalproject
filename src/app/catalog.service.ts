import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Movie} from './movie';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(private http: HttpClient) {
  }

  getFind(str: string): Observable<Movie[]> {
    console.log(str);
    return this.http.get<Movie[]>('http://localhost:3000/movies?' + str);
  }

  getAllFilms(): Observable<Movie[]> {
    return this.http.get<Movie[]>('http://localhost:3000/movies');
  }

  deleteAnime(id): Observable<Movie[]> {
    return this.http.delete<Movie[]>('http://localhost:3000/movies/' + id);
  }
}
