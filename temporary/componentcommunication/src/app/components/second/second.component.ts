import { Component, OnInit } from '@angular/core';
import {DataService} from './../../services/data.service';
@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor(public data: DataService) { }

  ngOnInit() {
  }

}
