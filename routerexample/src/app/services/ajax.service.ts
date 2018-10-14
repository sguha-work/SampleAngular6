import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class AjaxService {

  constructor(private http: HttpClient) { }

  public get(url: string, dataToSend?: any): Promise<any> {
    const promise = new Promise((resolve, reject) => {
      this.http.get(url, dataToSend).subscribe((data: any) => {
        resolve(data);
      }, (error) => {
        reject(error);
      });
    });
    return promise;
  }
}
