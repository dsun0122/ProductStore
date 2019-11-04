import { Component, OnInit, OnChanges, Input } from '@angular/core';

import { CartService } from '../shared/cart.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit, OnChanges {

  @Input() numberOfItemsInCart: number;

  constructor(private cartService: CartService) { 
      
  }

  ngOnInit() {
  }

  ngOnChanges() {
    
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/