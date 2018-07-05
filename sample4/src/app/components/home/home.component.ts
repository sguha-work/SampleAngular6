import { Component, OnInit } from '@angular/core';

import {AjaxService} from './../../services/ajax.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public model: any;

  constructor(private ajax: AjaxService) { 
    this.model = {};
    this.model.cityName = "";
    this.model.cityWeatherData = false;
  }

  private showError(messege?: String) {
    alert(messege);
    this.model.cityWeatherData = false;
  }

  public convertTimeStampToDate(unixtime: number): string {

    let u = new Date(unixtime*1000);

      return u.getUTCFullYear() +
        '-' + ('0' + u.getUTCMonth()).slice(-2) +
        '-' + ('0' + u.getUTCDate()).slice(-2) + 
        ' ' + ('0' + u.getUTCHours()).slice(-2) +
        ':' + ('0' + u.getUTCMinutes()).slice(-2) +
        ':' + ('0' + u.getUTCSeconds()).slice(-2) +
        '.' + (u.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) ;
    }

    public convertKelvinToCelcius(valNum: number):number {
        valNum = valNum-273.15;
        return valNum;
    }

  public callApi() {
    if(this.model.cityName!=="") {
      this.ajax.get("http://api.openweathermap.org/data/2.5/forecast/daily?q="+this.model.cityName+"&APPID=b35e5e51128992747a9393ab8ba53b8b").then((data) => {
        if(data.cod === "404") {
          this.showError("We cant find the city name");
          this.model.cityWeatherData = false;
        } else {
          this.model.cityWeatherData = data;
        }
      }).catch(() => {
        this.showError("Unable to get information");
      });
    }
    
  }

  ngOnInit() {
  }

}
