import { Component, OnInit } from '@angular/core';
import {DataService} from './../../services/data.service';

@Component({
  selector: 'leftmenu',
  templateUrl: './leftmenu.component.html',
  styleUrls: ['./leftmenu.component.css']
})
export class LeftmenuComponent implements OnInit {
  public menuList: Array<any>;
  
  constructor(private ds: DataService) { 
    this.menuList = [
      {
        name:"banyan tree",
        description: "The banyan tree is our state tree",
        price: "Price is high",
      },
      {
        name:"guava tree",
        description: "this is a guava tree",
        price: ""
      },{
        name:"mango tree",
        description: "I like mango",
        price: ""
      },{
        name:"banana tree",
        description: "Hanuman eat banana",
        price: ""
      }
    ];
  }

  public setDataToDisplay(name: string) {
    this.ds.selectedMenuData = name;
  }
  
  ngOnInit() {
  }

}
