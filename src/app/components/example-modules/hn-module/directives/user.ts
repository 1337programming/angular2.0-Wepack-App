import { Component, View, For, If } from 'angular2/angular2';
import { HNApi } from '../services/hn-api';
import { timeAgo } from '../../../../../services/time';
import { HNItem } from '../components/hn-item/hn-item';

let view = require('../views/user.html');
let styles = require('../styles/hn.less');

@Component({
  selector: 'page-user',
  viewBindings: HNApi
})
@View({
  directives: [
    For,
    If,
    HNItem
  ],
  styles: [ styles ],
  template: view
})
export class UserPage {
  showSubmissions: boolean;
  timeAgo;

  constructor(hnApi: HNApi) {
    this.timeAgo = timeAgo;
    this.showSubmissions = false;
  }
}
