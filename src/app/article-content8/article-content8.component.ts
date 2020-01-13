import { ArticleBase } from '../article/article.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-content8',
  templateUrl: './article-content8.component.html',
  styleUrls: ['./article-content8.component.css']
})
export class ArticleContent8Component implements OnInit {

  articleEight : ArticleBase;
  
  constructor() { }

  ngOnInit() {
    this.articleEight = { 'title' : 'CodeIgniter and PHP Session',
                         'lastUpdated' : 'January 12 2020' };
  }

}
