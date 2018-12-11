import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MyModule1Module } from './my-module1/my-module1.module';
import { MyModule2Module } from './my-module2/my-module2.module';
import { MyModule3Module } from './my-module3/my-module3.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyModule1Module,
    MyModule2Module,
    MyModule3Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
