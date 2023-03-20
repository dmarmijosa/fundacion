import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'app',
    loadChildren: ()=> import('./pages/pages-routing.module').then(m=> m.PagesRoutingModule),
    pathMatch:'prefix'
  },
  {
    path:'**',
    redirectTo:'/app/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
