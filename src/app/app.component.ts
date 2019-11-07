import { Component, OnInit } from '@angular/core';
import { ObservableService } from './shared/observable.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private observableSerivce: ObservableService) {

  }

  ngOnInit(): void {
    console.log("ngOnInit()");
    this.observableSerivce.observableTest.subscribe(
      (val) => {
        console.log("This is from the observableTest subscriber! x = " + val);
      },
      (error) => {
        console.log(error);
      },
      () => { 
        console.log("Done!"); 
      }
    );

    
    this.observableSerivce.observableTest.subscribe({
      next(x) {
        console.log("This is also from the observableTest! x = " + x );
      },
      complete() { console.log("This is also done!"); }
    });

    this.observableSerivce.observableTest2.subscribe(str => {
      console.log(str);
    });

    this.observableSerivce.observableErrorTest.subscribe(
      error => { console.error(error); }
    )
  }

}




/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/