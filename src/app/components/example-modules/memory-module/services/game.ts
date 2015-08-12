/// <reference path="../../../../../typings/_custom.d.ts" />

import {Injectable} from 'angular2/angular2';
import {Tile}  from '../services/tile';


var message = {
  CLICK:'Click on a tile.',
  ONE_MORE:'Pick one more card',
  MISS: 'Try again',
  MATCH: 'Good job! Keep going.',
  WON: 'You win!'
};

@Injectable()
export class MemoryGame {
  tileDeck: Array<Tile>;
  grid: Tile[][];
  message: string;
  unmatchedPairs: number;
  private _firstPick: Tile;
  private _secondPick: Tile;

  constructor(tileNames: Array<string>) {
    this._firstPick = new Tile('');
    this._secondPick = new Tile('');
    this.tileDeck = MemoryGame.makeDeck(tileNames);
    this.message = message.CLICK;
    this.unmatchedPairs = tileNames.length;
    this.grid = MemoryGame.makeGrid(this.tileDeck);
  }

  static makeDeck(tileNames) {
    var tileDeck: Array<Tile> = [];
    for (var i:number = 0; i < tileNames.length; i++) {
      tileDeck.push(new Tile(tileNames[i]));
      tileDeck.push(new Tile(tileNames[i]));
    }

    return tileDeck;
  }

  static makeGrid(tileDeck) {
    var gridDimension = Math.sqrt(tileDeck.length);
    var grid:Array<Tile[]> = [];

    for (var row:number = 0; row < gridDimension; row++) {
      grid[row] = [];
      for (var col:number = 0; col < gridDimension; col++) {
        grid[row][col] = MemoryGame.removeRandomTile(tileDeck);
      }
    }

    return grid;
  }

  static removeRandomTile(tileDeck) {
    var i:number = Math.floor(Math.random()*tileDeck.length);
    return tileDeck.splice(i, 1)[0];
  }

  flipTile(tile) {
    if (tile.flipped) {
        return;
    }

    tile.flip();

    if(!this._firstPick || this._secondPick) {

      if (this._secondPick) {
        this._firstPick.flip();
        this._secondPick.flip();
        this._firstPick = this._secondPick = undefined;
      }

      this._firstPick = tile;
      this.message = message.ONE_MORE;

    } else {
      if (this._firstPick.title === tile.title) {
        this.unmatchedPairs--;
        if (this.unmatchedPairs > 0) {
          this.message = message.WON;
        }
        this._firstPick = this._secondPick = undefined;
      } else {
        this._secondPick = tile;
        this.message = message.MISS;
      }
    }
  }

  public get secondPick():Tile {
    return this._secondPick;
  }

  public set secondPick(value:Tile) {
    this._secondPick = value;
  }
  public get firstPick():Tile {
    return this._firstPick;
  }

  public set firstPick(value:Tile) {
    this._firstPick = value;
  }
}
