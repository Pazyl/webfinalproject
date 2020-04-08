import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/product';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  products: Product[];

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit() {
    this.getAnimeByStatus();
  }

  getAnimeByStatus(): void {
    this.productService.getAnimeByStatus()
      .subscribe(products => this.products = products.slice(0, 4));
  }
}
