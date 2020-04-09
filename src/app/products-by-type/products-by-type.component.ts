import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Product } from '../movie';
import { Category } from '../catalog';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products-by-type',
  templateUrl: './products-by-type.component.html',
  styleUrls: ['./products-by-type.component.css']
})
export class ProductsByTypeComponent implements OnInit {
  products: Product[];
  typeCategory: Category;
  typeProduct = +this.route.snapshot.paramMap.get('id');

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getProductsByType();
    this.getCategory();
  }

  getCategory(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getCategory(id)
      .subscribe(category => this.typeCategory = category)
    ;
  }

  getProductsByType(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProductsByType(id)
      .subscribe(products => this.products = products)
    ;
    // console.log(this.products.);/
    // subscribe(products => this.products = products.filter(e => e.type === id)) /
  }
}
