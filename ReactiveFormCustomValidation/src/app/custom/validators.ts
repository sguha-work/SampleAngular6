import { AbstractControl } from '@angular/forms';

export function CheckEricssonEmail(control: AbstractControl) {
  if (control.value && control.value.indexOf('ericsson.com') === -1) {
    return { error: true };
  }
  return null;
}
