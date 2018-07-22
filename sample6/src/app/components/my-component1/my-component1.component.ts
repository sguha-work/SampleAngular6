import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-component1',
  templateUrl: './my-component1.component.html',
  styleUrls: ['./my-component1.component.css']
})
export class MyComponent1 implements OnInit {
  
  public displayImage: boolean;
  
  constructor() { 
    this.displayImage = true;
  }
  showHide() {
    if(this.displayImage == true) {
      this.displayImage = false;
    } else {
      this.displayImage = true;
    }
  }
  ngOnInit() {
  }

}
