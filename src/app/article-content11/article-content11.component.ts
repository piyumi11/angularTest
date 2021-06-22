import { ArticleBase } from '../article/article.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-content11',
  templateUrl: './article-content11.component.html',
  styleUrls: ['./article-content11.component.css']
})
export class ArticleContent11Component implements OnInit {

  articleEleven : ArticleBase;
  
  constructor() { }

  ngOnInit() {
    this.articleEleven = { 'title' : 'OpenGL clock',
                         'lastUpdated' :  'June 22 2021' };
  }

}
