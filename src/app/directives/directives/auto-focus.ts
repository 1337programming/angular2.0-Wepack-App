/// <reference path="../../../typings/_custom.d.ts" />
/*
 * Angular 2
 * @Directive: factory function
 * @ElementRef: class, reference to the element
 */
import {Directive, ElementRef} from 'angular2/angular2';
// Simple example directive that fixes autofocus problem with multiple views
@Directive({
  selector: '[autofocus]' // using [ ] means selecting attributes
})
export class Autofocus {
  constructor(public el: ElementRef) {
    // autofocus fix for multiple views
    if (this.el.nativeElement.focus) {
      this.el.nativeElement.focus();
    }
  }
}
