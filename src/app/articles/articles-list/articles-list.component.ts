import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { Article } from '../article.model';
import { Apollo } from 'apollo-angular';
import { ArticleQuery } from '../article-query';
import { map } from 'rxjs/operators';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit {
  public articles: Article[];
  public newArticle: NgModel;

  constructor(private _articlesService: ArticlesService,
              private _apollo: Apollo,
              private _router: Router) {
  }

  ngOnInit(): void {
    this._getArticles();
  }

  /**
   * Get All Articles
   * @method _getArticles
   */
  private _getArticles(): void {
    this._apollo.watchQuery({query: ArticleQuery.Articles})
      .valueChanges.pipe(
      map((result: any) => result.data.users)
    ).subscribe((data) => this.articles = data);
  }

  public createArticle(): void {
    if (!this.newArticle) { return; }
    this._articlesService.createArticle(this.newArticle).subscribe(this.newArticle = null);
  }

  public editArticle(article: Article): void {
    this._articlesService.editUser$.next(article);
    this._router.navigate([`/article/${article.id}`]);
  }

  public deleteArticle(id: string): void {
    this._articlesService.removeArticle(id).subscribe();
  }
}
