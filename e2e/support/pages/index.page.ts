import { browser } from 'protractor';

export class IndexPage {
  static title = 'Angular 2 Protractor Jasmine TypeScript Seed';

  static openPage() : any {
    browser.get('');
  }
}
