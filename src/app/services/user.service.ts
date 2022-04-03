import {Injectable} from '@angular/core';
import {lastIndexOfId} from "../utils/user";
import {UsersDB} from "../utils/data";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private router:Router
  ) { }

  addUser(user:any){
    const newUser ={
      id:lastIndexOfId.value,
      ...user
    }
    lastIndexOfId.value++;
    UsersDB.push(newUser)
    return newUser
  }
  findUserByEmail(email:string){
    return UsersDB.find(
      (user) => {
        return user.email == email
      }
    );
  }
  login(loginData:any):boolean{
    const user = this.findUserByEmail(loginData.email);
    return (user!=null && user.password == loginData.password);
  }
  isLoggedIn():boolean{
    console.log(localStorage.getItem("user"));
    return localStorage.getItem("user")!=null;
  }
  logout(){
    console.log("heey");
    localStorage.removeItem("user");
    this.router.navigate(['/login'])
  }
}
