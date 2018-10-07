import { Component, AfterViewInit } from '@angular/core';
import {DataService} from './services/data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'ReactiveFormCustomValidation';
  constructor(public ds: DataService) {

  }
  ngAfterViewInit() {

  }
}
