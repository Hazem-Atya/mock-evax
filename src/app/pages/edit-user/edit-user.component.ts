import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {Governorates} from "../../utils/data";
import {NgForm} from "@angular/forms";
import {User} from "../../utils/user";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user: any;
  governorates = Governorates;

  constructor(
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.user = this.userService.getLoggedInUser();
  }

  ngOnInit(): void {
  }

  editUser() {
    console.log(this.user);
    this.userService.editUser(this.user);
    this.router.navigate(['/my-infos']);
    this.toastr.success("Account edited successfully");
  }
}
