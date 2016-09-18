import { DevfestappPage } from './app.po';

describe('devfestapp App', function() {
  let page: DevfestappPage;

  beforeEach(() => {
    page = new DevfestappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
