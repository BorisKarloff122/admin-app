import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminLoginComponent} from "./shared/components/admin-login/admin-login.component";
import {CanActivateAdminGuard} from "./shared/guards/canactivate-admin.guard";
import {CanLoadAdminGuard} from "./shared/guards/can-load-admin.guard";

const routes: Routes = [
  {
    path:'control',
    pathMatch:"full",
    component: AdminLoginComponent
  },

  {
    path:"admin",
    pathMatch:'full',
    canActivate: [CanActivateAdminGuard],
    canLoad: [CanLoadAdminGuard],
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },

 // {path:"", pathMatch:'full', loadChildren: () => import('./index/index.module').then(m => m.IndexModule)}
  {path:"",redirectTo: "admin", pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
