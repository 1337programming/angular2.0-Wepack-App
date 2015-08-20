import { Component, View, For } from 'angular2/angular2';
import { HNApi } from '../services/hn-api';
import { HNItem } from '../components/hn-item/hn-item';

let view = require('../views/home.html');
let styles = require('../styles/hn.less');

@Component({
  selector: 'page-home',
  viewBindings: HNApi
})
@View({
  directives: [
    For,
    HNItem
  ],
  styles: [ styles ],
  template: view
})
export class HomePage {
  topStories: Array<HNItem>;

  constructor(public hnApi: HNApi) {
    hnApi.fetchTopStories().then(() => {
      this.topStories = hnApi.topStories;
    });
  }
}
