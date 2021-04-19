import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-movie-tile",
  templateUrl: "./movie-tile.component.html",
  styleUrls: ["./movie-tile.component.css"]
})
export class MovieTileComponent implements OnInit {
  @Input() movie;
  @Output() rentMovie = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onRentalButtonClick() {
    this.rentMovie.emit(this.movie);
  }

//-------------------------------
// dont need to pass the movie because 
// there is only 1 movie in this component
// so use this.movie - see above method.
// original method below...
// ------------------------------
//  onRentalButtonClick(movie) {
//     this.rentMovie.emit(movie);
//   }

}
