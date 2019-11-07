import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ShippingPrice } from '../shared/shipping-price'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  updateCart = new BehaviorSubject(0);

  constructor(private httpClient: HttpClient) {

  }

  addToCart(product: object) {
    return this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  //The http module returns observables that must be subscribed to.
  getShippingPrices(): Observable<ShippingPrice[]> {
      return this.httpClient.get<ShippingPrice[]>('../assets/shipping.json', {
      responseType: "json"
    });
  }

  //You can the entire observable HttpReponse object with:
  //Sometimes you want to read all the response information like headers, etc...
  getShippingPricesResponse(): Observable<HttpResponse<ShippingPrice[]>> {
    return this.httpClient.get<ShippingPrice[]>('../assets/shipping.json', {
      observe: "response"
    });
  }

  myAdd: (baseValue: number, increment: number) => number = function(x: number, y: number) { return x + y; };
}
