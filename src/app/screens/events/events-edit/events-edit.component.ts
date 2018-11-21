import {Component, OnDestroy, OnInit} from '@angular/core';
import {IEvent} from '../../../dtos';
import {ILocation} from '../../../dtos';
import {ActivatedRoute} from '@angular/router';
import eventsData from '../events.data';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-events-edit',
  templateUrl: './events-edit.component.html',
  styleUrls: ['./events-edit.component.css']
})
export class EventsEditComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  private id: number;
  private sub: any;
  event: IEvent;
  locations: ILocation[] = eventsData.map(e => e.location);

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.event = eventsData.find(x => x.id === this.id);

      this.createForm();
    });
  }

  public createForm(): void {
    this.form = this.formBuilder.group({
        name: [this.event.name, Validators.required],
        date: [this.event.date, Validators.required],
        location: [this.event.location, Validators.required]
      }
    );
  }

  public onSubmit(): void {
    if (this.form.valid) {
      this.event = {
        id: this.event.id,
        name: this.form.get('name').value,
        date: this.form.get('date').value,
        location: this.form.get('location').value,
        imgUrl: this.event.imgUrl
      };
      console.log(this.event);
    } else {
      alert('invalid form');
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
