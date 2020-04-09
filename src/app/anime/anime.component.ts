import { Component, OnInit } from '@angular/core';

import { Movie } from 'src/app/movie';
import { ProductService } from 'src/app/product.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ControlDbService} from '../control-db.service';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})
export class AnimeComponent implements OnInit {
  animes: Movie[];
  popularAnimes: Movie[];
  form: FormGroup;
  seledImg = null;
  admin = false;

  constructor(private productService: ProductService, private formBuilder: FormBuilder, private service: ControlDbService) {
    this.setNewAnime();
  }

  ngOnInit(): void {
    this.getAnimes();
    this.getMostPopularAnimes();
    this.setAdmin();
  }

  setNewAnime() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      alterName: ['', Validators.required],
      catalogType: ['', Validators.required],
      rating: [, Validators.required],
      viewCount: [, Validators.required],
      status: ['', Validators.required],
      releaseDate: [, Validators.required],
      genre: ['', Validators.required],
      studio: ['', Validators.required],
      image1: ['', Validators.required],
      ageLimit: [, Validators.required],
      screen_1_1: ['', Validators.required],
      screen_1_2: ['', Validators.required],
      screen_1_3: ['', Validators.required],
      screen_1_4: ['', Validators.required],
      screen_1_5: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  getAnimes(): void {
    this.productService.getAnimes()
      .subscribe(animes => this.animes = animes);
  }

  getMostPopularAnimes(): void {
    this.productService.getMostPopularAnimes()
      .subscribe(popularAnimes => this.popularAnimes = popularAnimes);
  }

  /*add(name: string, price: number, type: number, description: string, rating: number, image1: string): void {
    name = name.trim();
    if (!name) { return; }
    this.productService.addProduct({ name, type, price, description, rating, image1 } as Product)
      .subscribe(product => {
        this.products.push(product);
      });
  }

  delete(product: Product): void {
    this.products = this.products.filter(p => p !== product);
    this.productService.deleteProduct(product).subscribe();
  }*/
  createAnime() {
    this.service.createAnime(this.form.getRawValue()).subscribe(res => {
      console.log(res);
    });
  }

  setAdmin() {
    this.service.getActivUser(parseInt(localStorage.getItem('userID'))).subscribe(res => {
      if (res.roleID === 100) {
        this.admin = true;
      }
    });
  }
}
