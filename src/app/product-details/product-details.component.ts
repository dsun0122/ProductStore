import { Component, OnInit, Output } from '@angular/core';

import { ActivatedRoute } from '@angular/router'

import { products } from '../products';

import { CartService } from '../shared/cart.service';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  private _product;


  //overloading the default getter and setters
  set product(product: object) {
    this._product = product
  }

  get product() {
    return this._product
  }

  /**
   * Note that typescript implicitly assigns the contructor argument to a property
   * 
   */
  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  /**Note the usage of the '+' character before a variable denotes that it 
   * should be coerced into an int
   * It's not neccessary for the indexer to work in the example below
   * */
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });

    console.log(this.route);
  }

  addToCart(product: object) {
    this.cartService.addToCart(product);
    console.log(product)
    window.alert('Your product has been added to the cart!');
  }

}