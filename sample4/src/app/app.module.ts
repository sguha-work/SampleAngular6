import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, // required to use display in browser only module which imported by default
    FormsModule, // required for using model in input box
    HttpClientModule // required for ajax call
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
