import { Component } from '@angular/core';
import {Router} from '@angular/router';

import { CheckinService } from "./checkin.service";

@Component({
  templateUrl: 'app/CheckIn/checkin.component.html',
  providers: [CheckinService]
})
export class CheckInComponent  {
	formError = "";
	model= {};
	constructor(private router: Router,private _checkinService: CheckinService) {

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