import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[myError]'
})
export class MyErrorDirective {

  constructor(elr: ElementRef) { 
    elr.nativeElement.style.background = 'red';

  }

}