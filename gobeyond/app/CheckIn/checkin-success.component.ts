import { Component } from '@angular/core';
import { LanguageService } from "../Common/i18n/language.service";

@Component({
  template: `<section>
  				<div class= "text-center"> 
					<h2>{{label.checkinSuccess || "CheckIn Successfull"}}</h2>
  				</div>
  			</section>`,
})
export class CheckInSuccessComponent  {
	label:any
	constructor(private _languageService: LanguageService){
		var labels : any = this._languageService.getLanguage();
		this.label ={};
		this.label.checkinSuccess = labels["checkin-success"];
	}
}