import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Governorates, UsersDB} from "../../utils/data";
import {lastIndexOfId} from "../../utils/user";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  maleSelected = true;
  femaleSelected = false;
  governorates=Governorates;
  constructor(
    private userService: UserService,
    private router: Router){}


  ngOnInit(): void {
    if(this.userService.isLoggedIn())
      this.router.navigate(['/my-infos']);
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
