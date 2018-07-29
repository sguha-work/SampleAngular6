import { Injectable } from '@angular/core';
import {EventEmitter}from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  public menudata_event: EventEmitter<any>;
  constructor() { 
    this.menudata_event = new EventEmitter();
  }
}
