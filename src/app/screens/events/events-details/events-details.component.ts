import {Component, OnDestroy, OnInit} from '@angular/core';
import {IEvent} from '../../../dtos';
import eventsData from '../../events/events.data';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-events-details',
  templateUrl: './events-details.component.html',
  styleUrls: ['./events-details.component.css']
})
export class EventsDetailsComponent implements OnInit, OnDestroy {
  private id: number;
  private sub: any;
  event: IEvent;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.event = eventsData.find(x => x.id === this.id);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  deleteFunc() {
    console.log('delete works');
  }
}
