import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyComponent2Component } from './components/my-component2/my-component2.component';

@NgModule({
  declarations: [MyComponent2Component],
  exports: [
    MyComponent2Component
  ],
  imports: [
    CommonModule
  ]
})
export class MyModule2Module { }
