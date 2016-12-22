import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home.component';
import { CheckInModule } from './CheckIn/checkin.module';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'checkin',  redirectTo: 'checkinForm', pathMatch:'full'}
];

@NgModule({
  imports:      [ 
  		BrowserModule,
  		CheckInModule,
  		RouterModule.forRoot(appRoutes)
  ],
  declarations: [ AppComponent,HomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
