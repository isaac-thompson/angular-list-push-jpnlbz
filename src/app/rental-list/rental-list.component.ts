import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.css']
})
export class RentalListComponent implements OnInit {

@Input() rentals ;

  
  constructor() { }

  ngOnInit() {
  }

}