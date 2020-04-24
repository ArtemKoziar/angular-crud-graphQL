import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { Observable } from 'rxjs';
import { Article } from '../article.model';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit {
  public articles$: Observable<Article[]>;
  constructor(private _articlesService: ArticlesService) { }

  ngOnInit(): void {
    this.articles$ = this._articlesService.getAllArticles();
  }

}
