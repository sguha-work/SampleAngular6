import { Component, OnInit } from '@angular/core';
import {DataService} from "./../../services/data.service";
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(public data: DataService) { }

  ngOnInit() {
  }

}
