import { Component, OnInit } from '@angular/core';
//import {DataService} from './../../services/data.service';

import {EventService} from './../../services/event.service';

@Component({
  selector: 'centercontent',
  templateUrl: './centercontent.component.html',
  styleUrls: ['./centercontent.component.css']
})
export class CentercontentComponent implements OnInit {
  public description: string;
  constructor(private event: EventService) { }

  ngOnInit() {
    this.event.menudata_event.subscribe((data) => {console.log(data);
      this.description = data;
    });
  }

}
