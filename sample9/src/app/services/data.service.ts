import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public studentData: Array<any>;
  constructor() { 
    this.studentData = new Array();
  }
}
