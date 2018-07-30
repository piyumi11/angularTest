import { Component, OnInit } from '@angular/core';
import { escape } from 'querystring';

@Component({
  selector: 'app-article-content1',
  templateUrl: './article-content1.component.html',
  styleUrls: ['./article-content1.component.css']
})
export class ArticleContent1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  public sendMail() {
    var link = "mailto:piyumi11@gmail.com"
             "?cc=piyumi.rajapaksha@auxenta.com"
             "&subject=" + escape("This is my subject")
             "&body=" + escape("Test")

    window.location.href = link;
  }

}
