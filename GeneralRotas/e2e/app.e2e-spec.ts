import { GeneralRotasPage } from './app.po';

describe('general-rotas App', function() {
  let page: GeneralRotasPage;

  beforeEach(() => {
    page = new GeneralRotasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
