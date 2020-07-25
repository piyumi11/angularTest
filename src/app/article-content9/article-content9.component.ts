import { ArticleBase } from '../article/article.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-content9',
  templateUrl: './article-content9.component.html',
  styleUrls: ['./article-content9.component.css']
})
export class ArticleContent9Component implements OnInit {

  articleNine : ArticleBase;
  
  constructor() { }

  ngOnInit() {
    this.articleNine = { 'title' : 'PDF library for CodeIgniter ',
                         'lastUpdated' :  'March 01 2020' };
  }

}
