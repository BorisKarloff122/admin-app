import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {MainComponent} from "./components/main/main.component";
import {SettingsComponent} from "./components/settings/settings.component";
import {AddUserComponent} from "./components/add-user/add-user.component";
import {ChaptersListComponent} from "./components/chapters-list/chapters-list.component";

const routes: Routes = [
  {component: LoginComponent, pathMatch:"full", path:""},
  {component: MainComponent, pathMatch:"full", path:"/main"},
  {component: ChaptersListComponent, pathMatch:'full', path:"/chapters"},
  {component: SettingsComponent, pathMatch:'full', path:"/settings"},
  {component: AddUserComponent, pathMatch: "full", path:"/addUser"},
  {path:"*", redirectTo:""}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
