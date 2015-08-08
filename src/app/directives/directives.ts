/// <reference path="../../typings/_custom.d.ts" />
/*
 * Angular 2
 * @coreDirectives: collection of Angular core directives
 * @formDirectives: list of all the form directives
 * @routerDirectives: list of all the router directives
 */
import {coreDirectives, formDirectives} from 'angular2/angular2';
import {routerDirectives} from 'angular2/router';

/*
 * App
 */
/* TODO: Create Autofocus directive */
//import {Autofocus} from './Autofocus';

// global App only directives
export var appDirectives: Array<any> = [
  //Autofocus
];

// global Angular core and other Angular module directives (form/router)
export var angularDirectives: Array<any> = [
  // Angular's core directives
  coreDirectives,

  // Angular's form directives
  formDirectives,

  // Angular's router
  routerDirectives
];
