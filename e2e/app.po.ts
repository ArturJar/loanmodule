import { browser, element, by } from 'protractor';

export class MeetNg2PbPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
