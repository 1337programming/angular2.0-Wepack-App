/// <reference path="../../typings/_custom.d.ts" />

import {bind} from 'angular2/angular2';

import {githubInjectables} from '../components/example-modules/search-module/services/github';

// Include injectables that you want to have globally throughout our app
export var appServicesInjectables: Array<any> = [
  githubInjectables,
];