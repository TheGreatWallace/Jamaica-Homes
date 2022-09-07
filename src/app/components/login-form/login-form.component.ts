import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Users } from 'src/app/models/users';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  users: Users = {
    username: '',
    email: '',
    password: '',
    role: '',
  };

  specialUser!: Users;

  constructor(private usersService: UsersService,private router: Router) { }

  ngOnInit(): void {
  }

loginUsers(data: any): void {
   this.usersService.authenticateUsers(data).subscribe(
    (result: any)=>{
      console.log(result);
      if(result.token){
        window.localStorage.setItem('token', result.token);
        if(result.role == 'User' || 'user' || 'USER')
        this.router.navigate(["/profile"])
        else{
          this.router.navigate(["/admin"])
        }
      }
    }
  )
}

displayUserById(id: any): void {
  this.usersService.findUsersById(id).subscribe((result) => {
    this.specialUser = result;
  })
}

}
