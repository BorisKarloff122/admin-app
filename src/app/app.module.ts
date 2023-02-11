import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CanLoadAdminGuard} from "./shared/guards/can-load-admin.guard";
import {CanActivateAdminGuard} from "./shared/guards/canactivate-admin.guard";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    CanLoadAdminGuard,
    CanActivateAdminGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
