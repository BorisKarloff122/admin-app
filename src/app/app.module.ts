import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./shared/modules/material.module";
import {CanLoadAdminGuard} from "./shared/guards/can-load-admin.guard";
import {CanActivateAdminGuard} from "./shared/guards/canactivate-admin.guard";
import {AdminLoginComponent} from "./shared/components/admin-login/admin-login.component";


@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [
    CanLoadAdminGuard,
    CanActivateAdminGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
