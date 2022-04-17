import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthenticationService} from "@service/authentication.service";

/**
 * @author Nordine Bittich
 */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authenticationService:AuthenticationService){}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let header = this.authenticationService.getTokenHeader();
    if (header) {
      request = request.clone({
        setHeaders:  header
      });
    }
    return next.handle(request);
  }
}
