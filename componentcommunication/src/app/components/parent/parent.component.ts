import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  public parentData: string;
  public childData: string;
  constructor() {
    this.parentData = 'Hi! Parent';
  }

  ngOnInit() {
  }

}
