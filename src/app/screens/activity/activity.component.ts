import { Component, OnInit } from '@angular/core';
import {IActivity} from '../../dtos';
import activitiesData from './activity.data';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  activities: IActivity[] = activitiesData;

  constructor() { }

  ngOnInit() {
  }

  deleteFunc() {
    console.log('delete works');
  }
}
