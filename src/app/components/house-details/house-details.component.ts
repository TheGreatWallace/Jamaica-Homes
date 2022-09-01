import { HouseService } from 'src/app/services/house.service';
import { Component, OnInit, Output, EventEmitter, Inject, ElementRef, ViewChild, Input } from '@angular/core';
import { House } from 'src/app/models/houses';

import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-house-details',
  templateUrl: './house-details.component.html',
  styleUrls: ['./house-details.component.css']
})
export class HouseDetailsComponent implements OnInit {

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

  constructor(
    private houseService: HouseService,
    ) { }

@ViewChild('modal') modal!:ElementRef
@Input () boom !:House
@Output() close = new EventEmitter<boolean>()
removeMe:boolean = true;

ting!:House


closeModal(){
  this.close.emit(this.removeMe)
}

  ngOnInit(): void {
    this.getHouseById();
  }

  getHouseById(): void {
    this.houseService.getHouseById(this.boom._id)
      .subscribe({
        next: (data) => {
          this.ting = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}
