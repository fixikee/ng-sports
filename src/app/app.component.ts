import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-sports';

  constructor(
    public router: Router,
    private auth: AuthService
  ) {
  }


  isActive(route: string): string {
    return this.router.url.includes(route) &&
    (route.length === this.router.url.length || this.router.url[route.length] === '/')
      ? 'active'
      : '';
  }

  isLoggedIn(): boolean {
    return this.auth.isLoggedIn();
  }

}
