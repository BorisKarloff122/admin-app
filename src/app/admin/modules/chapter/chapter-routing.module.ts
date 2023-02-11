import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChaptersListComponent} from "./components/chapters-list/chapters-list.component";
import {ChapterComponent} from "./components/chapter/chapter.component";


const routes: Routes = [
  {path:"", component: ChaptersListComponent, pathMatch:"full"},
  {path:"details:id" , component: ChapterComponent, pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChapterRoutingModule { }
