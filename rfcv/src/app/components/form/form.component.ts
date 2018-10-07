import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ValidatorService} from './../../services/validator.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public fg: FormGroup;
  constructor(private fb: FormBuilder, private vs: ValidatorService) {
    this.fg = fb.group({
      'name': [null, [Validators.required, Validators.minLength(5)]],
      'email': [null, [Validators.required, Validators.email, this.vs.checkEricssonMail]],
      'phoneNumber': [null, [Validators.required, Validators.pattern(/^\d+$/),
        Validators.minLength(10), Validators.maxLength(10)]]
    });
    console.log(this.fg.controls['email']);
  }

  public submitForm(value) {
    console.log(value);
    // this.formx.invalid;
  }

  ngOnInit() {
  }

}
