import { Pipes } from 'angular2/angular2';

export class DomainPipe extends Pipes {
  static transform(input) {
    if (!input) {
      return '';
    }
    var domain = input.split('/')[2];
    return domain ? domain.replace('www.', '') : domain;
  }
}
