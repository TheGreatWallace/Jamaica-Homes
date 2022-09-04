import {
	Component,
	OnInit,
	ViewChild,
	ElementRef,
	Input,
	Inject,
} from '@angular/core';

import { House } from 'src/app/models/houses';
import { HouseService } from 'src/app/services/house.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
	providers: [HouseService],
})
export class HomeComponent implements OnInit {

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

	boomId = '';

    // pagination
    POSTS: any;
    page: number = 1;
    count: number = 0;
    tableSize: number = 5;
    tableSizes: any = [5, 10, 15]

	constructor(private houseService: HouseService) {}

	homes: House[] = [];

	spHome!: House;

	@ViewChild('modal') modal!: ElementRef<HTMLDivElement>;

	@Input() ifClicked: boolean = false;

	modalPopUp(id: string) {
		if (this.modal.nativeElement.style.display == 'none') {
            this.modal.nativeElement.style.display = 'block';
            this.ifClicked = false;
            
			this.houseService.getHouseById(id).subscribe((data) => {
                this.spHome = data;
			});
		} else {
			this.modal.nativeElement.style.display = 'block';
			this.ifClicked = true;
			this.houseService
				.getHouseById(id)
				.subscribe((data) => (this.spHome = data));
		}
	}

	closeModal(value: any) {
		this.ifClicked = value;
		if (this.ifClicked) {
			this.modal.nativeElement.style.display = 'none';
		}
	}



	ngOnInit(): void {
        this.displayHouses();
		
	}

    displayHouses(): void{
        this.houseService.getHouses().subscribe((result) => {
            this.homes = result;
            console.log(this.homes);
        });
    }
    


    onDataChange(event: any){
        this.page = event;
        this.displayHouses();
    }
 
    onSizeChange(event: any){
        this.tableSize = event.target.value;
        this.page = 1;
        this.displayHouses();
    }



	getHouseById(id: string): void {
		this.houseService.getHouseById(id).subscribe({
			next: (data) => {
				this.house = data;
				console.log(data);
			},
			error: (e) => console.error(e),
		});
	}

}
