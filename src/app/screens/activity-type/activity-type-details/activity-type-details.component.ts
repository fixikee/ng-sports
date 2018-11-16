import {Component, OnDestroy, OnInit} from '@angular/core';
import {IActivityType} from '../../../dtos';
import {ActivatedRoute} from '@angular/router';
import activityTypeData from '../../activity-type/activity-type.data';

@Component({
  selector: 'app-activity-type-details',
  templateUrl: './activity-type-details.component.html',
  styleUrls: ['./activity-type-details.component.css']
})
export class ActivityTypeDetailsComponent implements OnInit, OnDestroy {
  private id: number;
  private sub: any;
  activityType: IActivityType;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.activityType = activityTypeData.find(x => x.id === this.id);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  deleteFunc() {
    console.log('delete works');
  }

}
