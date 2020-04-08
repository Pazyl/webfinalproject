import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/product';
import { ProductService } from 'src/app/product.service';
import { MessageService } from 'src/app/message.service';

@Component({
  selector: 'app-top-anime',
  templateUrl: './top-anime.component.html',
  styleUrls: ['./top-anime.component.css']
})
export class TopAnimeComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductService, private messageService: MessageService) { }

  ngOnInit() {
    this.getTop100();
  }

  getTop100(): void {
    this.productService.getTop100()
      .subscribe(products => this.products = products.slice(0, 6));
  }
}
