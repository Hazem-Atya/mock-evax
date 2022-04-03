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
    this.toastr.info("Welcome Hazem!")
  }

  login(loginForm: NgForm) {
    console.log(loginForm.value)
    if (this.userService.login(loginForm.value)) {
      localStorage.setItem("user", loginForm.value);
      this.router.navigate(['/my-infos'])
    } else {
      this.toastr.error("Please verify your credentials");

    }
  }
}
