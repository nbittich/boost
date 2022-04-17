import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

import {AuthenticationService} from '../service/authenticationservice';
import {ActivatedRoute, Router} from '@angular/router';

/**
 * @author Nordine Bittich
 */
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService, private router: Router, private actRoute: ActivatedRoute) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      let errorMessage = err.error ? err.error.message : err.statusText ? err.statusText : 'Server error';
      let errorLabel = 'Unexpected Error';
      if (err.status === 401 || err.status === 403) {
        this.authenticationService.logout();
        errorLabel = 'Unauthorized';
        errorMessage = 'Forbidden';
        this.router.navigate(['/error'],
          {
            queryParams: {label: errorLabel, status: err.status, message: errorMessage}
          });
      }
      return throwError(err);
    }));
  }
}
