import { AcademiaCorpoEAcaoPage } from './app.po';

describe('academia-corpo-e-acao App', () => {
  let page: AcademiaCorpoEAcaoPage;

  beforeEach(() => {
    page = new AcademiaCorpoEAcaoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
