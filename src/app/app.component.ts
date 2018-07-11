import { Component } from '@angular/core';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
  
export class AppComponent {
  
  someProperty:string = '';
  
  constructor(private dataService:DataService) {

  }
  
  ngOnInit() {
    console.log(this.dataService.cars);

    this.someProperty = this.dataService.myData();
  }
  
  title = 'Hi .. Welcome to AngularJs 4';
  // myArr = ['him','hers','yours','theirs'];
  angularLogo = '../assets/download.png';
  buttonStatus = 'enabled';
  myEvent(event) {
    console.log(event);
  }
}
