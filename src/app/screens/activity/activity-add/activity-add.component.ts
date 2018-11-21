import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IActivity, IActivityType, ILocation} from '../../../dtos';
import activitiesData from '../../activity/activity.data';

@Component({
  selector: 'app-activity-add',
  templateUrl: './activity-add.component.html',
  styleUrls: ['./activity-add.component.css']
})
export class ActivityAddComponent implements OnInit {
  public form: FormGroup;
  public data: IActivity;
  locations: ILocation[] = activitiesData.map(e => e.location);
  activityTypes: IActivityType[] = activitiesData.map(e => e.activityType);

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
  }

  public createForm(): void {
    this.form = this.formBuilder.group({
      date: ['', Validators.required],
      durationInSeconds: ['', Validators.required],
      distanceInMeters: ['', Validators.required],
      location: ['', Validators.required],
      activityType: ['', Validators.required]
      }
    );
  }

  public onSubmit(): void {
    if (this.form.valid) {
      this.data = {
        id: 0,
        date: this.form.get('date').value,
        durationInSeconds: this.form.get('durationInSeconds').value,
        distanceInMeters: this.form.get('distanceInMeters').value,
        location: this.form.get('location').value,
        activityType: this.form.get('activityType').value
      };
      console.log(this.data);
    } else {
      alert('invalid form');
    }
  }

}
