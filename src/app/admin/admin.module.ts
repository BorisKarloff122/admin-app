
import {NgModule} from "@angular/core";

import {FeedComponent} from "./components/feed/feed.component";
import {FormsComponent} from "./components/forms/forms.component";
import {GalleryComponent} from "./components/gallery/gallery.component";
import {MainComponent} from "./components/main/main.component";
import {SettingsComponent} from "./components/settings/settings.component";
import { LoginComponent } from './components/login/login.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { EditChapComponent } from './components/chapter/edit-chap/edit-chap.component';
import {AdminRoutingModule} from "./admin-routing.module";
import {ChapSettingsComponent} from "./components/chapter/chap-settings/chap-settings.component";
import { ChaptersListComponent } from './components/chapters-list/chapters-list.component';
import { FormsListComponent } from './components/forms/forms-list/forms-list.component';
import { FormBuilderComponent } from './components/forms/form-builder/form-builder.component';
import {MaterialModule} from "../shared/modules/material.module";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    ChapSettingsComponent,
    FeedComponent,
    FormsComponent,
    GalleryComponent,
    MainComponent,
    SettingsComponent,
    LoginComponent,
    AddUserComponent,
    EditChapComponent,
    ChaptersListComponent,
    FormsListComponent,
    FormBuilderComponent
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
