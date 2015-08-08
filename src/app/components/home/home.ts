/// <reference path="../../../typings/_custom.d.ts" />

/*
 * Angular 2
 * @Component: factory function
 * @View: factory function
 * @ViewEncapsulation: ENUM How the template and styles of a view should be encapsulated.
 */
import {Component, View, ViewEncapsulation} from 'angular2/angular2';

/*
 * Directives
 * @angularDirectives: Angular's core/form/router directives
 * @appDirectives: Our collection of directives from /directives
 */
import {appDirectives, angularDirectives} from 'app/directives/directives';

// Webpack's `require` to get files
let styles   = require('./styles/home.css');
let template = require('./views/home.html');

// Simple external file component example
@Component({
  selector: 'home'
})
@View({
  directives: [ angularDirectives, appDirectives ],
  encapsulation: ViewEncapsulation.EMULATED, // EMULATED: Emulate scoping of styles by preprocessing the style rules and adding additional attributes to elements.
  // include .html and .css file
  styles: [ styles ],
  template: template
})
export class Home {
  constructor() {

  }
}
