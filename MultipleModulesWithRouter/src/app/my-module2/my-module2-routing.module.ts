import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyComponent2Component } from './components/my-component2/my-component2.component';

const routes: Routes = [
  {
    path: '',
    component: MyComponent2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyModule2RoutingModule { }
