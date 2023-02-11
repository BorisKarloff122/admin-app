import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CanLoadAdminGuard} from "./shared/guards/can-load-admin.guard";
import {CanActivateAdminGuard} from "./shared/guards/canactivate-admin.guard";

const routes: Routes = [

  {
    path:"",
    pathMatch:'full',
    loadChildren: () => import('./index/index.module').then(m => m.IndexModule),
  },
  {
    path:'control',
    pathMatch:'full',
    loadChildren: () => import('./admin-login/admin-login.module').then(m => m.AdminLoginModule),
  },
  {
    path:"admin",
    canLoad:[CanLoadAdminGuard],
    canActivate: [CanActivateAdminGuard],
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
