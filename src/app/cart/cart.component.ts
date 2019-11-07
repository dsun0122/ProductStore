import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/cart.service';
import { FormBuilder } from '@angular/forms'
import { ShippingPrice } from '../shared/shipping-price';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [];
  checkoutForm;
  shippingPrices: ShippingPrice[];

  constructor(private cartService: CartService, private formBuilder: FormBuilder) { 
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });

    cartService.getShippingPrices().subscribe(value => {
      this.shippingPrices = value;
    });
  }

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.cartItems = this.cartService.getItems();
  }

  getTotal() {
    return this.cartItems.reduce((accumulator, curr) => { 
      return accumulator + curr.price;
    }, 0);
  }

  onSubmit(customerData) {
    console.warn('Your order has been submitted', customerData);

    this.cartItems = this.cartService.clearCart();

    this.checkoutForm.reset();
  }

}
