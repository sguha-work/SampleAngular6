import { Component, OnInit } from '@angular/core';

import {StudentService} from './../../services/student.service';

@Component({
  selector: 'app-my-second',
  templateUrl: './my-second.component.html',
  styleUrls: ['./my-second.component.css']
})
export class MySecondComponent implements OnInit {

  public model: any;

  constructor(private student: StudentService) { 
    this.model = {};
  }

  ngOnInit() {
    this.model.students = this.student.getStudents();
  }

}
