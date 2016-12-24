import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { LanguageService } from "./Common/i18n/language.service";

@Component({
  template: `<section class = "panel-body">
					<div class="text-center"> 
						<button (click) = 'showName()' type = "button" class = "btn btn-primary">Check In</button>
					</div>	
				</section>`,
})
export class HomeComponent  {
	language ={};
	constructor(private router: Router,private _languageService:LanguageService) { 
		console.log(this._languageService.getLanguage());
	}
	showName() {
		this.router.navigate(['checkin']);
	}
}