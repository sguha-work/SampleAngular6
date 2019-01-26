import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class EventService {
  public event_MenuClicked: any;
  constructor() {
    this.event_MenuClicked = new EventEmitter();
  }
}
