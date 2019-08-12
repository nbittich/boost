import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

/**
 * @author Nordine Bittich
 */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const xAuthToken = localStorage.getItem('xAuthToken');
    if (xAuthToken && xAuthToken.length) {
      request = request.clone({
        setHeaders: {
          'x-auth-token': `${xAuthToken}`
        }
      });
    }
    return next.handle(request);
  }
}
