import {Component, OnInit} from '@angular/core';
import {ILocation} from '../../dtos';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  locations: ILocation[] = [
    {
      locationName: 'SomoS',
      coordinates: 'világ közepe'
    },
    {
      locationName: 'Gabesz albija',
      coordinates: 'sörpong'
    },
  ];


  constructor() {
  }

  ngOnInit() {
  }

}
