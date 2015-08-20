import { Component, View, For } from 'angular2/angular2';
import { HNApi } from '../services/hn-api';
import { HNItem } from '../../components/hn-item';

let view = require('../views/item.html');
let styles = require('../styles/hn.less');

@Component({
  selector: 'page-item',
  viewBindings: HNApi
})
@View({
  directives: [
    For,
    HNItem
  ],
  template: view,
  styles: [ styles ]
})
export class ItemPage {
  childrenIds: Array;
  itemId;

  constructor(public hnApi: HNApi, id) {
    this.itemId = id;
  }
}
