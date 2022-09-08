import { AfterViewInit, Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Users } from 'src/app/models/users';
import { CookieService } from 'src/app/services/cookie.service';

@Component({
	selector: 'app-user-profile',
	templateUrl: './user-profile.component.html',
	styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements AfterViewInit {
	user: Users = {
		username: '',
		password: '',
		email: '',
		country: '',
		role: '',
	};

	specialUser: Users = this.user;
	updatedUser!: Users;

	constructor(
		private _usersService: UsersService,
		private cookies: CookieService
	) { }

	Users!: Users;

	ngAfterViewInit() {   
		this.displayThisUser();
	}

	displayThisUser(): void {
		let id = localStorage.getItem('id');
		console.log(id);
		this._usersService.findUsersById(id).subscribe({

      next:(result) => {
		console.log(result);

        this.specialUser = result;
      }, 
      error: (err) => console.log(err)
    });
	}

	displayUsers(): void {
		this._usersService.findUsers().subscribe((data) => {
			this.user = data;
		});
	}

	updateUser(id: any, data: any): void {
		this._usersService.updateUserInfo(id, data).subscribe((data) => {
			this.updatedUser = data;
		});
	}
}
