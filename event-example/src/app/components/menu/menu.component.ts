import { Component, OnInit, AfterViewInit } from '@angular/core';
import { EventService } from './../../services/event.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, AfterViewInit {
  public menuData: Array<Object>;
  constructor(private customEvent: EventService) {
    this.menuData = [
      {
        heading: 'Menu 1',
        names: [
          'Sub menu 1',
          'Sub menu 2'
        ]
      },
      {
        heading: 'Menu 2',
        names: [
          'Sub menu 1',
          'Sub menu 2'
        ]
      },
      {
        heading: 'Menu 3',
        names: [
          'Sub menu 1',
          'Sub menu 2'
        ]
      },
      {
        heading: 'Menu 4'
      }
    ];
  }

  public primaryMenuClicked(menuName: string) {
    this.customEvent.event_MenuClicked.emit(menuName);
  }
  public secondaryMenuClicked(menuName: string, event: Event) {
    this.customEvent.event_MenuClicked.emit(menuName);
    event.stopPropagation();
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    alert($('.submenu').length);
  }

}
