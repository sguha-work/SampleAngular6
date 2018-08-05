import { Component, OnInit } from '@angular/core';
import { EventService } from './../../services/event.service';
@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  public name: string;
  public homeTown: string;
  public contactNumber: string;
  public rank: string;
  constructor(private event: EventService) { }

  ngOnInit() {
    this.event.event_studentData.subscribe((data) => {
      this.name = data.name;
      this.homeTown = data.address;
      this.rank = data.rank;
      this.contactNumber = data.phoneNumber;
    });
  }

}
