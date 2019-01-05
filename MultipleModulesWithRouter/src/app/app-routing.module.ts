import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { MyModule1Module } from './my-module1/my-module1.module';
// import { MyModule2Module } from './my-module2/my-module2.module';
// import { MyModule3Module } from './my-module3/my-module3.module';

const routes: Routes = [
  {
    path: 'mycomponent1',
    loadChildren: './my-module1/my-module1.module#MyModule1Module' // () => MyModule1Module
  },
  {
    path: 'mycomponent2',
    loadChildren: './my-module2/my-module2.module#MyModule2Module' // () => MyModule2Module
  },
  {
    path: 'mycomponent3',
    loadChildren: './my-module3/my-module3.module#MyModule3Module'// () => MyModule3Module
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
