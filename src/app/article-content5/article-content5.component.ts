import { ArticleBase } from '../article/article.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-content5',
  templateUrl: './article-content5.component.html',
  styleUrls: ['./article-content5.component.css']
})
export class ArticleContent5Component implements OnInit {

  articleThree : ArticleBase;
  
  constructor() { }

  ngOnInit() {
    this.articleThree = { 'title' : 'PHP login example',
                         'lastUpdated' : 'June 09 2019' };
  }

}
