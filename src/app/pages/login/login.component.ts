import {Component, OnInit} from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {NgForm} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private toastr: ToastrService,
    private userService: UserService,
    private router: Router){}

  ngOnInit(): void {
    if(this.userService.isLoggedIn())
    this.router.navigate(['/my-infos']);
  }

  login(loginForm: NgForm) {
    console.log(loginForm.value)
  this.userService.login(loginForm.value);
  }
}
