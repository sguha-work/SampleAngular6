import { Component, OnInit } from '@angular/core';
import { User } from './../../classes/user.model';
import { UserService } from './../../services/user.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public users: Array<User>;
  constructor(private userService: UserService) {
  }

  ngOnInit() {
    // this.users = this.userService.getUsers();console.log(this.users);
    this.userService.getUsers().subscribe(data => {
      console.log(data);
      this.users = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as User;
      });
      console.log(this.users);
    });
  }

}
