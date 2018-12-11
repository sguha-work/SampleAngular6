import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyComponent1Component } from './components/my-component1/my-component1.component';

const routes: Routes = [
  {
    path: '',
    component: MyComponent1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyModule1RoutingModule { }
