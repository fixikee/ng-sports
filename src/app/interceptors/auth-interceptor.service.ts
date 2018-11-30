import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {

  }

  // TODO: uncomment after local storage is implemented
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // req = req.clone({
    //   setHeaders: {
    //     Authorization: `Bearer ${localStorage.get('token')}`
    //   }
    // });

    return next.handle(req);
  }
}
