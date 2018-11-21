import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IEvent, ILocation} from '../../../dtos';
import eventsData from '../events.data';

@Component({
  selector: 'app-events-add',
  templateUrl: './events-add.component.html',
  styleUrls: ['./events-add.component.css']
})
export class EventsAddComponent implements OnInit {
  public form: FormGroup;
  public data: IEvent;
  locations: ILocation[] = eventsData.map(e => e.location);

  constructor(
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.createForm();
  }

  public createForm(): void {
    this.form = this.formBuilder.group({
        name: ['', Validators.required],
        date: ['', Validators.required],
        location: ['', Validators.required]
      }
    );
  }

  public onSubmit(): void {
    if (this.form.valid) {
      this.data = {
        id: 0,
        name: this.form.get('name').value,
        date: this.form.get('date').value,
        location: this.form.get('location').value,
        imgUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
      };
      console.log(this.data);
    } else {
      alert('invalid form');
    }
  }
}
