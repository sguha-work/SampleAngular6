import { Component, OnInit } from '@angular/core';

import {AjaxService} from './../../services/ajax.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public model: any;

  constructor(private ajax: AjaxService) { 
    this.model = {};
    this.model.todoid = "";
  }
  
  public callAjax() {
    this.ajax.get("http://jsonplaceholder.typicode.com/todos/"+this.model.todoid).then((data) => {
      console.log(data);
    }).catch(() => {
      alert("Ajax call failed")
    });
  }
  ngOnInit() {
  }

}
