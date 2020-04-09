import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Movie } from '../movie';
import { Comment } from '../comment';
import { ProductService } from '../product.service';
import {ControlDbService} from '../control-db.service';
import {User} from '../Objects/user';
import {AuthService} from '../auth.service';
import {AddListService} from '../add-list.service';

@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.component.html',
  styleUrls: ['./anime-detail.component.css']
})
export class AnimeDetailComponent implements OnInit {
  @Input() AMS: Movie;
  popularAnimes: Movie[];
  comments: Comment[];
  commentJson: Comment[];
  admin = false;
  authValue = false;
  text = '';
  zakladki = false;
  like = false;


  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location,
    private service: ControlDbService,
    private service_list: AddListService
  ) { }

  ngOnInit(): void {
    this.getAnimeOrMovieOrSerial();
    this.getMostPopularAnimes();
    this.getComments();
    this.getJsonComments();
    this.setAdmin();
    this.changeViewCount();
  }

  getAnimeOrMovieOrSerial(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    const api = this.route.snapshot.paramMap.get('api');
    this.productService.getAnimeOrMovieOrSerial(api, id)
      .subscribe(ams => this.AMS = ams);
  }

  getMostPopularAnimes(): void {
    this.productService.getMostPopularAnimes()
      .subscribe(popularAnimes => this.popularAnimes = popularAnimes);
  }

  getComments(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getComments(id)
      .subscribe(comments => this.comments = comments);
  }

  goBack(): void {
    this.location.back();
  }

  getJsonComments() {
    this.service.getJsonComments(this.AMS.id).subscribe(res => {
      this.commentJson = res;
    });
  }

  addComment() {
    let text = this.text;
    let idMovie = this.AMS.id;
    let user: User;

    this.service.getActivUser(parseInt(localStorage.getItem("userID"))).subscribe(res => {
      if (text !== '') {
        this.service.createComment({userName: res.username, movieID: idMovie, text: text}).subscribe(res => {
          this.getJsonComments();
        });
      }
    });
    this.text = '';
  }

  setAdmin() {
    this.service.getActivUser(parseInt(localStorage.getItem('userID'))).subscribe(res => {
      if (res.roleID === 100) {
        this.admin = true;
        this.authValue = true;
        this.like = true;
        this.zakladki = true;
      } else {
        this.authValue = true;
        this.like = true;
        this.zakladki = true;
      }
    });
  }

  changeViewCount() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.changeViewCount(id)
      .subscribe(film => this.AMS.viewCount = this.AMS.viewCount + 1);
  }

  addLikes(id: number) {
    this.service.getActivUser(parseInt(localStorage.getItem('userID'))).subscribe(res => {
      this.service_list.addLike(res.id, id);
    });
  }

  addZakladki(id: number) {
    this.service.getActivUser(parseInt(localStorage.getItem('userID'))).subscribe(res => {
      this.service_list.addZakladki(res.id, id);
    });
  }
}
