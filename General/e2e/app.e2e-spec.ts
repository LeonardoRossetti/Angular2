import { GeneralPage } from './app.po';

describe('general App', function() {
  let page: GeneralPage;

  beforeEach(() => {
    page = new GeneralPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
