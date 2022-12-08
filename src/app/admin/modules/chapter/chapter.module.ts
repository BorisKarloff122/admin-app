import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChaptersListComponent } from "./components/chapters-list/chapters-list.component";
import {ChapterRoutingModule} from "./chapter-routing.module";
import {ChapterComponent} from "./components/chapter/chapter.component";



@NgModule({
  declarations: [
    ChapterComponent,
    ChaptersListComponent
  ],
  imports: [
    CommonModule,
    ChapterRoutingModule
  ]
})
export class ChapterModule { }
