import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private students: Array<Object>;

  constructor() {
    this.students = new Array(
      {
        name: "Angshu",
        title: "guha"
      },
      {
        name: "Piklu",
        title: "Saha"
      },
      {
        name: "Bibhu",
        title: "Ghosh"
      },
    );
  }

  public getStudents(): Array<Object> {
    return this.students;
  }
}
