/// <reference path="../../typings/_custom.d.ts" />

/*
 * Angular 2
 */
import {Component, View} from 'angular2/angular2';
import {RouteConfig} from 'angular2/router';

/*
 * Directives
 */
import {coreDirectives, formDirectives} from 'angular2/angular2';
import {routerDirectives} from 'angular2/router';
// Import all of our custom app directives
import {appDirectives} from '../directives/directives';

/*
 * App Pipes
 * our collection of pipes registry
 */
import {appPipes} from '../pipes/pipes';

/*
 * Components
 */

// We use a folder if we want separate files
import {Home} from './home/home';
// Otherwise we only use one file for a component
import {Dashboard} from './dashboard/dashboard';

// Example modules
import {ExampleModules} from './example-modules/example-modules';
// Use webpack's `require` to get files as a raw string using raw-loader
let styles = require('./app.css');
let template = require('./app.html');

/*
 * App Component
 * Top Level Component
 * Simple router component example
 */
@Component({
  selector: 'app', // without [ ] means we are selecting the tag directly
  viewBindings: [ appPipes ]
})
@View({
  // needed in order to tell Angular's compiler what's in the template
  directives: [
    // Angular's core directives
    coreDirectives,

    // Angular's form directives
    formDirectives,

    // Angular's router
    routerDirectives,

    // Our collection of directives from /directives
    appDirectives
  ],
  // include our .css file
  styles: [ styles ],
  template: template
})
@RouteConfig([
  { path: '/',                  as: 'home',          component: Home },
  { path: '/dashboard',         as: 'dashboard',     component: Dashboard },
  { path: '/example-modules/...', as: 'example-modules', component: ExampleModules }
])
export class App {
  name: string;
  constructor() {
    this.name = 'angular';
  }
}
