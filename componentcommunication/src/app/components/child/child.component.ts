import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  public childData: string;
  @Input() parentData: string;
  constructor() {
    this.childData = 'Hi! Child';
  }

  ngOnInit() {
  }

}
