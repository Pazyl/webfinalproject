import {Component, Input, OnInit} from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Movie } from '../movie';
import { Catalog } from '../catalog';
import { Comment } from '../comment';
import { ProductService } from '../product.service';
import {User} from '../Objects/user';
import {ControlDbService} from '../control-db.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  @Input() profile: Movie;
  allMovies: Movie[];

  getAllMovies(): void {
    this.productService.getTop100()
      .subscribe(ms => this.allMovies = ms);
  }

  zaktadki: Movie[] = [];
  trueZakladki = false;

  likes: Movie[] = [];
  trueLikes = false;

  activUser: number = parseInt(localStorage.getItem('userID'));
  user: User;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location,
    private service: ControlDbService,
  ) {
  }

  ngOnInit(): void {
    this.setUserInfo();
    this.getAllMovies();
  }

  setUserInfo() {
    this.service.getActivUser(this.activUser).subscribe( res => {
      this.user = res;
    });
  }

  save() {
    this.service.updateUser(this.user).subscribe(res => {
      this.setUserInfo();
    });
  }

  clickLikes() {
    if (this.trueLikes === false) {
      this.trueLikes = true;
      this.service.getActivUser(this.activUser).subscribe(res => {
        for (let i = 0; i < res.likes.length; i++) {
          for (let q = 0; q < this.allMovies.length; q++) {
            if (res.likes[i] === this.allMovies[q].id) {
              this.likes.push(this.allMovies[q]);
            }
          }
        }
      });
    } else {
      this.trueLikes = false;
      this.likes = [];
    }
  }

  clickZakladki() {
    if (this.trueZakladki === false) {
      this.trueZakladki = true;
      this.service.getActivUser(this.activUser).subscribe(res=> {
        for (let i = 0; i < res.zakladki.length; i++) {
          for (let j = 0;j < this.allMovies.length; j++) {
            if (res.zakladki[i] === this.allMovies[j].id) {
              this.zaktadki.push(this.allMovies[j]);
            }
          }
        }
      });
    } else {
      this.trueZakladki = false;
      this.zaktadki = [];
    }
  }
}
