/// <reference path="../../typings/_custom.d.ts" />
/*
 * Angular 2
 */
import {Pipes} from 'angular2/change_detection';

/*
 * App Pipes
 */
import {capitalize} from './Capitalize/Capitalize-Pipe';
import {rxAsync} from './RxPipe';

export var appPipes = [
  Pipes.extend({
    'async': rxAsync,
    'capitalize': capitalize
    // add more pipes to this Map
  })
];
