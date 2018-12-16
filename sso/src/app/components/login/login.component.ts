import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public model: any;

  constructor() {
    this.model = {};
    this.model.userName = '';
    this.model.password = '';
  }

  public checkCredentialsAndLogin() {

  }

  ngOnInit() {
  }

}
