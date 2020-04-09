import { Component, OnInit, Input } from '@angular/core';

import { Product } from '../movie';

@Component({
  selector: 'app-view-description',
  templateUrl: './view-description.component.html',
  styleUrls: ['./view-description.component.css']
})
export class ViewDescriptionComponent implements OnInit {
  @Input() product: Product;

  constructor() { }

  ngOnInit(): void {
  }

}
