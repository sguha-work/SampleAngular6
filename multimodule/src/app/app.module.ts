import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Mycomponent1Component } from './components/appmodule/mycomponent1/mycomponent1.component';
import { Mycomponent2Component } from './components/mymodule/mycomponent2/mycomponent2.component';

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
  bootstrap: [AppComponent]
})
export class AppModule { }
