import {Component, OnDestroy, OnInit} from '@angular/core';
import {ILocation} from '../../../dtos';
import {ActivatedRoute} from '@angular/router';
import locationsData from '../locations.data';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-locations-edit',
  templateUrl: './locations-edit.component.html',
  styleUrls: ['./locations-edit.component.css']
})
export class LocationsEditComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  private id: number;
  private sub: any;
  location: ILocation;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.location = locationsData.find(x => x.id === this.id);

      this.createForm();
    });
  }

  public createForm(): void {
    this.form = this.formBuilder.group({
        locationName: [this.location.locationName, Validators.required],
        coordinates: [this.location.coordinates, Validators.required]
      }
    );
  }

  public onSubmit(): void {
    if (this.form.valid) {
      this.location = {
        id: this.location.id,
        locationName: this.form.get('locationName').value,
        coordinates: this.form.get('coordinates').value,
        imgUrl: this.location.imgUrl
      };
      console.log(this.location);
    } else {
      alert('invalid form');
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
