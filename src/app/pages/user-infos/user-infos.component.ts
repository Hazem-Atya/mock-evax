import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-user-infos',
  templateUrl: './user-infos.component.html',
  styleUrls: ['./user-infos.component.css']
})
export class UserInfosComponent implements OnInit {
  user: any = null;

  constructor(
    private userService: UserService
  ) {
  }

  ngOnInit(): void {
    this.user = this.userService.getLoggedInUser();
  }
}
