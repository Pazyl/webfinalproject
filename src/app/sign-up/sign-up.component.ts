import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ControlDbService} from "../control-db.service";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  form: FormGroup;
  status = false;
  statusLogin = false;
  statusEmpty = false;
  usersLogin = [];
  constructor(private dialog: MatDialogRef<SignUpComponent>, private formB: FormBuilder, private service: ControlDbService) {
    this.form = this.formB.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      password2: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  checkLogin(username) {
    this.service.getAllLogin().subscribe(res => {
      this.usersLogin = res;
    });

    for (let i = 0; i < this.usersLogin.length; i++) {
      if (username === this.usersLogin[i].username) {
        return true;
      }
    }
    return false;
  }

  createUser() {
    if (this.form.getRawValue().username === '') {
      this.statusEmpty = true;
    } else {
      this.statusEmpty = false;
    }

    if (this.checkLogin(this.form.getRawValue().username)) {
      this.statusLogin = true;
    } else {
      this.statusLogin = false;
    }

    if (this.form.getRawValue().password === this.form.getRawValue().password2 &&
      this.form.getRawValue().password !== '' &&
      this.form.getRawValue().password2 !== '') {
     this.status = false;
    } else {
      this.status = true;
    }

    if (this.status === false && this.statusLogin === false && this.statusEmpty === false) {
      let user = {"username": this.form.getRawValue().username, "password": this.form.getRawValue().password};
      this.dialog.close(user);
      this.status = false;
    }
  }

}
