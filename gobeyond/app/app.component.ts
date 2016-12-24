import { Component } from '@angular/core';

import { LanguageService } from "./Common/i18n/language.service";

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.html',
})
export class AppComponent  { 
	airlines = 'GOBEYOND'; 

	constructor(private _languageService:LanguageService) {
		this._languageService.getLabels();
	}
}
