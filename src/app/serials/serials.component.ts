import { Component, OnInit } from '@angular/core';

import { Movie } from 'src/app/movie';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-serials',
  templateUrl: './serials.component.html',
  styleUrls: ['./serials.component.css']
})
export class SerialsComponent implements OnInit {
  serials: Movie[];
  popularSerials: Movie[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getSerials();
    this.getMostPopularSerials();
  }

  getSerials(): void {
    this.productService.getSerials()
      .subscribe(serials => this.serials = serials);
  }

  getMostPopularSerials(): void {
    this.productService.getMostPopularSerials()
      .subscribe(ps => this.popularSerials = ps);
  }

}
