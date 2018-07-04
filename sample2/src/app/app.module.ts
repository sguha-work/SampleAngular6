import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyFirstComponent } from './components/my-first/my-first.component';
import { MySecondComponent } from './components/my-second/my-second.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponent,
    MySecondComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [MyFirstComponent, MySecondComponent]
})
export class AppModule { }
