import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Product } from './product';
import { Category } from './category';

import { PRODUCTS } from './mock-products';
import { CATEGORIES } from './mock-categories';

import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class ProductService {

  constructor(private messageService: MessageService) { }

  getProducts(): Observable<Product[]> {
    return of(PRODUCTS);
  }

  getTop100(): Observable<Product[]> {
    return of(PRODUCTS);
  }

  getProductsByType(id: number): Observable<Product[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add(`ProductService: fetched products by type=${id}`);
    return of(PRODUCTS.filter(product => product.categoryType === id));
  }

  getAnimeByStatus(): Observable<Product[]> {
    return of(PRODUCTS.filter(product => product.status === 'Завершен'));
  }

  getProduct(id: number): Observable<Product> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`ProductService: fetched product id=${id}`);
    return of(PRODUCTS.find(product => product.id === id));
  }

  getCategories(): Observable<Category[]> {
    // TODO: send the message _after_ fetching the Categories
    this.messageService.add('ProductService: fetched Categories');
    return of(CATEGORIES);
  }

  getCategory(id: number): Observable<Category> {
    // TODO: send the message _after_ fetching the Category
    this.messageService.add(`ProductService: fetched Category id=${id}`);
    return of(CATEGORIES.find(category => category.id === id));
  }
}
