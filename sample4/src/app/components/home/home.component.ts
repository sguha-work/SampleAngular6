import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public model: any;

  constructor() { 
    this.model = {};
    this.model.cityName = "";
  }

  public callApi() {
    if(this.model.cityName!=="") {
      alert(this.model.cityName);
    }
    
  }

  ngOnInit() {
  }

}
