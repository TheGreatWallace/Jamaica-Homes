import { House } from 'src/app/models/houses';
import { Component, OnInit } from '@angular/core';
import { HouseService } from './../../services/house.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {

  house: House = {
    _id: '',
    address: '',
    description: '',
    bedrooms: 1,
    bathrooms: 1,
    interior: '',
    price: '',
    landlord: '',
    contact: '',
  };

   // pagination
   POSTS: any;
   page: number = 1;
   count: number = 0;
   tableSize: number = 5;
   tableSizes: any = [5, 10, 15]

  message = '';
  
  homes!: House[];
  counts!: number;
  constructor(private houseService: HouseService, private router: Router) { }


  ngOnInit(): void {
    this.getHouses();
  }

  getHouses(){
    this.houseService.getHouses().subscribe(
      (data) => {
        this.homes = data;
        this.counts = this.homes.length;
        console.log(data);
      }
    )
  }

  deleteHouse(id: string): void {
    if (confirm('Are you sure you want to perform this operation ?') == true) {
      this.houseService.deleteHouse(id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res['message'] ? res['message'] : 'This House was deleted successfully!';
          this.getHouses();
        },
        error: (e) => console.error(e)
      });
    }
  }

  onDataChange(event: any){
    this.page = event;
    this.getHouses();
}

onSizeChange(event: any){
    this.tableSize = event.target.value;
    this.page = 1;
    this.getHouses();
}


logoutUsers(): void {
  window.localStorage.removeItem('token');
  // window.location.href = '/home';
  this.router.navigate(["/home"])
}

}


