import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  templateUrl: 'app/CheckIn/checkin.component.html',
})
export class CheckInComponent  {
	constructor(private router: Router) { 

	}

	submitCheckinForm() {
		alert("success");
		this.router.navigate(['checkin-success']);
	}
}