import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RentalListService {

rentalList = ['Cats', 'Howard the Duck', 'Jack and Jill', 'Batman and Robin']


rentMovie(movie){
  console.log('movie rented ' + movie.title)
  if(!this.rentalList.includes(movie.title)){
  this.rentalList.push(movie.title)
  }
  console.log(this.rentalList);
}

clearList(){
  this.rentalList=[];
}

}