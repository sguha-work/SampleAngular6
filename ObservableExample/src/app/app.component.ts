import { Component } from '@angular/core';
import {OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Observer} from 'rxjs';
// import 'rxjs/Rx';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    const myobservable = Observable.create((observer: Observer<any>) => {
      setTimeout(() => {
        observer.next('First timeout done');
      }, 2000);
      setTimeout(() => {
        observer.next('Second timeout done');
      }, 4000);
      setTimeout(() => {
        observer.next('Third timeout done');
      }, 6000);
      setTimeout(() => {
        observer.complete();
      }, 10000);
      setTimeout(() => {
        // observer.error('All done but still error');
      }, 8000);
    });

    myobservable.subscribe((data: string) => {
      console.log(data);
    }, (error: string) => {
      // error
      console.log('Error occured with messege ' + error);
    }, () => {
      // complete
      console.log('complete');
    });
  }
}
