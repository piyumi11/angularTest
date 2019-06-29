import { ArticleBase } from '../article/article.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-content6',
  templateUrl: './article-content6.component.html',
  styleUrls: ['./article-content6.component.css']
})
export class ArticleContent6Component implements OnInit {

  articleThree : ArticleBase;
  
  constructor() { }

  ngOnInit() {
    this.articleThree = { 'title' : 'Java Design Pattern examples',
                         'lastUpdated' : 'June 28 2019' };
  }

}
