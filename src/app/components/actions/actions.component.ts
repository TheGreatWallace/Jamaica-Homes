import { House } from 'src/app/models/houses';
import { Component, OnInit } from '@angular/core';
import { HouseService } from './../../services/house.service';

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

  message = '';
  
  homes!: House[];
  constructor(private houseService: HouseService) { }


  ngOnInit(): void {
    this.getHouses();
  }

  getHouses(){
    this.houseService.getHouses().subscribe(
      (data) => {
        this.homes = data;
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

}


