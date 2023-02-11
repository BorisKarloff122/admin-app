import {NgModule} from "@angular/core";
import {AdminRoutingModule} from "./admin-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {AdminMainComponent} from "./shared/components/main/main.component";
import {MaterialModule} from "../shared/modules/material.module";
import {AdminSharedModule} from "./shared/modules/admin-shared/admin-shared.module";



@NgModule({
  declarations: [
    AdminMainComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    MaterialModule,
    AdminSharedModule
  ],

  providers: []
})

export class AdminModule {}
