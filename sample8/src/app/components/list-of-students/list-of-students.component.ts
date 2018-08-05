import { Component, OnInit } from '@angular/core';

import {EventService} from './../../services/event.service';

@Component({
  selector: 'app-list-of-students',
  templateUrl: './list-of-students.component.html',
  styleUrls: ['./list-of-students.component.css']
})
export class ListOfStudentsComponent implements OnInit {

  public students: Array<any>;
  constructor(private event: EventService) { 
    this.students = [
      {
        name: "Babu",
        rank: "good",
        phoneNumber: "9830612244",
        address: "sodepur"
      },
      {
        name: "angshu",
        rank: "poor",
        phoneNumber: "9876543210",
        address: "HB town"
      },
      {
        name: "piklu",
        rank: "good",
        phoneNumber: "0123456789",
        address: "Barasat"
      },
    ];
  }

  ngOnInit() {

  }

  public nameClicked(student: any, event: any) {
    event.preventDefault();
    alert(student.phoneNumber);
    this.event.event_studentData.emit(student);
  }

}
