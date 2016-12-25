import { browser, element, by } from 'protractor';

describe('GoBeyond airlines E2E tests', function() {
  it('go to site', function() {
    browser.get('http://localhost:4000/');

    element(by.css('.btn-primary')).click();

    element(by.id('booking-id')).sendKeys("sdlfjshd");
    element(by.id('family-name')).sendKeys("sdlfjshd");

    
    element(by.css('.btn-primary')).click();
  });
});

