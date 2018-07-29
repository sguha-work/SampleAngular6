import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {LeftmenuComponent} from './components/leftmenu/leftmenu.component';
import {CentercontentComponent} from './components/centercontent/centercontent.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftmenuComponent,
    CentercontentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, LeftmenuComponent, CentercontentComponent]
})
export class AppModule { }
