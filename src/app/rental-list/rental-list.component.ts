import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.css']
})
export class RentalListComponent implements OnInit {

@Input() rentals ;
@Output() clearTheList = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

onClearList(){
 this.clearTheList.emit(this.rentals=[]);
}

}