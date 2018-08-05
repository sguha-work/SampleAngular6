import { Injectable } from '@angular/core';
import {EventEmitter}from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  public event_studentData: any;
  constructor() {
    this.event_studentData = new EventEmitter();
  }
}
