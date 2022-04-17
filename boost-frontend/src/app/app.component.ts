import {Component, isDevMode} from '@angular/core';
import {NavigationStart, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {AuthenticationService} from "@service/authentication.service";
import {environment} from "@env/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private subscription: Subscription;

  constructor(private router: Router, authService: AuthenticationService) {
    if (isDevMode()) {
      console.log('👋 Development! Backend Url= ' + environment.backendUrl);
    } else {
      console.log('💪 Production! Backend Url=' + environment.backendUrl);
    }
    this.subscription = router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        if (!router.navigated && authService.getUser() ) {
          // browser refresh, clean the local storage.
          // it can also be done using a timeout that we store in the localstorage as well
          // this is necessary for the authentication part
          console.log('browser refresh, check authentication (disabled...');
          authService.autoLogin(true);
        }
      }
    });
  }

}
