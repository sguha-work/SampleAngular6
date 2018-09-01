import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {validateOfficeEmail} from './../../classes/validation.class';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public emailForm: FormGroup;
  constructor(private fb: FormBuilder) { 
    this.emailForm = fb.group({
      "email":["Email", Validators.compose([Validators.required, Validators.email, validateOfficeEmail])]
    });
  }

  ngOnInit() {
  }

}
