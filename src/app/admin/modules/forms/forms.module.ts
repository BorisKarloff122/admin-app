import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsComponent} from "./components/forms/forms.component";
import {FormsRoutingModule} from "./forms-routing.module";



@NgModule({
  declarations: [
    FormsComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule
  ]
})
export class FormsModule { }
