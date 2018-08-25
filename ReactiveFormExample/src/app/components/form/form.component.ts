import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public formx: FormGroup;
  constructor(private fb: FormBuilder) { 
    this.formx = fb.group({
      "firstName": [null, Validators.compose([Validators.required, Validators.minLength(5)])],
      "lastName": [null, Validators.required],
      "phoneNumber": [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],
      "password": [null, Validators.compose([Validators.required, Validators.minLength(5)])]
    });
  }

  public checkPassword(password) {
    console.log("password "+password);
  }
  public submitForm(value) {
    console.log(value);
    //this.formx.invalid;
  }

  ngOnInit() {
  }

}
