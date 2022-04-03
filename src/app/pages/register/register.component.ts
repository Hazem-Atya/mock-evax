import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {UsersDB} from "../../utils/data";
import {lastIndexOfId} from "../../utils/user";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  maleSelected = true;
  femaleSelected = false;

  constructor(
    private userService: UserService
  ) {
  }

  ngOnInit(): void {
  }

  printSex(select: HTMLSelectElement) {
    if (select.value == "Male") {
      this.maleSelected = true;
      this.femaleSelected=false
    }else{
      this.maleSelected = false;
      this.femaleSelected=true
    }
  }
  submitForm(formulaire: NgForm){
    const user=this.userService.addUser(formulaire.value);
    // console.log(user);
    // console.log(UsersDB);
  }
}
