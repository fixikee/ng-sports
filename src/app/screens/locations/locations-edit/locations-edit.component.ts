import {Component, OnDestroy, OnInit} from '@angular/core';
import {ILocation} from '../../../dtos';
import {ActivatedRoute} from '@angular/router';
import locationsData from '../locations.data';

@Component({
  selector: 'app-locations-edit',
  templateUrl: './locations-edit.component.html',
  styleUrls: ['./locations-edit.component.css']
})
export class LocationsEditComponent implements OnInit, OnDestroy {
  private id: number;
  private sub: any;
  location: ILocation;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.location = locationsData.find(x => x.id === this.id);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
