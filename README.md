[![GitHub version](https://badge.fury.io/gh/1337programming%2Fangular2.0-App.svg)](http://badge.fury.io/gh/1337programming%2Fangular2.0-App)
[![Dependency Status](https://david-dm.org/1337-programming/angular2.0-App.svg)](https://david-dm.org/1337programming/angular2.0-App)
[![Issue Stats](http://issuestats.com/github/1337-programming/angular2.0-Appr/badge/pr?style=flat)](http://issuestats.com/github/1337-programming/angular2.0-App)
# Angular 2.0 Sample App

Angular 2.0 Sample App using Typescript as a ECMAScript 6 standard and invoking webpack as a module bundler.

## Tags
* Angular 2.0
* TypeScript
* ECMAScript 6 Standard
* Webpack

# Getting Started
## Dependencies
What is needed to run this app:
* `node`
* `npm`

Install the following node modules
* `webpack` (`npm install -g webpack`)
* `webpack-dev-server` (`npm install -g webpack-dev-server`)
* `karma` (`npm install -g karma-cli`)
* `protractor` (`npm install -g protractor`)
* `TypeScript` (`npm install -g typescript`)
* `TSD typings` (`npm install -g tsd`)

## Install
* `fork` repo
* `clone`
* `npm install`
* `npm install express connect-history-api-fallback morgan body-parser` installs sample backend api
* `npm run express` starts up sample backend api server in one tab
* `npm run server` starts the dev server in another tab

## Running App
After installation run `npm run server` to start a local server using `webpack-dev-server` which will watch, build (in-memory), and reload for you. The port will be displayed to you as `http://localhost:3000` (or if you prefer IPv6, if you're using `express` server, then it's `http://[::1]:3000/`).

### build files
```bash
$ npm run build # or webpack
```

### watch and build files
```bash
$ npm run watch # or webpack --watch
```

### run tests
```bash
$ npm run test # or karma start
```

### run webdriver (E2E)
```bash
$ npm run webdriver-start # or webdriver-manager start
then
$ npm rune e2e
```

# Angular 2.0 API
reference: https://angular.io/docs/js/latest/api/

# License
  [MIT](/LICENSE)
