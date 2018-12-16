import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';
import {Observable, of, Subscription} from 'rxjs';
import {LocalStorageService} from '../utils/local-storage.service';
import {IUser} from '../dtos';
import {reject} from 'q';

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
    private router: Router,
    private  localStorageService: LocalStorageService) {
  }

  async canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    const isAuthRoute = next.routeConfig.path === AuthRoutes.Login || next.routeConfig.path === AuthRoutes.Register;

    if (this.auth.isLoggedIn()) {
      return isAuthRoute ? this.redirectToRoot('/news') : true;
    } else {
      const user = await this.autoAuthentication();
      if (user) {
        this.auth.setCurrentUser(user);
        this.redirectToRoot('/news');
        return true;
      } else {
        return isAuthRoute ? true : this.redirectToRoot('/login');
      }
    }
  }

  redirectToRoot(redirectTo: string) {
    this.router.navigate([redirectTo]);
    return false;
  }

  autoAuthentication(): Promise<IUser> {
    return new Promise<IUser>((resolve) => {
      const token = this.localStorageService.getToken();

      if (token) {
        this.auth.setToken(token);
        this.auth.getCurrentUser().subscribe(
          user => {
            resolve(user);
          }
        );
      } else {
        resolve(null);
      }
    });
  }
}
