import { Component, OnInit } from '@angular/core';

import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-appliances',
  templateUrl: './product-appliances.component.html',
  styleUrls: ['./product-appliances.component.css']
})
export class ProductAppliancesComponent implements OnInit {
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
