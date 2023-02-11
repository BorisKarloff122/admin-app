import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChapterComponent } from "./components/chapter/chapter.component";

const routes: Routes = [
  {
    path: '',
    component: ChapterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
