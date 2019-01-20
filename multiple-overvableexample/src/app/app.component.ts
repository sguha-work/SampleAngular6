import { Component } from '@angular/core';
import { OnInit, AfterViewInit } from '@angular/core';
import { AjaxService } from './services/ajax.service';
import { Todo } from './interfaces/todo';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'overvableexample';
  public model: Array<any>;
  constructor(private ajax: AjaxService) {
    this.model = new Array();
  }
  ngOnInit() {

  }
  ngAfterViewInit() {
    let mainArray: Array<Todo>;
    mainArray = new Array();
    const urls: Array<String> = [
      'http://jsonplaceholder.typicode.com/todos/',
      'http://jsonplaceholder.typicode.com/todos/',
      'http://jsonplaceholder.typicode.com/todos/',
      'http://jsonplaceholder.typicode.com/todos/',
      'http://jsonplaceholder.typicode.com/todos/'
    ];
    this.ajax.callURLs(urls).subscribe((data) => {
      // sucess
      for (let index = 0; index < data.length; index++) {
        mainArray.push(data[index]);
      }
    }, () => {
      // error
    }, () => {
      // complete
      console.log('all urls call complete');
      this.makePrintableData(mainArray);
    });
  }
  makePrintableData(dataArray: Array<Todo>) {
    for (let index = 0; index < dataArray.length; index++) {
      this.model.push(dataArray[index]);
      if (typeof dataArray[index].completed !== 'undefined' && dataArray[index].completed === true) {
        this.model[index].completed = 'Yes';
      } else {
        this.model[index].completed = 'No';
      }
    }
  }
}
