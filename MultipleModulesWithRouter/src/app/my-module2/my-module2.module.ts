import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyComponent2Component } from './components/my-component2/my-component2.component';
import { MyModule2RoutingModule } from './my-module2-routing.module';
@NgModule({
  declarations: [MyComponent2Component],
  exports: [
    MyComponent2Component
  ],
  imports: [
    CommonModule,
    MyModule2RoutingModule
  ]
})
export class MyModule2Module { }
