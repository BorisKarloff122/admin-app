import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"admin", pathMatch:'full', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
  {path:"", pathMatch:'full', loadChildren: () => import('./index/index.module').then(m => m.IndexModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
