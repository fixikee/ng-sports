import { Component, OnInit } from '@angular/core';
import {IEvent} from '../../dtos';
import eventsData from './events.data';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events: IEvent[] = eventsData;


  constructor() { }

  ngOnInit() {
  }

  deleteFunc() {
    console.log('delete works');
  }
}
