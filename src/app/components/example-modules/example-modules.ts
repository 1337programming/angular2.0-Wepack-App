/// <reference path="../../../typings/_custom.d.ts" />

// Angular 2
import {Component, View, CSSClass} from 'angular2/angular2';
import {RouteConfig, routerDirectives} from 'angular2/router';
// Modules
import {Tictactoe} from './tictactoe-module/tictactoe';
import {Search} from './search-module/search';
import {Memory} from './memory-module/memory';
// View
let template = require('./example-modules.html');
let styles = require('./example-modules.css')
@Component({
  selector: 'example-modules'
})
@RouteConfig([
  { path: '/',              redirectTo: '/search' },
  { path: '/search',        as: 'search',        component: Search },
  { path: '/tictactoe',     as: 'tictactoe',     component: Tictactoe },
  { path: '/memory',        as: 'memory',        component: Memory }
])
@View({
  directives: [ routerDirectives, CSSClass ],
  // include our .css file
  styles: [ styles ], // Use webpack's `require` to get files as a raw string using raw-loader
  template: template
})
export class ExampleModules {
  active: number = 0;
}
