/// <reference path="../../../../typings/_custom.d.ts" />

// Angular 2
import {Component, View, coreDirectives} from 'angular2/angular2';

// Services
import {MemoryGame}  from './services/game';

// Directives
import {Board} from './directives/board';

// View
let view = require('./views/memory.html');

@Component({
  selector: 'memory',
  viewBindings: [MemoryGame]
})
@View({
  directives: [coreDirectives, Board],
  template: view
})

export class Memory {
  game: MemoryGame;
  tileNames: Array<string>;
  constructor() {
    this.tileNames = ['8-ball', 'kronos', 'baked-potato', 'dinosaur', 'rocket', 'skinny-unicorn',
      'that-guy', 'zeppelin'];
    this.game = new MemoryGame(this.tileNames);
  }
}
