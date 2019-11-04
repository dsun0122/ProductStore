
//Component is from angular/core
import { Component } from '@angular/core';

import { products } from '../products';

//Import service class
import { ProductListService } from '../shared/product-list.service';

//Decorators are essentially attributes or annotations that provide metadata for classes.
//By decorating this class with the @Component decorator we are saying that the class in this ts file is a component
/*

*/
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductListService]
})
export class ProductListComponent {
  products = products;

  //Service is injected 
  constructor(productListService: ProductListService) {
    this.products = productListService.getProductList();
  }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notfied when the product goes on')
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/