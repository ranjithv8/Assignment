import { NgModule }      from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from '@angular/router';

import { CheckInComponent } from './checkin.component';
import { CheckInSuccessComponent } from './checkin-success.component';

const checkinRoutes: Routes = [
  { path: 'checkinForm', component: CheckInComponent },
  { path: 'checkin-success', component: CheckInSuccessComponent}
];

@NgModule({
  imports:      [ RouterModule.forChild(checkinRoutes),FormsModule ],
  declarations: [ CheckInComponent,CheckInSuccessComponent],
  bootstrap:    [ ]
})
export class CheckInModule { }
