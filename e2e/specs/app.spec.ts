import { browser } from 'protractor';
import {AppComponent} from '../support/components/app.component';
import {IndexPage} from '../support/pages/index.page';

describe('QuickStart E2E Tests', () => {

  let appComponent: AppComponent;

  beforeAll(() => {
    appComponent = new AppComponent();
  });

  beforeEach(() => {
    IndexPage.openPage();
  });

  it('should open index page', () => {
    expect(browser.getTitle()).toEqual(IndexPage.title);
  });

  it('should display app.component heading',  () => {
    expect(appComponent.h1.getText()).toEqual(appComponent.heading);
  });

});
