import { Store } from './store';


export const products = [
  {
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    stores: [ new Store('Sprint'), new Store('Verizon')] 
  },
  {
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    stores: [new Store('Verizon')]
  },
  {
    name: 'Phone Standard',
    price: 299,
    description: '',
    stores: [new Store('T-Mobile'), new Store('Verizon'), new Store('Sprint')]
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/