import { Component, OnInit } from '@angular/core';

import { UserService } from '../services/user.service';
import { User } from '../Models/user';



@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {

  user: User

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    this.userService.getCurrentUser()
      .subscribe(x => this.user = x);
  }
}
