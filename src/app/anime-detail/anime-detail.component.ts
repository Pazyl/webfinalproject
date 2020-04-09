import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Movie } from '../movie';
import { Comment} from '../comment';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.component.html',
  styleUrls: ['./anime-detail.component.css']
})
export class AnimeDetailComponent implements OnInit {
  @Input() AMS: Movie;
  popularAnimes: Movie[];
  comments: Comment[];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getAnimeOrMovieOrSerial();
    this.getMostPopularAnimes();
    this.getComments();
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

  /*save(): void {
    this.productService.updateProduct(this.product)
      .subscribe(() => this.goBack() );
  }*/

}
