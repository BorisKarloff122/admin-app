import {NgModule} from "@angular/core";
import {MainComponent} from "./shared/components/main/main.component";
import {AdminRoutingModule} from "./admin-routing.module";
import {MaterialModule} from "../shared/modules/material.module";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import { AdminModalComponent } from './shared/components/admin-modal/admin-modal.component';
import {HttpClientModule} from "@angular/common/http";
import {MatCheckboxModule} from "@angular/material/checkbox";



@NgModule({
  declarations: [
    MainComponent,
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
