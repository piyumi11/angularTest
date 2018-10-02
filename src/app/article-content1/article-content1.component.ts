import { ArticleBase } from '../article/article.component';
import { Component, OnInit } from '@angular/core';
import { escape } from 'querystring';

@Component({
  selector: 'app-article-content1',
  templateUrl: './article-content1.component.html',
  styleUrls: ['./article-content1.component.css']
})
export class ArticleContent1Component implements OnInit {

  articleOne : ArticleBase;
  
  constructor() { }

  ngOnInit() {
    this.articleOne = { 'title' : 'Jersey 2 REST web service Hello World Application.',
                        'lastUpdated' : 'July 26 2018' };
  }  

}
