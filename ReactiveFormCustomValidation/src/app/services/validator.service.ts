import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor() { }
  public checkEricssonEmail(control: AbstractControl) {console.log(control);
    if (control.value && control.value.indexOf('ericsson.com') === -1) {
      return { messege: 'invalid email' };
    }
    return null;
  }
}
