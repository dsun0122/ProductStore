import { Injectable } from '@angular/core';

import { products } from '../products';

//The @Injectable decaration means that this class is created and mantained by the
// the DI container at the root level
@Injectable({
providedIn: 'root'

})
export class ProductListService {

    getProductList() {
        return products;
    }
  
}