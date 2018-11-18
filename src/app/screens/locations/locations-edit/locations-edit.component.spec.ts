import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsEditComponent } from './locations-edit.component';

describe('EventsEditComponent', () => {
  let component: LocationsEditComponent;
  let fixture: ComponentFixture<LocationsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
