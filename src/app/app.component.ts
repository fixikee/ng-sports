import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-sports';

  constructor(
    public router: Router
  ) {
  }


  isActive(route: string): string {
    console.log('----');
    console.log(this.router.url[route.length]);
    console.log('----');

    if (route === '/activity') {
      console.log('---activity---');
      console.log(this.router.url);
      console.log(this.router.url[route.length]);
    }

    return this.router.url.includes(route) &&
    (route.length === this.router.url.length || this.router.url[route.length] === '/')
      ? 'active'
      : '';
  }

}
