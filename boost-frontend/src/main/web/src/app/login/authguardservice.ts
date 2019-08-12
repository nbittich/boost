import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthenticationService} from './authenticationservice';

/**
 * @author Nordine Bittich
 */
@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public auth: AuthenticationService, public router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const expectedRole = route.data.expectedRole || 'ANONYMOUS';
    if (this.auth.hasRole(expectedRole)) {
      return true;
    }
    this.router.navigate(['/error'],
      {
        queryParams: {label: 'Unauthorized', status: 401, message: 'Forbidden access', returnUrl: state.url}
      });
    return false;
  }
}
