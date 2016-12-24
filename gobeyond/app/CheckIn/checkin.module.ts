import { NgModule }      from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from '@angular/router';

import { CheckInComponent } from './checkin.component';
import { CheckInSuccessComponent } from './checkin-success.component';

import { i18nModule } from '../Common/i18n/i18n.module';
import { LanguageService } from "../Common/i18n/language.service";

const checkinRoutes: Routes = [
  { path: 'checkinForm', component: CheckInComponent },
  { path: 'checkin-success', component: CheckInSuccessComponent}
];

@NgModule({
  imports:      [ RouterModule.forChild(checkinRoutes),FormsModule, i18nModule ],
  providers: 	[ LanguageService ],
  declarations: [ CheckInComponent,CheckInSuccessComponent],
  bootstrap:    [ ]
})
export class CheckInModule { }
