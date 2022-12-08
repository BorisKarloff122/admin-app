
import {NgModule} from "@angular/core";

import {FeedComponent} from "./modules/feed/components/feed/feed.component";
import {FormsComponent} from "./modules/forms/components/forms/forms.component";
import {GalleryComponent} from "./modules/gallery/components/gallery/gallery.component";
import {MainComponent} from "./shared/components/main/main.component";

import { LoginComponent } from './shared/components/login/login.component';

import {AdminRoutingModule} from "./admin-routing.module";

import { ChaptersListComponent } from './modules/chapter/components/chapters-list/chapters-list.component';
import { FormsListComponent } from './modules/forms/components/forms/forms-list/forms-list.component';
import { FormBuilderComponent } from './modules/forms/components/forms/form-builder/form-builder.component';
import {MaterialModule} from "../shared/modules/material.module";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import { AdminModalComponent } from './shared/components/admin-modal/admin-modal.component';


@NgModule({
  declarations: [
    MainComponent,
    LoginComponent,
    AdminModalComponent
  ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        MaterialModule,
        ReactiveFormsModule,
    ],
  exports:[],
  providers:[]

})

export class AdminModule {}
