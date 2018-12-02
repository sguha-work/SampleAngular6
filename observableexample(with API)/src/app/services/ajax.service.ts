import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { HttpClient } from '@angular/common/http';
// import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class AjaxService {

  constructor(private http: HttpClient) { }

  public getData(url: string): any {
    const myobservable = Observable.create((observer: Observer<any>) => {
      // $.ajax({
      //   url: url,
      //   success: (data) => {
      //     observer.next(data);
      //   },
      //   error: (data) => {
      //     observer.error(data);
      //   }
      // });
      this.http.get(url).subscribe((data) => {
        observer.next(data);
      }, () => {
        // error
      }, () => {
        // complete
      });
    });
    return myobservable;
  }
}
