import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RentalListService } from '../services/rental-list.service';

@Component({
  selector: 'app-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.css']
})
export class RentalListComponent implements OnInit {

@Input() rentals ;
@Output() clearTheList = new EventEmitter();
  
 constructor(public rentalListService: RentalListService){
}

  ngOnInit() {
  }

onClearList(){
//  this.clearTheList.emit(this.rentals=[]);
this.rentalListService.clearList();

}

}