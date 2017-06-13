import { AnnonceTransportPage } from './app.po';

describe('annonce-transport App', () => {
  let page: AnnonceTransportPage;

  beforeEach(() => {
    page = new AnnonceTransportPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
