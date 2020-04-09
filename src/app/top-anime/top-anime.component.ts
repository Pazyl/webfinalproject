import { Component, OnInit } from '@angular/core';

import { Movie } from 'src/app/movie';
import { ProductService } from 'src/app/product.service';
import { Catalog } from 'src/app/catalog';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-top-anime',
  templateUrl: './top-anime.component.html',
  styleUrls: ['./top-anime.component.css']
})
export class TopAnimeComponent implements OnInit {
  top100: Movie[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getTop100();
  }

  getTop100(): void {
    this.productService.getTop100()
      .subscribe(top1 => this.top100 = top1);
  }
}
