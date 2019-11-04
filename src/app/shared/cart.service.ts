import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Observable<any[]>;
  updateItems = new BehaviorSubject({});

  constructor() { 
    this.items = new Observable<any[]>();
  }

  addToCart(product: object) {
    this.items.subscribe((value) => {
      value.push(product);
    });
  }
  
  // getItems() {
  //   return this.items;
  // }

  // clearCart() {
  //   this.items = [];
  //   return this.items;
  // }
}
