/// <reference path="../../../../../typings/_custom.d.ts" />

import {Injectable} from 'angular2/angular2';
import {Tile}  from '../services/tile';

var tileNames = ['8-ball', 'kronos', 'baked-potato', 'dinosaur', 'rocket', 'skinny-unicorn',
    'that-guy', 'zeppelin'];
var message = {
  CLICK:'Click on a tile.',
  ONE_MORE:'Pick one more card',
  MISS: 'Try again',
  MATCH: 'Good job! Keep going.',
  WON: 'You win!'
};

@Injectable()
export class Game {
  tileDeck: Array<Tile>;
  firstPick: Tile;
  grid: any;
  secondPick: Tile;
  message: string;
  unmatchedPairs: number;

  constructor(tileNames) {
    this.tileDeck = this.makeDeck(tileNames);
    this.message = message.CLICK;
    this.unmatchedPairs = tileNames.length;
    this.firstPick = null;
    this.secondPick = null;
    this.grid = this.makeGrid(this.tileDeck);
  }

  public static create(): Game {
    return new Game(tileNames);
  }

  makeDeck(tileNames) {
    var tileDeck: Array<Tile> = [];
    for (name in tileNames) {
      tileDeck.push(new Tile(name));
      tileDeck.push(new Tile(name));
    }

    return tileDeck;
  }

  makeGrid(tileDeck) {
    var gridDimension = Math.sqrt(tileDeck.length);
    var grid = [];

    for (var row = 0; row < gridDimension; row++) {
      grid[row] = [];
      for (var col = 0; col < gridDimension; col++) {
        grid[row][col] = this.removeRandomTile(tileDeck);
      }
    }

    return grid;
  }

  removeRandomTile(tileDeck) {
    var i = Math.floor(Math.random()*tileDeck.length);
    return tileDeck.splice(i, 1)[0];
  }

  flipTile(tile) {
    if (tile.flipped) {
        return;
    }

    tile.flip();

    if(!this.firstPick || this.secondPick) {

      if (this.secondPick) {
        this.firstPick.flip();
        this.secondPick.flip();
        this.firstPick = this.secondPick = undefined;
      }

      this.firstPick = tile;
      this.message = message.ONE_MORE;

    } else {
      if (this.firstPick.title === tile.title) {
        this.unmatchedPairs--;
        if (this.unmatchedPairs > 0) {
          this.message = message.WON;
        }
        this.firstPick = this.secondPick = undefined;
      } else {
        this.secondPick = tile;
        this.message = message.MISS;
      }
    }
  }
}
