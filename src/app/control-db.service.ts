import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ControlDbService {

  constructor(private http: HttpClient) { }

  createUser(user: any): Observable<any> {
    return this.http.post('http://localhost:3000/users', user);
  }

  createAnime(anime: any): Observable<any> {
    return this.http.post('http://localhost:3000/movies', anime);
  }

  createComment(comment: any): Observable<any> {
    return this.http.post('http://localhost:3000/comments', comment);
  }

  getAllUsers(): Observable<any> {
    return this.http.get('http://localhost:3000/users');
  }

  getJsonComments(movieId): Observable<any> {
    return this.http.get('http://localhost:3000/comments?movieID=' + movieId);
  }

  getAllLogin(): Observable<any> {
    return this.http.get('http://localhost:3000/users');
  }

  getActivUser(id: number): Observable<any> {
    return this.http.get('http://localhost:3000/users/' + id);
  }

  updateUser(user: any) {
    return this.http.put('http://localhost:3000/users/' + user.id, user);
  }

}
