import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  status = false;
  form: FormGroup;
  constructor(private dialog: MatDialogRef<SignInComponent>, private formBuilder: FormBuilder, private auth: AuthService) {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  login() {
    if (this.auth.login(this.form.getRawValue().username, this.form.getRawValue().password)) {
      this.status = false;
      this.dialog.close();
    } else {
      this.status = true;
    }
  }

}
