import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs';

enum AuthRoutes {
  Login = 'login',
  Register = 'register'
}

enum AppRoutes {
  Events = 'events',
  Locations = 'locations',
  Activity = 'activity',
  ActivityType = 'activity-type',
  News = 'news'
}


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const isAuthRoute = next.routeConfig.path === AuthRoutes.Login || next.routeConfig.path === AuthRoutes.Register;

    if (this.auth.isLoggedIn()) {
      return isAuthRoute ? this.redirectToRoot('/news') : true;
    } else {
      return isAuthRoute ? true : this.redirectToRoot('/login');
    }
  }

  redirectToRoot(redirectTo: string) {
    this.router.navigate([redirectTo]);
    return false;
  }
}
