import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FeedComponent} from "./components/feed/feed.component";
import {FeedRoutingModule} from "./feed-routing.module";



@NgModule({
  declarations: [
    FeedComponent
  ],
  imports: [
    CommonModule,
    FeedRoutingModule
  ]
})
export class FeedModule { }
