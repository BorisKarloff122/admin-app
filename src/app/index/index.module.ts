import {NgModule} from "@angular/core";
import {ChapterComponent} from "./components/chapter/chapter.component";
import {BlogComponent} from "./components/blog/blog.component";
import {ArticleComponent} from "./components/newsfeed/article/article.component";
import {FeedBlockComponent} from "./components/newsfeed/feed-block/feed-block.component";
import {FormBuilderComponent} from "./components/forms/form-builder/form-builder.component";
import {SliderComponent} from "./components/slider/slider.component";
import {GalleryComponent} from "./components/gallery/gallery.component";
import {IndexRoutingModule} from "./index-routing.module";

@NgModule({
  declarations: [
    ChapterComponent,
    BlogComponent,
    GalleryComponent,
    FeedBlockComponent,
    ArticleComponent,
    SliderComponent,
    FormBuilderComponent,
  ],
  imports: [
    IndexRoutingModule
  ],
  providers: [],
  exports:[]
})
export class IndexModule{}
