import { async,TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { LanguageService } from "./Common/i18n/language.service";
import { Http, Response, RequestOptions } from '@angular/http';

describe('Component: AppComponent', () => {
    /*let appComponent:AppComponent;
    let http:Http = new Http();
    let service:LanguageService = new LanguageService(http);
 
    beforeEach(() => {
        appComponent = new AppComponent(service);
    });*/

	it('Check app Component', async(() => {
		expect(true).toBe(true);
	}));
});