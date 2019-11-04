import { Component, OnInit } from '@angular/core';

import { Input } from '@angular/core';

import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {

  //product is variable that is passed from the parent component
  @Input() product: object;

  //when the value of alert changes an event will be emitted
  @Output() alert = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}