import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public model: any;

  constructor() {
    this.model = {};
    this.model.userName = '';
    this.model.password = '';
    this.model.confirmPassword = '';
  }

  public checkAndSignup() {

  }

  ngOnInit() {
  }

}
