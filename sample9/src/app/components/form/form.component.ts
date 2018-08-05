import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {DataService} from './../../services/data.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public studentName: string;
  public studentCity: string;
  public studentPhoneNumber: string;
  constructor(private data: DataService) { 
    this.studentCity = "Sodepur";
    
  }

  ngOnInit() {
  }
  public submitForm(event: any) {
    event.preventDefault();
    alert(this.studentName + " "+ this.studentCity+" "+ this.studentPhoneNumber);
    let studentObject = {
      name: this.studentName,
      city: this.studentCity,
      phoneNumber: this.studentPhoneNumber
    };
    this.data.studentData.push(studentObject);
  }
}
