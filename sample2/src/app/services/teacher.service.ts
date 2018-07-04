import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private teachers: Array<string>;
  
  constructor() {
    this.teachers = new Array ('angshu', 'piklu', 'ratna', 'bibhu');
  }

  public getTeachers(): Array<string> {
    return this.teachers;
  }
}
