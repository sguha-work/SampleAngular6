import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyComponent1Component } from './components/my-component1/my-component1.component';
import { MyModule1RoutingModule } from './my-module1-routing.module';

@NgModule({
  declarations: [MyComponent1Component],
  exports: [
    MyComponent1Component
  ],
  imports: [
    CommonModule,
    MyModule1RoutingModule
  ]
})
export class MyModule1Module { }
