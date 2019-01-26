import { Component, OnInit, AfterViewInit } from '@angular/core';
import { EventService } from './../../services/event.service';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit, AfterViewInit {
  public model: String;
  constructor(private customEvent: EventService) {
    this.model = 'no';
  }

  ngOnInit() {

  }
  ngAfterViewInit() {
    this.customEvent.event_MenuClicked.subscribe((data) => {
      this.model = data;
    });
  }

}
