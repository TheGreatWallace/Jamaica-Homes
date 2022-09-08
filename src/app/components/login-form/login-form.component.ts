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
      console.log('RESULTS: ',result);
      console.log('USER: ',result.user )
      if(result.token){
        window.localStorage.setItem('token', result.token);
        window.localStorage.setItem('id', result.id);
        window.localStorage.setItem('expiresIn', result.expiresIn);
        if(result.user.role == 'User')
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
