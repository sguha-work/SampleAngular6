import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { MyComponent1Component } from './my-module1/components/my-component1/my-component1.component';
// import { MyComponent2Component } from './my-module2/components/my-component2/my-component2.component';
// import { MyComponent3Component } from './my-module3/components/my-component3/my-component3.component';

const routes: Routes = [
  {
    path: 'mycomponent1',
    loadChildren: './my-module1/my-module1.module#MyModule1Module'
  },
  {
    path: 'mycomponent2',
    loadChildren: './my-module2/my-module2.module#MyModule2Module'
  },
  {
    path: 'mycomponent3',
    loadChildren: './my-module3/my-module3.module#MyModule3Module'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
