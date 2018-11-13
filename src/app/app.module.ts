import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NewsFeedComponent} from './screens/news-feed/news-feed.component';
import {AppRoutingModule} from './app-routing.module';
import {EventsComponent} from './screens/events/events.component';
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
  MatListSubheaderCssMatStyler
} from '@angular/material';
import { RegisterComponent } from './screens/register/register.component';
import { LocationsAddComponent } from './screens/locations/locations-add/locations-add.component';
import { LocationsComponent } from './screens/locations/locations.component';
import { LocationsDetailsComponent } from './screens/locations/locations-details/locations-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsFeedComponent,
    EventsComponent,
    LoginComponent,
    RegisterComponent,
    LocationsAddComponent,
    LocationsComponent,
    LocationsDetailsComponent
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
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
