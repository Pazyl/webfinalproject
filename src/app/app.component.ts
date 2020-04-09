import { Component, OnInit } from '@angular/core';

import { Movie } from 'src/app/movie';
import { Catalog } from 'src/app/catalog';

import { ProductService } from 'src/app/product.service';
import { SignInComponent } from './sign-in/sign-in.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ControlDbService } from './control-db.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  valueOut = false;
  valueIn = true;
  valueUp = true;

  finishedReleases: Movie[];
  catalogs: Catalog[];

  constructor(
    private productService: ProductService,
    private dialog: MatDialog,
    private router: Router,
    private auth: AuthService,
    private service: ControlDbService
  ) { }

  ngOnInit() {
    this.getFinishedReleases();
    this.getCatalogs();

    if (localStorage.getItem('userID')) {
      this.valueIn = false;
      this.valueUp = false;
      this.valueOut = true;
    }
  }

  getFinishedReleases(): void {
    this.productService.getFinishedReleases()
      .subscribe(fr => this.finishedReleases = fr.slice(0, 4));
  }

  getCatalogs(): void {
    this.productService.getCatalogs()
      .subscribe(catalogs => this.catalogs = catalogs);
  }

  signIn() {
    this.dialog.open(SignInComponent, {
      width: '350px'
    }).afterClosed().subscribe( res => {
      if (this.auth.getIsAuth()) {
        this.valueIn = false;
        this.valueUp = false;
        this.valueOut = true;
      }
    });
    this.router.navigate(['/']);
  }

  signUp() {
    this.dialog.open(SignUpComponent, {
      width: '300px'
    }).afterClosed().subscribe(res => {
     if (res !== undefined) {
       this.service.createUser(res).subscribe( result => {
         this.auth.afterSignUp();
       });
     }
    });
  }

  signOut() {
    this.auth.logout();
    if (!this.auth.getIsAuth()) {
      this.valueIn = true;
      this.valueUp = true;
      this.valueOut = false;
    }
    this.router.navigate(['/home']);
  }
}
