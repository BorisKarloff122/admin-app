import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminMainComponent } from "./shared/components/main/main.component";

const routes: Routes = [

  {
    path: "",
    component: AdminMainComponent,
    children:[
      {
        path: 'home',
        pathMatch:'full',
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
        outlet:'admin'
      },
      {
        path: "chaps",
        pathMatch: 'full',
        loadChildren: () => import('./modules/chapter/chapter.module').then(m => m.ChapterModule),
        outlet: 'admin',
      },
      {
        path: "forms",
        pathMatch: 'full',
        loadChildren: () => import('./modules/forms/forms.module').then(m => m.FormsModule),
        outlet: 'admin',
      },
      {
        path: "feed",
        pathMatch: 'full',
        loadChildren: () => import('./modules/feed/feed.module').then(m => m.FeedModule),
        outlet: 'admin',
      },
      {
        path: "galleries",
        pathMatch: 'full',
        loadChildren: () => import('./modules/gallery/gallery.module').then(m => m.GalleryModule),
        outlet: 'admin',
      },
      {
        path: "users",
        pathMatch: 'full',
        loadChildren: () => import('./modules/users-management/users-management.module').then(m => m.UsersManagementModule),
      }]}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
