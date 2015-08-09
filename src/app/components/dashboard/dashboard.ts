/// <reference path="../../../typings/_custom.d.ts" />

/*
 * Angular 2
 */
import {Component, View, Directive, ElementRef} from 'angular2/angular2';

let view = require('./views/dashboard.html');

/*
 * TODO: refactor
 * simple example directive that should be in `/directives` folder
 */
@Directive({
  selector: '[x-large]' // using [ ] means selecting attributes
})
class XLarge {
  constructor(public el: ElementRef) {
    // simple dom manipulation to set font size to x-large
    if (this.el.nativeElement.style) {
      this.el.nativeElement.style.fontSize = 'x-large';
    }
  }
}

// Simple component with custom directive example
@Component({
  selector: 'dashboard'
})
@View({
  directives: [ XLarge ],
  template: view
})
export class Dashboard {
  constructor() {

  }
}
