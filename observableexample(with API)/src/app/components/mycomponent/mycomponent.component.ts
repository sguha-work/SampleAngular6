import { Component, OnInit } from '@angular/core';

import { AjaxService } from './../../services/ajax.service';

@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.scss']
})
export class MycomponentComponent implements OnInit {

  constructor(private ajaxService: AjaxService) { }

  ngOnInit() {
    this.ajaxService.getData('http://jsonplaceholder.typicode.com/todos/').subscribe((data) => {
      console.log(data);
    }, (error) => {
      console.log('error');
    }, () => {
      // when everything is complete
    });
  }

}
