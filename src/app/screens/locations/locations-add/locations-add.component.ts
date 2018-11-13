import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ILocation} from '../../../dtos';

@Component({
  selector: 'app-locations-add',
  templateUrl: './locations-add.component.html',
  styleUrls: ['./locations-add.component.css']
})
export class LocationsAddComponent implements OnInit {
  public form: FormGroup;
  public data: ILocation;
  public hide = true;

  constructor(
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.createForm();
  }

  public createForm(): void {
    this.form = this.formBuilder.group({
        locationName: ['', Validators.required],
        coordinates: ['', Validators.required],
      }
    );
  }

  public onSubmit(): void {
    if (this.form.valid) {
      this.data = {
        id: 0,
        locationName: this.form.get('locationName').value,
        coordinates: this.form.get('coordinates').value,
        imgUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
      };
      console.log(this.data);
    } else {
      alert('invalid form');
    }
  }
}
