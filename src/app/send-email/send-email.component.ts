import { Component, OnInit, Input } from '@angular/core';
import { escape } from 'querystring';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css']
})
export class SendEmailComponent implements OnInit {

  @Input()
  articleTitle : string;
  
  constructor() { }

  ngOnInit() {
  }

  sendMail(response) {
    let link = 'mailto:piyumik11@gmail.com' +
             '?cc=piyumi.rajapaksha@auxenta.com' +
             '&subject=User Feedback on piyumi11.github.io' +
             '&body=' + this.articleTitle +
             '%0D%0A' + ' Was this article helpful?' + response;

    window.location.href = link;
  }
}
