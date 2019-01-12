import { Component, OnInit } from '@angular/core';
import { DataService } from './../../services/data.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public model: any;
  constructor(private dataServiceObject1: DataService) {

  }

  ngOnInit() {
  }

  public submitForm() {
    const nameInputBox: HTMLInputElement = document.getElementById('txt_name') as HTMLInputElement;
    const addressInputBox: HTMLInputElement = document.getElementById('txt_address') as HTMLInputElement;
    const phoneNumberInputBox: HTMLInputElement = document.getElementById('txt_phoneNumber') as HTMLInputElement;


    const data: Object = {
      name: nameInputBox.value,
      address: addressInputBox.value,
      phoneNumber: phoneNumberInputBox.value
    };
    this.dataServiceObject1.dataArray.push(data);

  }

}
