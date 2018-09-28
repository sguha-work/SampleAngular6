import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor() { }
  public checkEricssonEmail(control: AbstractControl) {
    if (control.value && control.value.indexOf('ericsson.com') === -1) {
      return { error: true };
    }
    return null;
  }
}
