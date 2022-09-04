import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Users } from 'src/app/models/users';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  users: Users = {
    username: '',
    password: '',
    role: '',
  };


  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
    
  }

  signupUsers(data: any): void {
     this.usersService.registerUsers(data).subscribe(
      (data)=>{
        console.log(data);
        this.router.navigate(["/home"])
      }
     )
  }

}
