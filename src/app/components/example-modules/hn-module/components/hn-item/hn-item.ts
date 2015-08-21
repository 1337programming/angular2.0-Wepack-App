import { Component, View, For, If, Switch, SwitchWhen, SwitchDefault } from 'angular2/angular2';
import { HNApi } from '../../services/hn-api';
import { timeAgo } from '../../../../../services/time';
import { DomainPipe } from './pipes/domain.pipe';

let view = require('./views/hn-item.html');
let styles = require('./styles/hn-item.less');

var hnApi;

@Component({
  selector: 'hn-item',
  viewBindings: [HNApi],
  properties: {
    newItemId: 'itemId',
    newLoadChildren: 'loadChildren',
    newTopLevel: 'topLevel'
  }
})
@View({
  template: view,
  styles: [ styles ],
  directives: [
    For,
    If,
    Switch,
    SwitchWhen,
    SwitchDefault
  ]
})
export class HNItem {
  data: Object;
  domainPipe: Object;
  loadChildren: boolean;
  topLevel: boolean;
  itemId;
  timeAgo;


  constructor(hnApiInstance: HNApi) {
    this.domainPipe = DomainPipe.transform;

    // Default value.
    this.loadChildren = true;

    // Make accessible in other methods.
    hnApi = hnApiInstance;

    this.timeAgo = timeAgo;
  }

  set newItemId(itemId) {
    this.itemId = itemId;
    this.fetchData();
  }

  set newLoadChildren(loadChildren) {
    this.loadChildren = loadChildren === 'true';
  }

  set newTopLevel(topLevel) {
    this.topLevel = topLevel === 'true';
  }

  fetchData() {
    hnApi.fetchItem(this.itemId).then(data => {
      this.data = data;
    });
  }
}
