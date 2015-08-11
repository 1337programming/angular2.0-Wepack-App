/// <reference path="../../../../typings/_custom.d.ts" />

// Angular 2
import {Component, View, coreDirectives} from 'angular2/angular2';

// Services
import {Game}  from './services/game';

// Directives
import {Card} from './directives/card';

// View
let view = require('./views/memory.html');

@Component({
  selector: 'memory',
  viewBindings: [Game]
})
@View({
  directives: [coreDirectives, Card],
  template: view
})
export class Memory {
  constructor(public game: Game) {

  }

  reset() {
    this.game = Game.create();
  }
}