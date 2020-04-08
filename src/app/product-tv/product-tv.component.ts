import { Component, OnInit } from '@angular/core';

import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-tv',
  templateUrl: './product-tv.component.html',
  styleUrls: ['./product-tv.component.css']
})
export class ProductTvComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe(products => this.products = products);
  }
}
