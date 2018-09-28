import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'form-component',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public fg: FormGroup;
  constructor(private fb: FormBuilder) {
    this.fg = fb.group({
      'name': [null, Validators.compose([Validators.required, Validators.minLength(5)])],
      'email': [null, Validators.compose([Validators.required, Validators.email])],
      'phoneNumber': [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])]
    });
  }

  public submitForm(value) {
    console.log(value);
    // this.formx.invalid;
  }

  ngOnInit() {
  }

}
