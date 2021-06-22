import { ArticleBase } from '../article/article.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-content10',
  templateUrl: './article-content10.component.html',
  styleUrls: ['./article-content10.component.css']
})
export class ArticleContent10Component implements OnInit {

  articleTen : ArticleBase;
  
  constructor() { }

  ngOnInit() {
    this.articleTen = { 'title' : 'RGB, CMY, HSI Color conversion in python',
                         'lastUpdated' :  'June 13 2021' };
  }

}
