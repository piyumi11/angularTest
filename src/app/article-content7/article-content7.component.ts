import { ArticleBase } from '../article/article.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-content7',
  templateUrl: './article-content7.component.html',
  styleUrls: ['./article-content7.component.css']
})
export class ArticleContent7Component implements OnInit {

  articleSeven : ArticleBase;
  
  constructor() { }

  ngOnInit() {
    this.articleSeven = { 'title' : 'Unified Modeling Language 2.5.1',
                         'lastUpdated' : 'July 20 2019' };
  }

}
