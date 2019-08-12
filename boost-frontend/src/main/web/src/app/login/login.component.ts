import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from './authenticationservice';

/**
 * @author Nordine Bittich
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private returnUrl: string;

  public username: string;
  public password: string;

  constructor(private router: Router, private actRoute: ActivatedRoute, private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    this.returnUrl = '';
    this.actRoute.queryParams.subscribe(params => {
      this.returnUrl = params['returnUrl'] || '';
    });
  }

  isLoggedIn() {
    return this.getUser() !== null;
  }

  getUser() {
    return this.authenticationService.getUser();
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/']);
  }

  hasRole(expected) {
    return this.authenticationService.hasRole(expected);
  }

  login() {
    this.authenticationService.login(this.username, this.password, (resp) => {
      console.log(this.returnUrl);
      this.router.navigateByUrl(this.returnUrl);
    });
  }
}
