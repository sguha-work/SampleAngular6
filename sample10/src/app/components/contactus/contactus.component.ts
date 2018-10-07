import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    if (window.location.href.indexOf('contactus') !== -1) {
      const elements = <any>document.getElementsByTagName('app-leftmenu');
      for (let index = 0; index < elements.length; index++) {
        elements[index].style.display = 'none';
      }
    }
  }

}
