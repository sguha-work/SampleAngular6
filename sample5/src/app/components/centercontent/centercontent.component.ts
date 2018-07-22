import { Component, OnInit } from '@angular/core';
import {DataService} from './../../services/data.service';

@Component({
  selector: 'centercontent',
  templateUrl: './centercontent.component.html',
  styleUrls: ['./centercontent.component.css']
})
export class CentercontentComponent implements OnInit {

  constructor(public ds: DataService) { }

  ngOnInit() {
  }

}
