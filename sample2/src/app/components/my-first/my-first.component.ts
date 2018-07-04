import { Component, OnInit } from '@angular/core';

import {TeacherService} from './../../services/teacher.service';
@Component({
  selector: 'app-my-first',
  templateUrl: './my-first.component.html',
  styleUrls: ['./my-first.component.css']
})
export class MyFirstComponent implements OnInit {

  public model: any;
  
  constructor(private teacher: TeacherService) { 
    this.model = {};
  }

  ngOnInit() {
    this.model.teachers = this.teacher.getTeachers();
  }

}
