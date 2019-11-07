import { Component, OnInit, OnChanges, Input } from '@angular/core';

import { CartService } from '../shared/cart.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit, OnChanges {

  numberOfItemsInCart: number;

  constructor(private cartService: CartService) { 
      
  }

  ngOnInit() {
     this.cartService.updateCart.subscribe(res => {
      console.log('onInit',res);

       this.numberOfItemsInCart = res;
     });
  }

  ngOnChanges() {
    // this.cartService.updateCart.subscribe(res => {
    //   console.log('onChange',res);

    //   this.numberOfItemsInCart = res

    // });
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/