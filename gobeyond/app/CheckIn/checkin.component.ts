import { Component } from '@angular/core';
import {Router} from '@angular/router';

import { CheckinService } from "./checkin.service";
import { LanguageService } from "../Common/i18n/language.service";

@Component({
  templateUrl: 'app/CheckIn/checkin.component.html',
  providers: [CheckinService]
})
export class CheckInComponent  {
	formError = "";
	model= {
		bookingid:"",
		familyName:""
	};
	label:any;
	constructor(private router: Router,private _checkinService: CheckinService,private _languageService:LanguageService) {
		debugger;
		var labels : any = this._languageService.getLanguage();
		this.label = {};
		this.label.brdId = labels.brdId;
		this.label.famName = labels.famName;
	}
	
	onSubmit() {
		var request = {
			bookingId : this.model.bookingid,
			familyName: this.model.familyName
		}
		this._checkinService.getCheckinStatus().then(
			response => {
				this.router.navigate(['checkin-success']);
			}
		).catch(
			err => {
				this.formError = err._body;
			}
		)
	}
}