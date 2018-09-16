import { Component, OnInit } from '@angular/core';
import {DataService} from './../../services/data.service'
@Component({
  selector: 'app-tablecomponent',
  templateUrl: './tablecomponent.component.html',
  styleUrls: ['./tablecomponent.component.css']
})
export class TablecomponentComponent implements OnInit {

  constructor(public data: DataService) { }

  ngOnInit() {
  }

}
