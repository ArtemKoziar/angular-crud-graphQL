import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { ArticlesRouting } from './articles-routing.module';
import { ArticlesService } from './articles.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ArticlesListComponent,
    ArticleDetailsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ArticlesRouting
  ],
  providers: [
    ArticlesService
  ]
})
export class ArticlesModule { }
