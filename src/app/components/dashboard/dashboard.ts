/// <reference path="../../../typings/_custom.d.ts" />

/*
 * Angular 2
 */
import {Component, View, Directive, coreDirectives, ElementRef} from 'angular2/angular2';

// Directives
import {Structure} from './directives/structure';

// View
let view = require('./views/dashboard.html');

// Styles
let styles = require('./styles/dashboard.css');


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
  directives: [ coreDirectives, XLarge, Structure ],
  template: view,
  styles: [styles]
})
export class Dashboard {
  constructor() {

  }
}
