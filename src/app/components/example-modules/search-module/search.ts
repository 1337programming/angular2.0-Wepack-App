/// <reference path="../../../../typings/_custom.d.ts" />

// Angular 2
import {Component, View, coreDirectives, formDirectives} from 'angular2/angular2';

import {Autosuggest} from './directives/autosuggest';

let view = require('./views/search.html');

@Component({
  selector: 'search-github'
})
@View({
  directives: [ coreDirectives, formDirectives, Autosuggest ],
  template: view
})
export class Search {
  repos: Array<any> = [];
  loading: boolean = false;

  constructor() {
  }

  showResults(results: string[]) {
    this.repos = results;
  }

}
