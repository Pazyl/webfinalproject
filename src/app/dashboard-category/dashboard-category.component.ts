import { Component, OnInit } from '@angular/core';

import { Category } from '../category';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-dashboard-category',
  templateUrl: './dashboard-category.component.html',
  styleUrls: ['./dashboard-category.component.css']
})
export class DashboardCategoryComponent implements OnInit {
  categories: Category[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.productService.getCategories()
      .subscribe(categories => this.categories = categories);
      // .subscribe(heroes => this.heroes = heroes.slice(1, 5)); /
  }
}
