import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public tododata: any;
  constructor() { 
    this.tododata = null;
  }
}
