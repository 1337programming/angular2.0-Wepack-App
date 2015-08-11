/// <reference path="../../../../../typings/_custom.d.ts" />

// Angular 2
import {Component, View, EventEmitter, coreDirectives} from 'angular2/angular2';

let styles   = require('../views/css/memory.css');
let template = require('../views/card.html');

@Component({
  selector: 'card',
  properties: [ 'card' ],
  events: [ 'select' ]
})
@View({
  directives: [ coreDirectives ],
  styles: [styles],
  template: template
})
export class Card {
  select: EventEmitter = new EventEmitter();
}
