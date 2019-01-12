import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public dataArray: Array<Object>;
  constructor() {
    this.dataArray = [];
  }
}
