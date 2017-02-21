import { GeneralServicesPage } from './app.po';

describe('general-services App', function() {
  let page: GeneralServicesPage;

  beforeEach(() => {
    page = new GeneralServicesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
