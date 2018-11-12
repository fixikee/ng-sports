import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NewsFeedComponent} from './screens/news-feed/news-feed.component';
import {EventsComponent} from './screens/events/events.component';
import {LoginComponent} from './screens/login/login.component';
import {RegisterComponent} from './screens/register/register.component';

const routes: Routes = [
  {path: '', redirectTo: '/news', pathMatch: 'full'},
  {path: 'news', component: NewsFeedComponent},
  {path: 'events', component: EventsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
