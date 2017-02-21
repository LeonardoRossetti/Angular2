import { GeneralPipesPage } from './app.po';

describe('general-pipes App', function() {
  let page: GeneralPipesPage;

  beforeEach(() => {
    page = new GeneralPipesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
