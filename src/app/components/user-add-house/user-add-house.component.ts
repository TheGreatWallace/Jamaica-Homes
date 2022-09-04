import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { House } from 'src/app/models/houses';
import { HouseService } from 'src/app/services/house.service';

@Component({
  selector: 'app-user-add-house',
  templateUrl: './user-add-house.component.html',
  styleUrls: ['./user-add-house.component.css']
})
export class UserAddHouseComponent implements OnInit {

  house: House = {
    _id: '',
    address: '',
    description: '',
    bedrooms: 1,
    bathrooms: 1,
    interior: '',
    price:'',
    landlord:'',
    contact:''
  };

  homes!: House[];
  
  constructor(private houseService: HouseService,private router: Router) { }

  ngOnInit(): void {
    this.houseService.getHouses().subscribe(
      (data) => {
        this.homes = data;
        console.log(data);
      }
    )
  }

  saveItem(): void {
    const data = {
      address: this.house.address,
      description: this.house.description,
      bedrooms: this.house.bedrooms,
      bathrooms: this.house.bathrooms,
      interior: this.house.interior,
      price: this.house.price,
      landlord: this.house.landlord,
      contact: this.house.contact
    };

    this.houseService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(["/home"])
        },
        error: (e) => console.error(e)
      });
  }

}
