/// <reference path="../../../../../typings/_custom.d.ts" />

import {Injectable} from 'angular2/angular2';

@Injectable()
export class Tile {
  title: string;
  flipped: boolean;

  constructor(title: string) {
    this.title = title;
    this.flipped = false
  }

  flip() {
    this.flipped = !this.flipped;
  }
}