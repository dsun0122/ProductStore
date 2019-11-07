import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/cart.service';
import { ShippingPrice } from '../shared/shipping-price';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  shippingPrices: ShippingPrice[];
  shippingPricesObservable: Observable<ShippingPrice[]>;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    
    this.getShippingPrices();
    this.getShippingPricesOversable();
  }

  //This method simply gets the observable that you can then pipe into async
  getShippingPricesOversable() {
    this.shippingPricesObservable = this.cartService.getShippingPrices();
  }

  //When you subscribe you are observing the observable value. When it changes the suscriber is notified
  getShippingPrices() {
    this.cartService.getShippingPrices().subscribe((shippingPrices: ShippingPrice[]) => {
      this.shippingPrices = shippingPrices;
      console.log(JSON.stringify(this.shippingPrices));
    });
    console.log(JSON.stringify(this.shippingPrices));
  }

}
