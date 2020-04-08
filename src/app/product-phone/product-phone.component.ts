import { Component, OnInit } from '@angular/core';

import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-phone',
  templateUrl: './product-phone.component.html',
  styleUrls: ['./product-phone.component.css']
})
export class ProductPhoneComponent implements OnInit {
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
