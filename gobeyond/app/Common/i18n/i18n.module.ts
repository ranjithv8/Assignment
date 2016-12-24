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
	language = {};
	constructor(private _languageService:LanguageService){
		
	}
}
