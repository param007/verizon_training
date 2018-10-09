import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddScheduleComponent } from './add-schedule/add-schedule.component';
import { HomeComponent } from './home/home.component';
import {FormsModule } from '@angular/forms';
import { DisplayComponent } from './display/display.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    AddScheduleComponent,
    HomeComponent,
    DisplayComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
