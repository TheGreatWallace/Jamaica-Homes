import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { House } from 'src/app/models/houses';
import { HouseService } from 'src/app/services/house.service';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnInit {

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

  homes!: House[];

  message = '';

  constructor(private houseService: HouseService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.getHouse(this.route.snapshot.params["id"]);

    this.houseService.getHouses().subscribe(
      (data) => {
        this.homes = data;
        console.log(data);
      }
    )
  }
   


  getHouse(_id: string): void {
    this.houseService.getHouseById(_id)
      .subscribe({
        next: (data) => {
          this.house = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updateItem(): void {
    this.message = '';
    if (confirm('Are you sure you want to edit this information ?') == true) {
      this.houseService.updateHouse(this.house._id, this.house)
      .subscribe({
        next: (res) => {
          this.message = res.message ? res.message : 'This House was updated successfully!';
          this.router.navigate(["/home"])
        },
        error: (e) => console.error(e)
      });
    }
  }
}
