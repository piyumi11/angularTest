import { ArticleBase } from '../article/article.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-content4',
  templateUrl: './article-content4.component.html',
  styleUrls: ['./article-content4.component.css']
})
export class ArticleContent4Component implements OnInit {

  articleFour : ArticleBase;
  
  constructor() { }

  ngOnInit() {
    this.articleFour = { 'title' : 'LAMP with CodeIgniter',
                         'lastUpdated' : 'April 19 2019' };
  }

}
