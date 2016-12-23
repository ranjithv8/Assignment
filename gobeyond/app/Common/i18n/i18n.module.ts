import { NgModule }      from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';

import { LanguageService } from "./language.service";

@NgModule({
  imports:      [ 
  	HttpModule
  ],
  declarations: [],
  bootstrap:    [],
  providers: [ LanguageService ]
})
export class i18nModule { 
	constructor(private _languageService:LanguageService){
		this.getLanguage();
	}

	getLanguage() {
		debugger;
		this._languageService.getLabels().then(
				response => {
					console.log(response);
				}
			).catch(
				err => {
					console.log(err);
				}
			)
	}


}
