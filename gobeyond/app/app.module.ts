import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home.component';
import { CheckInModule } from './CheckIn/checkin.module';
import { i18nModule } from './Common/i18n/i18n.module';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'checkin',  redirectTo: 'checkinForm', pathMatch:'full'}
];

@NgModule({
  imports:      [ 
  		BrowserModule,
  		CheckInModule,
  		HttpModule,
      i18nModule,
  		RouterModule.forRoot(appRoutes)
  ],
  declarations: [ AppComponent,HomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
