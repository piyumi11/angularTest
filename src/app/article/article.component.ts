import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input()
  data: ArticleBase;
  
  constructor() { }

  ngOnInit() {
    
  }

  ngOnChanges(changes: SimpleChanges) {
    
  }
}

export interface ArticleBase {
    title: string,
    lastUpdated: string
}
