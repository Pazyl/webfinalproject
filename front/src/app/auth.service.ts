import { Injectable } from '@angular/core';
import { ControlDbService } from './control-db.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuth = false;
  private users = [];
  private admin = false;

  constructor(private control_service: ControlDbService, private router: Router) {
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

  getAdmin() {
    return this.admin;
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
        if (this.users[i].roleID === 100) {
          this.admin = true;
        }
        return true;
      }
    }
    return false;
  }
}
