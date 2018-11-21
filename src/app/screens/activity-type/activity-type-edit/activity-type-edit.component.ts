import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IActivityType} from '../../../dtos';
import {ActivatedRoute} from '@angular/router';
import activityTypeData from '../../activity-type/activity-type.data';

@Component({
  selector: 'app-activity-type-edit',
  templateUrl: './activity-type-edit.component.html',
  styleUrls: ['./activity-type-edit.component.css']
})
export class ActivityTypeEditComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  private id: number;
  private sub: any;
  activityType: IActivityType;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.activityType = activityTypeData.find(x => x.id === this.id);

      this.createForm();
    });
  }

  public createForm(): void {
    this.form = this.formBuilder.group({
        activityTypeName: [this.activityType.activityTypeName, Validators.required]
      }
    );
  }

  public onSubmit(): void {
    if (this.form.valid) {
      this.activityType = {
        id: this.activityType.id,
        activityTypeName: this.form.get('activityTypeName').value,
        icon: this.activityType.icon
      };
      console.log(this.activityType);
    } else {
      alert('invalid form');
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
