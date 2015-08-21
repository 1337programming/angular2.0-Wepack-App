//import {zone} from 'zone.js';
//window.zone = window.Zone = zone;

let styles = require('./styles/hn.less');
let view = require('/.views/hn.html');

import {RouteConfig} from 'angular2/router';
import {Component, View} from 'angular2/angular2';
import {HomePage} from './directives/home'
import {ItemPage} from './directives/item'
import {UserPage} from './directives/user'
import {HNItem} from './components/hn-item/hn-item';


@Component({
  selector: 'hacker-news'
})
@RouteConfig([
  { path: '/',           redirectTo: '/hn' },
  { path: '/hn',         as: 'hn',        component: HackerNews },
  { path: '/hn-item',  as: 'hn-item',     component: HNItem },
])
@View({
  template: view,
  styles: [ styles ],
  directives: [
    HomePage,
    ItemPage,
    UserPage
  ]
})
export class HackerNews {

}

