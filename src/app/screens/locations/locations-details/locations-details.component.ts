import {Component, OnDestroy, OnInit} from '@angular/core';
import {ILocation} from '../../../dtos';
import locationsData from '../../locations/locations.data';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-locations-details',
  templateUrl: './locations-details.component.html',
  styleUrls: ['./locations-details.component.css']
})
export class LocationsDetailsComponent implements OnInit, OnDestroy {
  private id: number;
  private sub: any;
  location: ILocation;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.location = locationsData.find(x => x.id === this.id);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  deleteFunc() {
    console.log('delete works');
  }
}
