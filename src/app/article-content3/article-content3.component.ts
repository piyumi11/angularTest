import { ArticleBase } from '../article/article.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-content3',
  templateUrl: './article-content3.component.html',
  styleUrls: ['./article-content3.component.css']
})
export class ArticleContent3Component implements OnInit {

  articleThree : ArticleBase;
  
  constructor() { }

  ngOnInit() {
    this.articleThree = { 'title' : 'Containerization and Docker',
                         'lastUpdated' : 'October 02 2018' };
  }

}
