import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NewsFeedComponent} from './screens/news-feed/news-feed.component';
import {LoginComponent} from './screens/login/login.component';
import {RegisterComponent} from './screens/register/register.component';
import {LocationsAddComponent} from './screens/locations/locations-add/locations-add.component';
import {LocationsComponent} from './screens/locations/locations.component';
import {LocationsDetailsComponent} from './screens/locations/locations-details/locations-details.component';
import {LocationsEditComponent} from './screens/locations/locations-edit/locations-edit.component';
import {EventsAddComponent} from './screens/events/events-add/events-add.component';
import {EventsComponent} from './screens/events/events.component';
import {EventsDetailsComponent} from './screens/events/events-details/events-details.component';
import {EventsEditComponent} from './screens/events/events-edit/events-edit.component';
import {ActivityTypeComponent} from './screens/activity-type/activity-type.component';
import {ActivityTypeDetailsComponent} from './screens/activity-type/activity-type-details/activity-type-details.component';
import {ActivityTypeEditComponent} from './screens/activity-type/activity-type-edit/activity-type-edit.component';
import {ActivityTypeAddComponent} from './screens/activity-type/activity-type-add/activity-type-add.component';
import {ActivityComponent} from './screens/activity/activity.component';
import {ActivityAddComponent} from './screens/activity/activity-add/activity-add.component';
import {ActivityEditComponent} from './screens/activity/activity-edit/activity-edit.component';
import {ActivityDetailsComponent} from './screens/activity/activity-details/activity-details.component';

const routes: Routes = [
  {path: '', redirectTo: '/news', pathMatch: 'full'},
  {path: 'news', component: NewsFeedComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'locations/add', component: LocationsAddComponent},
  {path: 'locations', component: LocationsComponent},
  {path: 'locations/:id', component: LocationsDetailsComponent},
  {path: 'locations/edit/:id', component: LocationsEditComponent},
  {path: 'activity-type', component: ActivityTypeComponent},
  {path: 'activity-type/add', component: ActivityTypeAddComponent},
  {path: 'activity-type/:id', component: ActivityTypeDetailsComponent},
  {path: 'activity-type/edit/:id', component: ActivityTypeEditComponent},
  {path: 'events/add', component: EventsAddComponent},
  {path: 'events', component: EventsComponent},
  {path: 'events/:id', component: EventsDetailsComponent},
  {path: 'events/edit/:id', component: EventsEditComponent},
  {path: 'activity', component: ActivityComponent},
  {path: 'activity/add', component: ActivityAddComponent},
  {path: 'activity/:id', component: ActivityDetailsComponent},
  {path: 'activity/edit/:id', component: ActivityEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
