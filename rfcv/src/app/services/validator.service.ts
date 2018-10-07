import { Injectable } from '@angular/core';
import {AbstractControl} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor() { }

  public checkEricssonMail(element: AbstractControl) {
    if (element.value && element.value.indexOf('ericsson.com') === -1) {
      return {xyz: 'error'};
    } else {
      return null;
    }
  }
}
