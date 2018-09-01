import {AbstractControl} from '@angular/forms';

export function validateOfficeEmail(controls: AbstractControl): any {
    if(!controls.value.includes('ericsson.com')) {
        return {"validOfficeEmail": true};
    }
    return null;
}