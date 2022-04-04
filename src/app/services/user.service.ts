import {Injectable} from '@angular/core';
import {lastIndexOfId} from "../utils/user";
import {Governorates, UsersDB, VaccinaedPeople, VaccinatedChildren, VaccinatedMaleAdults} from "../utils/data";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private router: Router,
    private toastr: ToastrService
  ) {
  }

  addUser(user: any) {
    if(this.findUserByEmail(user.email)){
      this.toastr.error("Email already used!");
      return ;
    }
    const newUser = {
      id: lastIndexOfId.value,
      vaccinDetails:{
        vaccinated:false
      },
      ...user
    }
    lastIndexOfId.value++;
    UsersDB.push(newUser)
    // the index of the governorate
    const index = Governorates.indexOf(newUser.governorate);
    VaccinaedPeople[index]++;
    if (newUser.age < 18) {
      VaccinatedChildren[index]++;
    } else if (newUser.sex == "Male") {
      VaccinatedMaleAdults[index]++;
    }
    this.login(newUser);
    console.log(UsersDB);
    return newUser
  }

  findUserByEmail(email: any) {
    return UsersDB.find(
      (user) => {
        return user.email == email
      }
    );
  }

  login(loginData: any): boolean {
    const user = this.findUserByEmail(loginData.email);
    if (user != null && user.password == loginData.password) {
      localStorage.setItem("user", loginData.email);
      this.router.navigate(['/my-infos'])
      this.toastr.success("Welcome",user.fullName);
      return true;
    } else {
      this.toastr.error("Please verify your credentials");
      return false;
    }
  }

  isLoggedIn(): boolean {
    // console.log(localStorage.getItem("user"));
    return localStorage.getItem("user") != null;
  }

  getLoggedInUser() {
    return this.findUserByEmail(localStorage.getItem("user"));
  }

  logout() {
    console.log("heey");
    localStorage.removeItem("user");
    this.router.navigate(['/login'])
  }
  editUser(user:any){
    for(var i =0;i<UsersDB.length;i++){
      if(UsersDB[i].id==user.id){
        UsersDB[i]=user;
      }
    }
    console.log(UsersDB);
  }
}
