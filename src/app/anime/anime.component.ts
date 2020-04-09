import { Component, OnInit } from '@angular/core';

import { Movie } from 'src/app/movie';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})
export class AnimeComponent implements OnInit {
  animes: Movie[];
  popularAnimes: Movie[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getAnimes();
    this.getMostPopularAnimes();
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
}
