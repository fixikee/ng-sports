import { Component, OnInit } from '@angular/core';
import { IActivityType } from '../../dtos';
import activityTypesData from './activity-type.data';

@Component({
  selector: 'app-activity-type',
  templateUrl: './activity-type.component.html',
  styleUrls: ['./activity-type.component.css']
})
export class ActivityTypeComponent implements OnInit {
  activityTypes: IActivityType[] = activityTypesData;

  constructor() { }

  ngOnInit() {
  }

}
