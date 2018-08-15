step 1> npm i ng-pick-datetime

step 2> npm install @angular/cdk

step 3> add these 2 import in app.module.ts
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

step 4> add the following modules in the imports array of app.module.ts
BrowserAnimationsModule,
    OwlDateTimeModule, 
    OwlNativeDateTimeModule