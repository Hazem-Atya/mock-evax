import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public userService: UserService,
    private tostr: ToastrService
  ) { }

  ngOnInit(): void {
    const bouton = document.getElementById("navbar");
    if (bouton)
      bouton.click()
  }

  logout() {
    this.userService.logout();
    this.tostr.info("See you soon!")
  }
}
