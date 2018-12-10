import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Mycomponent1Component } from './components/appmodule/mycomponent1/mycomponent1.component';


@NgModule({
  declarations: [
    AppComponent,
    Mycomponent1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
