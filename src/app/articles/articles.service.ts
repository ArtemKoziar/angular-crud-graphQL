import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Article } from './article.model';

@Injectable()
export class ArticlesService {

  constructor(private _http: HttpClient) {
  }

  public getAllArticles(): Observable<Article[]> {
    return of([{
      id: '1',
      name: 'Article'
    }, {
      id: '2',
      name: 'Article'
    }, {
      id: '3',
      name: 'Article'
    }]);
  }

  public getArticle(id: string): Observable<Article> {
    return of({
      id,
      name: 'Article'
    });
  }
}

@Injectable()
export class ArticleResolver implements Resolve<Article> {

  constructor(private _articlesService: ArticlesService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Article> {
    const id = route.paramMap.get('id');
    return this._articlesService.getArticle(id);
  }
}
