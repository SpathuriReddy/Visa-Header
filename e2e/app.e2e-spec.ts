import { VisaHeaderAppPage } from './app.po';

describe('visa-header-app App', () => {
  let page: VisaHeaderAppPage;

  beforeEach(() => {
    page = new VisaHeaderAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
