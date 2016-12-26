import { TestBed,async } from '@angular/core/testing';

import { FormGroup,ReactiveFormsModule } from '@angular/forms';

import { LanguageService } from "../Common/i18n/language.service";

import { CheckInComponent } from './checkin.component';

import { CheckinService } from "./checkin.service";

import { Http, Response, RequestOptions } from '@angular/http';

import {Router} from '@angular/router';

class MockLanguageService {
  getLanguage() {
  	return {
  		brdId : "Label for Boarding",
		famName : "Label for Family Name"
  	};
  }
}

class MockCheckinService {
	getCheckinStatus(request:any) {		
		return new Promise((resolve, reject) => {
   			reject({_body: "Invalid Name"});
		});
   }
}

describe('Component: CheckInComponent', () => {
	var app:CheckInComponent,fixture:any;
    beforeEach(() => {
	    TestBed.configureTestingModule({
	      declarations: [CheckInComponent],
	      providers: [{ provide: LanguageService, useClass: MockLanguageService },
	      			  { provide: CheckinService, useClass: MockCheckinService},
	      			  { provide: Http},{ provide: Router}],
	    });
  	});

  	it('check Language service', async(() => {
  		TestBed.overrideComponent(CheckInComponent, {
	    	set: {
	       		template: '<div>Overridden template here</div>'
	       }
	    });
	    TestBed.compileComponents().then(() => {

		    fixture = TestBed.createComponent(CheckInComponent);

		    // Access the dependency injected component instance
		    app = fixture.componentInstance;
		    expect(app).toBeDefined();
		    expect(app.label.brdId).toBe("Label for Boarding");
		    expect(app.label.famName).toBe("Label for Family Name")		    // Detect changes as necessary
		    fixture.detectChanges();
		});
	    
	}));

	/*it('check Checkin Service', async(() => {
  		TestBed.overrideComponent(CheckInComponent, {
	    	set: {
	       		template: '<div>Overridden template here</div>'
	       }
	    });
	    TestBed.compileComponents().then(() => {

		    fixture = TestBed.createComponent(CheckInComponent);

		    // Access the dependency injected component instance
		    app = fixture.componentInstance;

		    app.onSubmit();

		    expect(app.formError).toEqual("Invalid Name")	
		});
	    
	}));*/
});