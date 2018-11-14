import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityTypeDetailsComponent } from './activity-type-details.component';

describe('ActivityTypeDetailsComponent', () => {
  let component: ActivityTypeDetailsComponent;
  let fixture: ComponentFixture<ActivityTypeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityTypeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityTypeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
