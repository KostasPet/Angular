import { CarPage } from './app.po';

describe('car App', function() {
  let page: CarPage;

  beforeEach(() => {
    page = new CarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
