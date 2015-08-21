/// <reference path="../../../../typings/_custom.d.ts" />

// Angular 2
import {Component, View, EventEmitter, coreDirectives} from 'angular2/angular2';

let style = require('../styles/structure.css');
let template = require('../views/structure.html');

@Component({
  selector: 'structure',
  properties: [ 'structure' ]
})
@View({
  directives: [ coreDirectives ],
  styles: [style],
  template: template
})
export class Structure {
  select: EventEmitter = new EventEmitter();
}
