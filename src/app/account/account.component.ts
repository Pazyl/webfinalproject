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
  favorites: Movie[];
  likes: Movie[];

  activUser: number = parseInt(localStorage.getItem('userID'));
  user: User;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location,
    private service: ControlDbService
  ) {
  }

  ngOnInit(): void {
    this.setUserInfo();
  }

  setUserInfo() {
    this.service.getActivUser(this.activUser).subscribe( res => {
      this.user = res;
    });
  }

}
