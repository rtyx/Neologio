import { NeologioPage } from './app.po';

describe('neologio App', () => {
  let page: NeologioPage;

  beforeEach(() => {
    page = new NeologioPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
