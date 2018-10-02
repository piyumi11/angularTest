import { ArticleBase } from '../article/article.component';
import { Component, OnInit } from '@angular/core';
import { escape } from 'querystring';

@Component({
  selector: 'app-article-content2',
  templateUrl: './article-content2.component.html',
  styleUrls: ['./article-content2.component.css']
})
export class ArticleContent2Component implements OnInit {

  articleTwo : ArticleBase;
  
  constructor() { }

  ngOnInit() {
    this.articleTwo = { 'title' : 'Spring Framework : Spring MVC and Spring Boot.',
                         'lastUpdated' : 'August 11 2018' };
  }

}
