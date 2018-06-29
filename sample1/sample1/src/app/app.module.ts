import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Mycomponent1Component } from './components/mycomponent1/mycomponent1.component';
import { Mycomponent2Component } from './components/mycomponent2/mycomponent2.component';

@NgModule({
  declarations: [
    AppComponent,
    Mycomponent1Component,
    Mycomponent2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, Mycomponent1Component, Mycomponent2Component]
})
export class AppModule { }
