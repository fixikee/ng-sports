import {Component, OnInit} from '@angular/core';
import {ILocation} from '../../dtos';
import locationsData from './locations.data';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  locations: ILocation[] = locationsData;


  constructor() {
  }

  ngOnInit() {
  }

  deleteFunc() {
    console.log('delete works');
  }

}
