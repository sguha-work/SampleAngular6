import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormcomponentComponent } from './components/formcomponent/formcomponent.component';
import { TablecomponentComponent } from './components/tablecomponent/tablecomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    FormcomponentComponent,
    TablecomponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
