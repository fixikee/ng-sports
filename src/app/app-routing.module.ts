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
import {AuthGuardService as AuthGuard} from './auth/auth-guard.service';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'news', component: NewsFeedComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent, canActivate: [AuthGuard]},
  {path: 'register', component: RegisterComponent, canActivate: [AuthGuard]},
  {path: 'locations/add', component: LocationsAddComponent, canActivate: [AuthGuard]},
  {path: 'locations', component: LocationsComponent, canActivate: [AuthGuard]},
  {path: 'locations/:id', component: LocationsDetailsComponent, canActivate: [AuthGuard]},
  {path: 'locations/edit/:id', component: LocationsEditComponent, canActivate: [AuthGuard]},
  {path: 'activity-type', component: ActivityTypeComponent, canActivate: [AuthGuard]},
  {path: 'activity-type/add', component: ActivityTypeAddComponent, canActivate: [AuthGuard]},
  {path: 'activity-type/:id', component: ActivityTypeDetailsComponent, canActivate: [AuthGuard]},
  {path: 'activity-type/edit/:id', component: ActivityTypeEditComponent, canActivate: [AuthGuard]},
  {path: 'events/add', component: EventsAddComponent, canActivate: [AuthGuard]},
  {path: 'events', component: EventsComponent, canActivate: [AuthGuard]},
  {path: 'events/:id', component: EventsDetailsComponent, canActivate: [AuthGuard]},
  {path: 'events/edit/:id', component: EventsEditComponent, canActivate: [AuthGuard]},
  {path: 'activity', component: ActivityComponent, canActivate: [AuthGuard]},
  {path: 'activity/add', component: ActivityAddComponent, canActivate: [AuthGuard]},
  {path: 'activity/:id', component: ActivityDetailsComponent, canActivate: [AuthGuard]},
  {path: 'activity/edit/:id', component: ActivityEditComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
