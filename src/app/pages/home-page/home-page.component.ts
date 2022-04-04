import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../utils/user";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  user:any=null;
  constructor(
    public userService: UserService
  ) { }

  ngOnInit(): void {
    this.user=this.userService.getLoggedInUser();
  }

}
