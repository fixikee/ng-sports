import {Component, OnDestroy, OnInit} from '@angular/core';
import {IActivity} from '../../../dtos';
import {ActivatedRoute} from '@angular/router';
import activitiesData from '../activity.data';

@Component({
  selector: 'app-activity-details',
  templateUrl: './activity-details.component.html',
  styleUrls: ['./activity-details.component.css']
})
export class ActivityDetailsComponent implements OnInit, OnDestroy {
  private id: number;
  private sub: any;
  activity: IActivity;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.activity = activitiesData.find(x => x.id === this.id);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  deleteFunc() {
    console.log('delete works');
  }

}
