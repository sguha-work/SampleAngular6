import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyComponent3Component } from './components/my-component3/my-component3.component';

const routes: Routes = [
  {
    path: '',
    component: MyComponent3Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyModule3RoutingModule { }
