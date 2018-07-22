import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyComponent1 } from './components/my-component1/my-component1.component';
import { MyComponent2 } from './components/my-component2/my-component2.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponent1,
    MyComponent2
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, MyComponent1, MyComponent2]
})
export class AppModule { }
