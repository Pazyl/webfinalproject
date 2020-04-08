import { Component, OnInit } from '@angular/core';

import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-pc',
  templateUrl: './product-pc.component.html',
  styleUrls: ['./product-pc.component.css']
})
export class ProductPcComponent implements OnInit {
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
