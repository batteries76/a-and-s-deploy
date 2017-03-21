import { AAndSDeployPage } from './app.po';

describe('a-and-s-deploy App', () => {
  let page: AAndSDeployPage;

  beforeEach(() => {
    page = new AAndSDeployPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
