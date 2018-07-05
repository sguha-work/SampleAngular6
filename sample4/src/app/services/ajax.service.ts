import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class AjaxService {

  constructor(private http: HttpClient) { }

  public get(url: string, data?: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(url, data).subscribe((data: any) => {
        resolve(data);
      }, (error) => {
        reject(error);
      })
    });
  }
}