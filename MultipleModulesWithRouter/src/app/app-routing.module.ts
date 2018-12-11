import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyComponent1Component } from './my-module1/components/my-component1/my-component1.component';
import { MyComponent2Component } from './my-module2/components/my-component2/my-component2.component';
import { MyComponent3Component } from './my-module3/components/my-component3/my-component3.component';

const routes: Routes = [
  {
    path: 'mycomponent1',
    component: MyComponent1Component
  },
  {
    path: 'mycomponent2',
    component: MyComponent2Component
  },
  {
    path: 'mycomponent3',
    component: MyComponent3Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
