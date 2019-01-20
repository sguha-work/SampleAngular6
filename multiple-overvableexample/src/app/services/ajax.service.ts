import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';

import { Todo } from './../interfaces/todo';
@Injectable({
  providedIn: 'root'
})
export class AjaxService {

  constructor(private http: HttpClient) { }

  public callURLs(urls: Array<String>): Observable<any> {
    const myobservable = Observable.create((observer: Observer<any>) => {
      const urlslength: Number = urls.length;
      let counter: any = 0;
      for (const key of Object.keys(urls)) {
        const url = urls[key];
        this.http.get(url).subscribe((data) => {
          // success
          observer.next(data as Array<Todo>);
        }, (error) => {
          // error
          observer.next(error);
        }, () => {
          // complete
          counter++;
          if (counter === urlslength) {
            observer.complete();
          }
        });
      }

    });
    return myobservable;
  }
}
