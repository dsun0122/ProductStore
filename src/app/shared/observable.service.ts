import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  observableTest: Observable<string | number>;
  observableTest2: Observable<string>;
  observableErrorTest: Observable<any>;

  constructor() {
    //what makes up an observable?
    //subscriber and observer are synonmous with each other here.
    //You are defining what to give to the subscriber using the next() method
    //You can call error when an error occurs and complete to unsubscribe
    this.observableTest = new Observable(
      (subscriber) => {
        subscriber.next(1);
        subscriber.next(2);
        subscriber.next(3);
        subscriber.next(4);
        subscriber.next('A');
        setTimeout(() => {
          subscriber.next(5);
          subscriber.complete();
        }, 10000);

        return { unsubscribe() { console.log("The subscriber is unsubscribing in the teardown logic!") } };
      }
    );

    this.observableTest2 = new Observable((subscriber) => {
      const { next, error, complete } = subscriber;

      const onSuccess = () => { subscriber.next('From the callback!'); };


      function invokeCallBack(callback: Function) {
        callback();
      }

      invokeCallBack(onSuccess);

    });

    this.observableErrorTest = new Observable((subscriber) => {
      try {
        throw Error("This error was thrown!");
      } catch (error) {
        subscriber.error(error);
      }
    });
  }
}
