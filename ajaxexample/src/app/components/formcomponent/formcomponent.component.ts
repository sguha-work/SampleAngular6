import { Component, OnInit } from '@angular/core';
import {AjaxService} from './../../services/ajax.service';
import {DataService} from './../../services/data.service';

@Component({
  selector: 'app-formcomponent',
  templateUrl: './formcomponent.component.html',
  styleUrls: ['./formcomponent.component.css']
})
export class FormcomponentComponent implements OnInit {
  public model: any;
  constructor(private ajax: AjaxService, private data: DataService) { 
    this.model = {};
    this.model.todoid = "";
  }

  public getToDoInformation() {
    this.ajax.get("http://jsonplaceholder.typicode.com/todos/"+this.model.todoid).then((data) => {
      
      if(Object.keys(data).length === 0) {
        this.data.tododata = null;  
      } else {
        this.data.tododata = data;
      }
    }).catch(() => {
      this.data.tododata = null;
    });
  }

  ngOnInit() {
  }

}
