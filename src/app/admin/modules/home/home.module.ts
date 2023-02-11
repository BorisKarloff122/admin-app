import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from "./home-routing.module";
import {AdminSharedModule} from "../../shared/modules/admin-shared/admin-shared.module";

@NgModule({
  declarations: [
    HomeComponent
  ],
    imports: [
        HomeRoutingModule,
        CommonModule,
        AdminSharedModule
    ]
})
export class HomeModule { }
