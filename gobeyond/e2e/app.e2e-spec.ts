import { browser, element, by } from 'protractor';

describe('GoBeyond airlines E2E tests', function() {

	beforeEach(() =>{
		browser.get('http://localhost:4000/');

    	element(by.css('.btn-primary')).click();

    	element(by.id('booking-id')).sendKeys("okay");
	});

  it('Family Name : abc', function() {    
    element(by.id('family-name')).sendKeys("abc");    
    element(by.css('.btn-primary')).click();
    expect(element(by.css("h2")).getText()).toEqual("Checkin Successfull");
  });

  it('Family Name : def', function() {    
    element(by.id('family-name')).sendKeys("def");    
    element(by.css('.btn-primary')).click();
    expect(element(by.css(".label-warning")).getText()).toEqual("Invalid Booking code");
  });

  it('Family Name : ghi', function() {    
    element(by.id('family-name')).sendKeys("ghi");    
    element(by.css('.btn-primary')).click();
    expect(element(by.css(".label-warning")).getText()).toEqual("Family name invalid");
  });

  it('Family Name : jkl', function() {    
    element(by.id('family-name')).sendKeys("jkl");    
    element(by.css('.btn-primary')).click();
    expect(element(by.css(".label-warning")).getText()).toEqual("Check-in not available yet for this flight");
  });

  it('Family Name : mno', function() {    
    element(by.id('family-name')).sendKeys("mno");    
    element(by.css('.btn-primary')).click();
    expect(element(by.css(".label-warning")).getText()).toEqual("Sorry online check-in closed for this flight");
  });
});

