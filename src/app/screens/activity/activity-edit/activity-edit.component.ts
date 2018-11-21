import {Component, OnDestroy, OnInit} from '@angular/core';
import {IActivity, IActivityType, ILocation} from '../../../dtos';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import activitiesData from '../../activity/activity.data';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-activity-edit',
  templateUrl: './activity-edit.component.html',
  styleUrls: ['./activity-edit.component.css']
})
export class ActivityEditComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  private id: number;
  private sub: any;
  activity: IActivity;
  locations: ILocation[] = activitiesData.map(e => e.location);
  activityTypes: IActivityType[] = activitiesData.map(e => e.activityType);

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.activity = activitiesData.find(x => x.id === this.id);

      this.createForm();
    });
  }

  public createForm(): void {
    this.form = this.formBuilder.group({
        date: [this.activity.date, Validators.required],
        durationInSeconds: [this.activity.durationInSeconds, Validators.required],
        distanceInMeters: [this.activity.distanceInMeters, Validators.required],
        location: [this.activity.location, Validators.required],
        activityType: [this.activity.activityType, Validators.required]
      }
    );
  }

  public onSubmit(): void {
    if (this.form.valid) {
      this.activity = {
        id: this.activity.id,
        date: this.form.get('date').value,
        durationInSeconds: this.form.get('durationInSeconds').value,
        distanceInMeters: this.form.get('distanceInMeters').value,
        location: this.form.get('location').value,
        activityType: this.form.get('activityType').value
      };
      console.log(this.activity);
    } else {
      alert('invalid form');
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
