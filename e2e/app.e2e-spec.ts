import { MeetNg2PbPage } from './app.po';

describe('meet-ng2-pb App', () => {
  let page: MeetNg2PbPage;

  beforeEach(() => {
    page = new MeetNg2PbPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
