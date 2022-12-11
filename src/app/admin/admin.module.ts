import {NgModule} from "@angular/core";
import {AdminRoutingModule} from "./admin-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import { AdminModalComponent } from './shared/components/admin-modal/admin-modal.component';
import {HttpClientModule} from "@angular/common/http";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {AdminMainComponent} from "./shared/components/main/main.component";



@NgModule({
  declarations: [
    AdminMainComponent,
    AdminModalComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MatCheckboxModule,
  ],
  exports:[],
  providers: []
})

export class AdminModule {}
