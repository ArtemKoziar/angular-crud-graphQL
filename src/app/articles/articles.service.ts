import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, ReplaySubject } from 'rxjs';
import { AddResponse, Article, RemoveResponse } from './article.model';
import { ArticleQuery } from './article-query';
import { Apollo } from 'apollo-angular';
import { NgModel } from '@angular/forms';

@Injectable()
export class ArticlesService {
  public editUser$: ReplaySubject<Article> = new ReplaySubject(null);

  constructor(private _apollo: Apollo) {
  }

  /**
   * Create Article
   * @param name     Name of Article
   */
  public createArticle(name: NgModel): Observable<any> {
    return this._apollo
      .mutate({
        mutation: ArticleQuery.addArticle,
        variables: {
          name
        },
        update: (proxy, {data: {addUser}}: AddResponse) => {
          // Read the data from our cache for this query.
          const data: any = proxy.readQuery({query: ArticleQuery.Articles});

          data.users.push(addUser);

          // Write our data back to the cache.
          proxy.writeQuery({query: ArticleQuery.Articles, data});
        }
      });
  }

  /**
   * Update Article
   * @param article - Article to update
   */
  public updateArticle({id, name}: Article): Observable<any> {
    return this._apollo
      .mutate({
        mutation: ArticleQuery.updateArticle,
        variables: {id, name}
      });
  }

  /**
   * Remove Article
   * @param id - Article's id
   */
  public removeArticle(id: string): Observable<any> {
    return this._apollo
      .mutate({
        mutation: ArticleQuery.removeArticle,
        variables: {
          id
        },
        update: (proxy, {data: {removeUser}}: RemoveResponse) => {
          // Read the data from our cache for this query.
          const data: any = proxy.readQuery({query: ArticleQuery.Articles});

          const index = data.users.map((x) => x.id).indexOf(id);

          data.users.splice(index, 1);

          // Write our data back to the cache.
          proxy.writeQuery({query: ArticleQuery.Articles, data});
        }
      });
  }
}
