import { Injectable } from '@angular/core';
import { ControlDbService } from './control-db.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuth = false;
  private users = [];

  constructor(private control_service: ControlDbService) {
    this.control_service.getAllUsers().subscribe(res => {
      this.users = res;
    });
  }

  afterSignUp() {
    this.control_service.getAllUsers().subscribe(res => {
      this.users = res;
    });
  }

  getIsAuth() {
    if (this.isAuth) {
      return true;
    }  else {
      return false;
    }
  }

  logout() {
    this.isAuth = false;
    localStorage.removeItem('userID');
  }

  login(username, password) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].username === username && this.users[i].password === password) {
        this.isAuth = true;
        localStorage.setItem('userID', this.users[i].id);
        return true;
      }
    }
    return false;
  }
}
