import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyComponent3Component } from './components/my-component3/my-component3.component';
import { MyModule3RoutingModule } from './my-module3-routing.module';
@NgModule({
  declarations: [MyComponent3Component],
  exports: [
    MyComponent3Component
  ],
  imports: [
    CommonModule,
    MyModule3RoutingModule
  ]
})
export class MyModule3Module { }
