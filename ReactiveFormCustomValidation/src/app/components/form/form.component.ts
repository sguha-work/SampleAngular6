import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { CheckEricssonEmail } from './../../custom/validators';
import {DataService} from './../../services/data.service';
@Component({
  selector: 'form-component',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public fg: FormGroup;
  constructor(private fb: FormBuilder, private ds: DataService) {
    this.fg = fb.group({
      'name': [null, Validators.compose([Validators.required, Validators.minLength(5)])],
      'email': [null, Validators.compose([Validators.required, Validators.email, CheckEricssonEmail])],
      'phoneNumber': [null, Validators.compose([Validators.required, Validators.pattern(/^\d+$/),
        Validators.minLength(10), Validators.maxLength(10)])]
    });
  }

  public submitForm(value) {
    console.log(value);
    // this.formx.invalid;
    this.ds.dataList.push(value);
  }

  ngOnInit() {
  }

}
