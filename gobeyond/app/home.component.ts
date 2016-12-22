import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  template: `<section class = "panel-body">
					<div class="text-center"> 
						<button (click) = 'showName()' type = "button" class = "btn btn-primary">Check In</button>
					</div>	
				</section>`,
})
export class HomeComponent  {
	constructor(private router: Router) { }
	showName() {
		this.router.navigate(['checkin']);
	}
}