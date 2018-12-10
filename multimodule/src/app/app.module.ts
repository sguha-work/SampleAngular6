import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MymoduleModule} from './modules/mymodule/mymodule.module';

import { AppComponent } from './app.component';
import { Mycomponent1Component } from './components/appmodule/mycomponent1/mycomponent1.component';


@NgModule({
  declarations: [
    AppComponent,
    Mycomponent1Component
  ],
  imports: [
    BrowserModule,
    MymoduleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
