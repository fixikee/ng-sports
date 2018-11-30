import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {
  }

  intercept(req: HttpRequest<any>,
            next: HttpHandler): Observable<HttpEvent<any>> {

    const clonedRequest = req.clone({
      headers: req.headers.set(
        'X-Auth',
        this.authService.getToken())
    });
    console.log('new headers', clonedRequest.headers.keys());
    return next.handle(clonedRequest);
  }
}
