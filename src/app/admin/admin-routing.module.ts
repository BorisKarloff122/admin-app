import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminMainComponent} from "./shared/components/main/main.component";

const routes: Routes = [
  {
    path:"",
    component: AdminMainComponent,
  },
  {
    path: "chapters",
    pathMatch:'full',
    loadChildren: () => import('./modules/chapter/chapter.module').then(m => m.ChapterModule)
  },
  {
    path: "forms",
    pathMatch:'full',
    loadChildren: () => import('./modules/forms/forms.module').then(m => m.FormsModule)
  },
  {
    path: "feed",
    pathMatch:'full',
    loadChildren: () => import('./modules/feed/feed.module').then(m => m.FeedModule)
  },
  {
    path: "galleries",
    pathMatch:'full',
    loadChildren: () => import('./modules/gallery/gallery.module').then(m => m.GalleryModule)
  },
  {
    path: "users",
    pathMatch:'full',
    loadChildren: () => import('./modules/users-management/users-management.module').then(m => m.UsersManagementModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
