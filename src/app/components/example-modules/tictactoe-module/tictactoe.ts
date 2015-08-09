/// <reference path="../../../../typings/_custom.d.ts" />

// Angular 2
import {Component, View, coreDirectives} from 'angular2/angular2';

// Services
import {Game}  from './services/game';

// Directives
import {Board} from './directives/board';

// View
let view = require('./views/tictactoe.html');

@Component({
  selector: 'tictactoe',
  viewBindings: [ Game ]
})
@View({
  directives: [ coreDirectives, Board ],
  template: view
})
export class Tictactoe {
  constructor(public game: Game) {

  }

  reset() {
    this.game.dispose();
    this.game = Game.create();
  }

}
