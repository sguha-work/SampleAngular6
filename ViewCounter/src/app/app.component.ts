import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public counter: Number;
  constructor() {
    if (typeof localStorage.viewCounter === 'undefined') {
      localStorage.viewCounter = 0;
    }
    this.counter = localStorage.viewCounter;
  }
  ngOnInit() {
    if (typeof localStorage.viewCounter === 'undefined') {
      localStorage.viewCounter = parseInt(localStorage.viewCounter, 10) + 1;
    }
    this.counter = localStorage.viewCounter;
  }
}
