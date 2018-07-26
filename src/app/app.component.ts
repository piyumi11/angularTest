import { ArticleComponent, ArticleBase } from './article/article.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
  
export class AppComponent {
  
  articleOne : ArticleBase;
  
  constructor() {
    
  }
  
  ngOnInit() {  
    
     this.articleOne = { "title" : "Jersey 2 REST web service Hello World Appication." };
    
  }
    
}
