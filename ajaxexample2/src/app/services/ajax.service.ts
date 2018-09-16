import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AjaxService {

  constructor(private http: HttpClient) { 

  }

  public get(url: string): Promise<any> {
    let p = new Promise((resolve, reject) => {
      this.http.get(url).subscribe((data) => {
        if(data==null) {
          reject();
        } else {
          resolve(data);
        }
      });
    });
    return p;
  }
}
