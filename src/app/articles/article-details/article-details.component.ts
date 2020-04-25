import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../article.model';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss']
})
export class ArticleDetailsComponent {
  public article: Article;

  constructor(private _articlesService: ArticlesService,
              private _router: Router) {
    if (!this._articlesService.editUser$.observers.length) {
      this._router.navigate(['/articles']);
    }
    this._articlesService.editUser$.asObservable().subscribe((article: Article) => {
      this.article = article;
    });

  }

  public saveChanges(): void {
    this._articlesService.updateArticle(this.article).subscribe(() => this._router.navigate(['/articles']));
  }

  public deleteArticle(): void {
    this._articlesService.removeArticle(this.article.id).subscribe(() => this._router.navigate(['/articles']));
  }
}
