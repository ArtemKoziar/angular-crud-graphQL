import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../article.model';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss']
})
export class ArticleDetailsComponent implements OnInit, OnDestroy {
  public article: Article;
  constructor(private _route: ActivatedRoute) {
    console.log('constructor');
    this._route.data.subscribe(({article}) => {
      console.log(article);
      this.article = article;
    });

  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    console.log('destroy');
  }
}
