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

  onRentalButtonClick(movie) {
    this.rentMovie.emit(movie);
  }
}
