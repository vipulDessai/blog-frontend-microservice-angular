import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getLoginFormTitle(): Promise<string> {
    return element(by.css('app-root h4')).getText() as Promise<string>;
  }
}
