import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminListComponent} from "../../components/admin-list/admin-list.component";
import {AdminHeaderComponent} from "../../components/admin-header/admin-header.component";
import {AdminMenuComponent} from "../../components/admin-menu/admin-menu.component";
import {AdminModalComponent} from "../../components/admin-modal/admin-modal.component";
import {MaterialModule} from "../../../../shared/modules/material.module";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    AdminListComponent,
    AdminHeaderComponent,
    AdminMenuComponent,
    AdminModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
  ],
  exports:[
    AdminListComponent,
    AdminHeaderComponent,
    AdminMenuComponent,
    AdminModalComponent
  ]
})
export class AdminSharedModule { }
