import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NewsFeedComponent} from './screens/news-feed/news-feed.component';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {LoginComponent} from './screens/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatIconModule,
  MatListModule,
  MatListSubheaderCssMatStyler,
  MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material';
import { RegisterComponent } from './screens/register/register.component';
import { LocationsAddComponent } from './screens/locations/locations-add/locations-add.component';
import { LocationsComponent } from './screens/locations/locations.component';
import { LocationsDetailsComponent } from './screens/locations/locations-details/locations-details.component';
import { LocationsEditComponent } from './screens/locations/locations-edit/locations-edit.component';
import { ActivityTypeComponent } from './screens/activity-type/activity-type.component';
import { ActivityTypeDetailsComponent } from './screens/activity-type/activity-type-details/activity-type-details.component';
import { ActivityTypeEditComponent } from './screens/activity-type/activity-type-edit/activity-type-edit.component';
import { ActivityTypeAddComponent } from './screens/activity-type/activity-type-add/activity-type-add.component';
import { EventsComponent } from './screens/events/events.component';
import { EventsAddComponent } from './screens/events/events-add/events-add.component';
import { EventsEditComponent } from './screens/events/events-edit/events-edit.component';
import { EventsDetailsComponent } from './screens/events/events-details/events-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsFeedComponent,
    LoginComponent,
    RegisterComponent,
    LocationsAddComponent,
    LocationsComponent,
    LocationsDetailsComponent,
    LocationsEditComponent,
    ActivityTypeComponent,
    ActivityTypeDetailsComponent,
    ActivityTypeEditComponent,
    ActivityTypeAddComponent,
    EventsAddComponent,
    EventsComponent,
    EventsDetailsComponent,
    EventsEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatCheckboxModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
