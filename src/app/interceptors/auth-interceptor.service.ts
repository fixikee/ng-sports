import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private authService: AuthService) {
  }

  intercept(req: HttpRequest<any>,
            next: HttpHandler): Observable<HttpEvent<any>> {

    if (this.authService.getToken()) {
      this.headers = new HttpHeaders( {
        'Content-Type': 'application/json',
        'x-auth': this.authService.getToken()
      });
    }

    req = req.clone({ headers:  this.headers });
    return next.handle(req);
  }
}
