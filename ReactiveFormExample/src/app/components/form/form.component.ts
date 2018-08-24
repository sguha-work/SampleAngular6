import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public form: FormGroup;
  constructor(private fb: FormBuilder) { 
    this.form = fb.group({
      "firstName": [null, Validators.required],
      "lastName": [null, Validators.required]
    });
  }

  ngOnInit() {
  }

}
