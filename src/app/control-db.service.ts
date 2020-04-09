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

  getAllUsers(): Observable<any> {
    return this.http.get('http://localhost:3000/users');
  }

  getAllLogin(): Observable<any> {
    return this.http.get('http://localhost:3000/users');
  }

  getActivUser(id: number): Observable<any> {
    return this.http.get('http://localhost:3000/users/' + id);
  }
}
